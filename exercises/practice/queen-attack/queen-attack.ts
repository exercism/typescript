type Position = readonly [number, number]

type Positions = {
  white: Position
  black: Position
}
export class QueenAttack {
  public readonly black: Position
  public readonly white: Position

  // white: [whiteRow, whiteColumn]
  // black: [blackRow, blackColumn]
  constructor({}: Partial<Positions> = {}) {
    throw new Error('Remove this statement and implement this function')
  }

  toString() {
    throw new Error('Remove this statement and implement this function')
  }

  get canAttack() {
    throw new Error('Remove this statement and implement this function')
  }
}
