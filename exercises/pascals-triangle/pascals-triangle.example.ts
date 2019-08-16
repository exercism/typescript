export default class Triangle {
  public readonly rows: number[][]
  public readonly lastRow: number[]

  constructor(rows: number) {
    this.rows = this.fillRows(rows)
    this.lastRow = this.rows[this.rows.length - 1]
  }

  private newRow(prevRow: number[]): number[] {
    let prev = 0
    const nextRow = []
    for (const x of prevRow) {
      nextRow.push(prev + x)
      prev = x
    }
    nextRow.push(1)
    return nextRow
  }

  private fillRows(rows: number): number[][] {
    const result = []
    let prevRow: number[] = []
    for (let x = 0; x < rows; x++) {
      const nextRow = this.newRow(prevRow)
      result.push(nextRow)
      prevRow = nextRow
    }
    return result
  }
}
