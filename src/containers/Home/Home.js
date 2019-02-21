import React, { Component, Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Loader from '../../components/Loader/Loader'
import WinnerInfo from '../../components/WinnerInfo/WinnerInfo'
import {
  getWinnersListApiEndpoint,
  getRaceWinnersApiEndpoint
} from '../../constants'
import f1 from '../../assets/img/f1.png'
import queryStringUtils from '../../utils/queryStringUtils'
import './Home.scss'

class Home extends Component {
  state = {
    loading: true,
    winnerInfo: {},
    raceTable: {},
    error: false
  }
  componentDidMount() {
    this.setState(
      {
        loading: true
      },
      () => {
        axios
          .get(
            getWinnersListApiEndpoint(
              queryStringUtils.createQueryString({
                limit: 11,
                offset: 55
              })
            )
          )
          .then(res => {
            this.setState({
              loading: false,
              winnerInfo: this.getWinnerInfo(res.data)
            })
          })
      }
    )
  }

  getWinnerInfo = data => {
    const {
      MRData: {
        StandingsTable: { StandingsLists: winnerList }
      }
    } = data
    const winnerInfo = winnerList.reduce((prevObj, currentWinner) => {
      prevObj[currentWinner.season] = currentWinner.DriverStandings[0]
      return prevObj
    }, {})
    return winnerInfo
  }
  updateRaceTable = year => {
    axios.get(getRaceWinnersApiEndpoint(year)).then(res => {
      const { data } = res
      this.setState((prevState, props) => ({
        raceTable: {
          ...prevState.raceTable,
          [year]: data.MRData.RaceTable.Races
        }
      }))
    })
  }

  render() {
    const {
      state: { loading, winnerInfo, raceTable }
    } = this
    return (
      <Fragment>
        <Row className="jumbotron-wrapper">
          <Col sm="12">
            <Jumbotron>
              <div className="content-wrapper">
                <img src={f1} width={100} alt="logo" />
                <p className="lead">F1 world champions from 2005 until 2015</p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
        <Row className="winner-list-wrapper">
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              {Object.keys(winnerInfo).map(year => {
                const raceTableForYear = raceTable[year] || []
                return (
                  <Col key={year} sm="12">
                    <div className="px-4 py-4 my-2 info-wrapper">
                      <WinnerInfo
                        year={year}
                        winnerInfo={winnerInfo[year]}
                        raceTable={raceTableForYear}
                        updateRaceTable={this.updateRaceTable}
                      />
                    </div>
                  </Col>
                )
              })}
            </Fragment>
          )}
        </Row>
      </Fragment>
    )
  }
}

export default Home
