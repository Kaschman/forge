import React from 'react'

import DataTable, { TableDataSource } from 'forge'

const App = () => {
  const dataSource = new DataSource()
  return (
    <div>
      <DataTable dataSource={dataSource} />
    </div>
  )
}


class DataSource implements TableDataSource {
  headerName = (column: number): string => {
    switch (column) {
      case 0: return 'First Column'
      case 1: return 'Second Column'
      case 2: return 'Third Column'
      case 3: return 'Fourth Column'
      default: return 'UnknownColumn'
    }
  }

  numberOfColumns = (): number => 4
}

export default App
