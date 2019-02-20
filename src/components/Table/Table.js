import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import './Table.scss'

const table = ({ data, columns, paginationOptions, rowClasses }) => {
  const commonProps = {
    bootstrap4: true,
    classes: 'mt-3',
    // rowClasses: 'table__row',
    headerClasses: 'table__header',
    bordered: false,
    pagination: paginationFactory(paginationOptions),
    rowClasses
  }
  return (
    <ToolkitProvider keyField="id" data={data} columns={columns} search>
      {props => {
        const tableProps = {
          ...props.baseProps,
          ...commonProps
        }
        const { SearchBar } = Search
        return (
          <div>
            <SearchBar
              {...props.searchProps}
              className="race-table-search-field"
            />
            <hr />
            <BootstrapTable {...tableProps} />
          </div>
        )
      }}
    </ToolkitProvider>
  )
}

export default table
