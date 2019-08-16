class QueenAttack {
  private readonly W = 8
  private readonly H = 8
  public black: number[]
  public white: number[]
  private board: string[]

  constructor(params: { black: [number, number]; white: [number, number] }) {
    if (this.samePosition(params)) {
      throw new Error("Queens cannot share the same space")
    }

    this.black = params.black
    this.white = params.white
    this.board = this.constructBoard()
    this.placePieces()

    this.toString = (): string => this.board.join("")

    return this
  }

  private samePosition(positioning: { white: number[]; black: number[] }): boolean {
    return (
      positioning.white[0] === positioning.black[0] &&
      positioning.white[1] === positioning.black[1]
    )
  }

  private buildRow(cell: string, colCount: number): string[] {
    return Array(...Array(colCount)).map(() => cell)
  }

  private concatRows(row: string, rowCount: number): string[] {
    return [
      ...Array.prototype.concat.apply(this.buildRow(row, rowCount)).join("")
    ]
  }

  private constructBoard(): string[] {
    let row = this.buildRow("_ ", this.W).join("")
    row = `${row.substring(0, row.length - 1)}\n`
    return this.concatRows(row, this.H)
  }

  private placePieces(): void {
    const board = this.board
    board[this.black[0] * this.W * 2 + this.black[1] * 2] = "B"
    board[this.white[0] * this.W * 2 + this.white[1] * 2] = "W"
  }

  public canAttack = (): boolean => {
    if (this.black[0] === this.white[0] || this.black[1] === this.white[1]) {
      return true
    }
    return (
      Math.abs(this.black[0] - this.white[0]) ===
      Math.abs(this.black[1] - this.white[1])
    )
  }
}

export default QueenAttack
