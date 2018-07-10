import * as React from 'react'
import styled from 'styled-components'

import TableHeader from './TableHeader'
import type { TableDataSource } from './TableDataSource'

//  Styled Components
type TableStyles = {

}

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
`

//  Main
export type Props = {
  dataSource: TableDataSource,
  styles?: TableStyles,
}

const DataTable = (props: Props) => (
  <Table className="DataTable" styles={props.styles}>
    <TableHeader {...props} />
  </Table>
)

DataTable.defaultProps = {
  styles: null,
}

export default DataTable
