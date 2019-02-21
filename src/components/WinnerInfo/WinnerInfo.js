import { Collapse } from 'reactstrap'
import React, { Fragment, Component } from 'react'
import filterFactory from 'react-bootstrap-table2-filter'
import moment from 'moment'
import Loader from '../Loader/Loader'
import DriverInfo from '../DriverInfo/DriverInfo'
import Table from '../Table/Table'
import { RECORDS_PER_PAGE } from '../../constants'
import { raceTableColumns } from './helpers'
import './WinnerInfo.scss'

class WinnerInfo extends Component {
  state = {
    collapse: false,
    loading: false
  }
  toggle = () => {
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
    const { collapse, loading } = nextState
    const { raceTable } = nextProps
    if (!collapse && !loading && !raceTable.length) {
      return false
    }
    return true
  }
  getRelevantRaceTableData = () => {
    const {
      props: { raceTable, year }
    } = this
    return raceTable.map((race, index) => {
      const { Results, date, raceName, url: raceUrl } = race
      const {
        Constructor: { name: constructorName },
        Driver: { driverId, familyName, givenName, url: driverUrl },
        Time: { time: raceTime },
        laps,
        grid,
        points
      } = Results[0]
      return {
        id: `${year}-${index}`,
        driverName: `${givenName} ${familyName}`,
        driverUrl,
        driverId,
        date,
        raceName,
        raceUrl,
        constructorName,
        raceTime,
        laps,
        grid,
        points
      }
    })
  }
  getRowClasses = (row, rowIndex) => {
    const {
      props: {
        winnerInfo: {
          Driver: { driverId }
        }
      }
    } = this
    const classes = ['table__row']
    if (row.driverId === driverId) {
      classes.push('table__row--champion')
    }
    return classes.join(' ')
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
    const dateOfBirth = new Date(moment(driver.dateOfBirth))
    const age = moment(new Date(year)).diff(dateOfBirth, 'years')
    const info = ` (${driver.nationality}, Age: ${age})`
    const name = `${driver.givenName} ${driver.familyName}`
    const raceInfo = `Won ${points}  points winning ${wins} races driving for `
    return (
      <Fragment>
        <div
          onClick={this.toggle}
          className="winner-info-content d-flex justify-content-between"
        >
          <DriverInfo
            year={year}
            driver={driver}
            raceInfo={raceInfo}
            name={name}
            info={info}
            constructor={constructor}
          />
          <span className={`oi oi-plus mx-2 ${collapse ? 'd-none' : ''}`} />
          <span className={`oi oi-minus mx-2 ${!collapse ? 'd-none' : ''}`} />
        </div>
        <Collapse isOpen={collapse}>
          {collapse && loading ? (
            <Loader />
          ) : raceTable.length ? (
            <div className="collapse-content py-2 px-2">
              <p className="lead">
                F1 races in {`${year}`} along with their winners
              </p>
              <Table
                data={this.getRelevantRaceTableData()}
                columns={raceTableColumns}
                paginationOptions={{
                  sizePerPage: RECORDS_PER_PAGE,
                  hideSizePerPage: true
                }}
                rowClasses={this.getRowClasses}
                filter={filterFactory()}
              />
            </div>
          ) : null}
        </Collapse>
      </Fragment>
    )
  }
}

export default WinnerInfo
