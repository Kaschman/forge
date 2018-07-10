export interface TableDataSource {
  headerName(forColumn: number): string,
  numberOfColumns(): number,
  numberOfRows(): number,
}
