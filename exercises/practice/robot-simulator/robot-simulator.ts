export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Direction = 'north' | 'east' | 'south' | 'west'

export class Robot {
  get bearing() {
    throw new Error('Remove this statement and implement this function')
  }

  get coordinates() {
    throw new Error('Remove this statement and implement this function')
  }

  place({}: { x: number; y: number; direction: Direction }) {
    throw new Error('Remove this statement and implement this function')
  }

  evaluate(instructions: string) {
    throw new Error('Remove this statement and implement this function')
  }
}
