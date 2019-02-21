import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import './Table.scss'

const table = ({ data, columns, paginationOptions, rowClasses, filter }) => {
  const tableProps = {
    keyField: 'id',
    data,
    columns,
    bootstrap4: true,
    classes: 'mt-3',
    headerClasses: 'table__header',
    rowClasses,
    bordered: false,
    pagination: paginationFactory(paginationOptions),
    filter
  }
  return <BootstrapTable {...tableProps} />
}

export default table
