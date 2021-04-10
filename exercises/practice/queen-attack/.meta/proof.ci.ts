const W = 8
const H = 8
const STARTING: Positions = { black: [0, 3], white: [7, 3] } as const

type Position = readonly [number, number]
type Board = string[]

type Positions = {
  white: Position
  black: Position
}

function invalidPosition({ white, black }: Positions): boolean {
  if (white[0] < 0 || white[0] >= H || white[1] < 0 || white[1] >= W) {
    return true
  }

  if (black[0] < 0 || black[0] >= H || black[1] < 0 || black[1] >= W) {
    return true
  }

  return false
}

function samePosition({ white, black }: Positions): boolean {
  return white[0] === black[0] && white[1] === black[1]
}

function constructBoard(): Board {
  return new Array(W * H).fill('_')
}

function placePieces(self: QueenAttack): void {
  const board = self.board
  const [blackRow, blackColumn] = self.black
  const [whiteRow, whiteColumn] = self.white

  board[blackRow * W + blackColumn] = 'B'
  board[whiteRow * W + whiteColumn] = 'W'
}

export class QueenAttack {
  public readonly black: Position
  public readonly white: Position
  public readonly board: string[]

  constructor(params: Partial<Positions> = {}) {
    const fullParams = { ...STARTING, ...params }
    if (invalidPosition(fullParams)) {
      throw new Error('Queen must be placed on the board')
    }

    if (samePosition(fullParams)) {
      throw new Error('Queens cannot share the same space')
    }

    this.black = fullParams.black
    this.white = fullParams.white
    this.board = constructBoard()

    placePieces(this)

    return this
  }

  public get canAttack(): boolean {
    // Same row or column
    if (this.black[0] === this.white[0] || this.black[1] === this.white[1]) {
      return true
    }

    // Diagonally
    return (
      Math.abs(this.black[0] - this.white[0]) ===
      Math.abs(this.black[1] - this.white[1])
    )
  }

  public toString(): string {
    return Array.from({ length: H }, (_, row) =>
      this.board.slice(row * H, row * H + W).join(' ')
    ).join('\n')
  }
}
