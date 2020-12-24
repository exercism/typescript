class Matrix {
  private description: string
  public rows: number[][] = new Array<number[]>()
  public columns: number[][] = new Array<number[]>()

  constructor(description: string) {
    this.description = description
    this.parseMatrix()
  }

  private parseMatrix(): void {
    this.parseRows()
    this.parseColumns()
  }

  private parseRows(): void {
    this.rows = this.description.split('\n').map((row) => {
      return row.split(' ').map((char) => {
        return parseInt(char, 10)
      })
    })
  }

  private parseColumns(): void {
    const rowsLength = this.rows.length
    const columnsLength = this.rows[0].length
    for (let i = 0; i < columnsLength; i++) {
      this.columns.push([])
      for (let j = 0; j < rowsLength; j++) {
        this.columns[i].push(this.rows[j][i])
      }
    }
  }
}

export default Matrix
