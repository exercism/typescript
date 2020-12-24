const MINE = '*'

const DELTAS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, 1],
  [0, -1],
]

class Minesweeper {
  public annotate(rows: string[]): string[] {
    if (noDataPresent(rows)) {
      return rows
    }

    const inputBoard = rows.map((row) => [...row])

    const result = inputBoard.map((row, x) =>
      [...row].map((cell, y) => cellToMineOrCount(cell, inputBoard, x, y))
    )

    return stringify(result as string[][])
  }
}

function cellToMineOrCount(
  cell: string,
  inputBoard: string[][],
  x: number,
  y: number
): number | '*' | ' ' {
  if (cell === MINE) {
    return MINE
  }
  return countAdjacentMines(inputBoard, x, y) || ' '
}

function countAdjacentMines(board: string[][], x: number, y: number): number {
  return DELTAS.filter((d) =>
    adjacentSquareIsOnBoard(board, x, d)
  ).filter((d) => adjacentSquareHasMine(board, x, y, d)).length
}

function stringify(board: string[][]): string[] {
  return board.map((row) => row.join(''))
}

function noDataPresent(rows: string[]): boolean {
  return rows.length === 0 || rows[0].length === 0
}

function adjacentSquareIsOnBoard(
  board: string[][],
  x: number,
  d: number[]
): string[] {
  return board[x + d[0]]
}

function adjacentSquareHasMine(
  board: string[][],
  x: number,
  y: number,
  d: number[]
): boolean {
  return board[x + d[0]][y + d[1]] === MINE
}

export default Minesweeper
