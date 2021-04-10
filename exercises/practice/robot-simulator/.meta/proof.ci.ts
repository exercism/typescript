export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

export class Robot {
  coordinates: number[]
  bearing: string

  static instructions(s: string) {
    return [...s].map((character) => {
      switch (character) {
        case 'L':
          return 'turnLeft'
        case 'R':
          return 'turnRight'
        case 'A':
          return 'advance'
        default:
          throw new InvalidInputError(
            `${character} is not a valid instruction character.`
          )
      }
    })
  }

  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  set direction(next: string) {
    const validDirections = ['north', 'south', 'east', 'west']
    if (!validDirections.includes(next)) {
      throw new InvalidInputError('Invalid Robot Bearing')
    }

    this.bearing = next
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.direction = 'west'
    } else if (this.bearing === 'south') {
      this.direction = 'east'
    } else if (this.bearing === 'east') {
      this.direction = 'north'
    } else if (this.bearing === 'west') {
      this.direction = 'south'
    }
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.direction = 'east'
    } else if (this.bearing === 'south') {
      this.direction = 'west'
    } else if (this.bearing === 'east') {
      this.direction = 'south'
    } else if (this.bearing === 'west') {
      this.direction = 'north'
    }
  }

  place(args: { x: number; y: number; direction: string }) {
    this.coordinates = [args.x, args.y]
    this.direction = args.direction
  }

  evaluate(s: string) {
    Robot.instructions(s).forEach((instruction) => {
      this[instruction]()
    })
  }
}
