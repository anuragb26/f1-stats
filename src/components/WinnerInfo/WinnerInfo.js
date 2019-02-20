import { Collapse } from 'reactstrap'
import React, { Fragment, Component } from 'react'
import moment from 'moment'
import Loader from '../Loader/Loader'
import Table from '../Table/Table'
import './WinnerInfo.scss'

export const createDateFromTimeStamp = (cell, row, rowIndex) =>
  cell
    ? new Date(cell).toLocaleString('en-us', {
        month: 'short',
        year: 'numeric',
        day: '2-digit'
      })
    : ''

export const createHyperLink = (cell, row, rowIndex, { urlKey }) => (
  <a target="_blank" rel="noopener noreferrer" href={`${row[urlKey]}`}>
    {cell}
  </a>
)
const raceTableColumns = [
  {
    dataField: 'id',
    text: 'required',
    hidden: true
  },
  {
    dataField: 'driverName',
    text: 'Driver',
    formatter: createHyperLink,
    formatExtraData: {
      urlKey: 'driverUrl'
    }
  },
  {
    dataField: 'raceName',
    text: 'Race',
    formatter: createHyperLink,
    formatExtraData: {
      urlKey: 'raceUrl'
    }
  },
  {
    dataField: 'constructorName',
    text: 'Constructor'
  },
  {
    dataField: 'laps',
    text: 'Laps',
    sort: true
  },
  {
    dataField: 'points',
    text: 'Points',
    sort: true
  },
  {
    dataField: 'raceTime',
    text: 'Race Time',
    sort: true
  },
  {
    dataField: 'date',
    text: 'Date',
    sort: true,
    formatter: createDateFromTimeStamp
  }
]
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
    const dateOfBirth = moment(driver.dateOfBirth)
    const age = moment(year).diff(dateOfBirth, 'years')
    const info = ` (${driver.nationality}, at ${age} years of age)`
    const name = `${driver.givenName} ${driver.familyName}`
    const raceInfo = `Won ${points}  points winning ${wins} races driving for `
    if (raceTable.length) {
      console.log('raceTable', raceTable)
    }
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
              {/* {raceTable[0].raceName} */}
              <p className="lead">
                Table below lists down the winners for every Grand Prix for the
                year {`${year}`} highlighting races won by {`${name}`}
              </p>
              <Table
                data={this.getRelevantRaceTableData()}
                columns={raceTableColumns}
                paginationOptions={{ sizePerPage: 6, hideSizePerPage: true }}
                rowClasses={this.getRowClasses}
              />
            </div>
          ) : null}
        </Collapse>
      </Fragment>
    )
  }
}

export default WinnerInfo
