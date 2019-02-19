import { Collapse } from 'reactstrap'
import React, { PureComponent, Fragment, Component } from 'react'
import moment from 'moment'
import Loader from '../Loader/Loader'
import './WinnerInfo.scss'

class WinnerInfo extends Component {
  state = {
    collapse: false,
    loading: false
  }
  toggle = () => {
    console.log('in toggle')
    const {
      props: { raceTable, year, updateRaceTable }
    } = this
    if (!raceTable.length) {
      this.setState(
        (prevState, props) => ({
          collapse: !prevState.collapse,
          loading: true
        }),
        () => {
          updateRaceTable(year)
        }
      )
    } else {
      this.setState((prevState, props) => ({
        collapse: !prevState.collapse
      }))
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { loading: prevLoading } = prevState
    if (prevLoading) {
      this.setState({
        loading: false
      })
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextState.collapse &&
      !nextState.loading &&
      nextProps.raceTable.length === 0
    ) {
      return false
    }
    return true
  }
  render() {
    const {
      props: {
        year,
        winnerInfo: { Driver: driver, Constructors: constructor, points, wins },
        raceTable
      },
      state: { collapse, loading }
    } = this
    console.log('raceTable', raceTable)
    const dateOfBirth = moment(driver.dateOfBirth)
    const age = moment(year).diff(dateOfBirth, 'years')
    const info = ` (${driver.nationality}, at ${age} years of age)`
    const name = `${driver.givenName} ${driver.familyName}`
    const raceInfo = `Won ${points}  points winning ${wins} races driving for `
    return (
      <Fragment>
        <div
          onClick={this.toggle}
          className="winner-info-content d-flex justify-content-between"
        >
          <div className="driver-info d-flex">
            <div className="winning-year">{year}</div>
            <div className="d-flex flex-column justify-content-center">
              <div className="personal-info px-3 py-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${driver.url}`}
                >
                  {' '}
                  <strong>{name}</strong>
                </a>
                <span>{info}</span>
              </div>

              <p className="race-info px-3 py-2 lead">
                {raceInfo}{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${constructor[0].url}`}
                >
                  {`${constructor[0].name}`}
                </a>
              </p>
            </div>
          </div>
          <span className={`oi oi-plus mx-2 ${collapse ? 'd-none' : ''}`} />
          <span className={`oi oi-minus mx-2 ${!collapse ? 'd-none' : ''}`} />
        </div>
        <Collapse isOpen={collapse}>
          {collapse && loading ? (
            <Loader />
          ) : raceTable.length ? (
            <div className="collapse-content py-2 px-2">
              {raceTable[0].raceName}
            </div>
          ) : null}
        </Collapse>
      </Fragment>
    )
  }
}

export default WinnerInfo
