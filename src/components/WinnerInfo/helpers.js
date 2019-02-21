import React from 'react'
import { textFilter } from 'react-bootstrap-table2-filter'

const createDateFromTimeStamp = (cell, row, rowIndex) =>
  cell
    ? new Date(cell).toLocaleString('en-us', {
        month: 'short',
        day: '2-digit'
      })
    : ''

const createHyperLink = (cell, row, rowIndex, { urlKey }) => (
  <a target="_blank" rel="noopener noreferrer" href={`${row[urlKey]}`}>
    {cell}
  </a>
)
export const raceTableColumns = [
  {
    dataField: 'id',
    text: 'required',
    hidden: true
  },
  {
    dataField: 'driverName',
    text: 'Driver',
    formatter: createHyperLink,
    filter: textFilter(),
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
    filter: textFilter(),
    text: 'Constructor'
  },
  {
    dataField: 'laps',
    text: 'Laps',
    sort: true,
    headerClasses: 'd-none d-sm-table-cell',
    classes: 'd-none d-sm-table-cell'
  },
  {
    dataField: 'points',
    text: 'Points',
    sort: true,
    headerClasses: 'd-none d-sm-table-cell',
    classes: 'd-none d-sm-table-cell'
  },
  {
    dataField: 'raceTime',
    text: 'Race Time',
    sort: true,
    headerClasses: 'd-none d-md-table-cell',
    classes: 'd-none d-md-table-cell'
  },
  {
    dataField: 'date',
    text: 'Date',
    sort: true,
    headerClasses: 'd-none d-sm-table-cell',
    classes: 'd-none d-sm-table-cell',
    formatter: createDateFromTimeStamp
  }
]
