export class InvalidInputError extends Error {
  constructor(message: string) {
    super()
    this.message = message || 'Invalid Input'
  }
}

type Bearing = 'north' | 'south' | 'east' | 'west'
type Instruction = 'turnLeft' | 'turnRight' | 'advance'

const validDirections: Bearing[] = ['north', 'south', 'east', 'west']

function isValidBearing(next: string): next is Bearing {
  return validDirections.includes(next as Bearing)
}
export class Robot {
  public coordinates: [number, number]
  public bearing: Bearing

  private static instructions(s: string): Instruction[] {
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

  private set direction(next: string) {
    if (!isValidBearing(next)) {
      throw new InvalidInputError('Invalid Robot Bearing')
    }

    this.bearing = next
  }

  private advance(): void {
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

  private turnLeft(): void {
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

  private turnRight(): void {
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

  public place(args: { x: number; y: number; direction: string }): void {
    this.coordinates = [args.x, args.y]
    this.direction = args.direction
  }

  public evaluate(s: string): void {
    Robot.instructions(s).forEach((instruction) => {
      this[instruction]()
    })
  }
}
