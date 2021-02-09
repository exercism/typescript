export default class Robot {
  public coordinates: number[]
  public bearing: string

  constructor(
    xcoord: number = 0,
    ycoord: number = 0,
    direction: string = 'north'
  ) {
    this.coordinates = [xcoord, ycoord]
    this.bearing = direction
  }

  public at(xcoord: number, ycoord: number): void {
    this.coordinates = [xcoord, ycoord]
  }

  public orient(direction: string): string {
    this.bearing = direction
    return `The robot is pointed ${direction}`
  }

  public advance(): void {
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

  public turnLeft(): void {
    if (this.bearing === 'north') {
      this.orient('west')
    } else if (this.bearing === 'south') {
      this.orient('east')
    } else if (this.bearing === 'east') {
      this.orient('north')
    } else if (this.bearing === 'west') {
      this.orient('south')
    }
  }

  public turnRight(): void {
    if (this.bearing === 'north') {
      this.orient('east')
    } else if (this.bearing === 'south') {
      this.orient('west')
    } else if (this.bearing === 'east') {
      this.orient('south')
    } else if (this.bearing === 'west') {
      this.orient('north')
    }
  }

  public instructions(s: string): Array<'turnLeft' | 'turnRight' | 'advance'> {
    return [...s].map((character) => {
      if (character === 'L') {
        return 'turnLeft'
      } else if (character === 'R') {
        return 'turnRight'
      } else if (character === 'A') {
        return 'advance'
      } else {
        throw 'Invalid Instruction'
      }
    })
  }

  public evaluate(s: string): void {
    this.instructions(s).forEach((instruction) => {
      this[instruction]()
    })
  }
}
