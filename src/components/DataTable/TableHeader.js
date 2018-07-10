import * as React from 'react'

import type { TableDataSource } from './TableDataSource'
import HeaderCell from './Cell/HeaderCell'

type Props = {
  dataSource: TableDataSource,
}

const TableHeader = (props: Props) => (
  <thead>
    <tr>
      {generateHeader(props.dataSource)}
    </tr>
  </thead>
)

const generateHeader = (dataSource: TableDataSource): React.Node => {
  const columnCount = dataSource.numberOfColumns()
  const headings: Array<string> = []
  for (let i = 0; i < columnCount; i += 1) {
    headings.push(dataSource.headerName(i))
  }
  return (
    headings.map((heading, headingIndex) => {
      const id = `heading-cell-${headingIndex}`
      return (
        <HeaderCell content={heading} key={id} />
      )
    })
  )
}

export default TableHeader
