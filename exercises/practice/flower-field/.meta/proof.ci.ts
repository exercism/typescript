const FLOWER = '*'

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

export function annotate(rows: string[]): string[] {
  if (noDataPresent(rows)) {
    return rows
  }

  const inputBoard = rows.map((row) => [...row])

  const result = inputBoard.map((row, x) =>
    [...row].map((cell, y) => cellToFlowerOrCount(cell, inputBoard, x, y))
  )

  return stringify(result as string[][])
}

function cellToFlowerOrCount(
  cell: string,
  inputBoard: string[][],
  x: number,
  y: number
): number | '*' | ' ' {
  if (cell === FLOWER) {
    return FLOWER
  }
  return countAdjacentFlowers(inputBoard, x, y) || ' '
}

function countAdjacentFlowers(board: string[][], x: number, y: number): number {
  return DELTAS.filter((d) => adjacentSquareIsOnBoard(board, x, d)).filter(
    (d) => adjacentSquareHasFlower(board, x, y, d)
  ).length
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

function adjacentSquareHasFlower(
  board: string[][],
  x: number,
  y: number,
  d: number[]
): boolean {
  return board[x + d[0]][y + d[1]] === FLOWER
}
