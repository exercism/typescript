export enum Bucket {
  One = 'one',
  Two = 'two',
}

export class TwoBucket {
  private readonly starter: Bucket
  private readonly x: number
  private readonly y: number
  private readonly z: number

  public goalBucket!: Bucket
  public otherBucket!: number

  constructor(x: number, y: number, z: number, starter: Bucket) {
    this.starter = starter
    this.x = x
    this.y = y
    this.z = z
  }

  private reachedGoal(measurements: number[]): boolean {
    if (measurements[0] === this.z || measurements[1] === this.z) {
      if (measurements[0] === this.z) {
        this.goalBucket = Bucket.One
        this.otherBucket = measurements[1]
      } else {
        this.goalBucket = Bucket.Two
        this.otherBucket = measurements[0]
      }
      return true
    }
    return false
  }

  private bigFirst(
    measurements: number[],
    moveCount: number,
    prBool: boolean
  ): number {
    let j = measurements[0],
      k = measurements[1]
    while (!this.reachedGoal(measurements)) {
      if (k > this.x && j === 0 && moveCount === 0) {
        j = this.x
        k = this.y - j
      } else if (j === this.x) {
        j = 0
      } else if ((k > this.x && j !== 0) || (k > this.x && prBool)) {
        k -= this.x - j
        j = this.x
      } else if (k > this.x || j === 0) {
        j = k
        k -= j
      } else if (k === 0) {
        k = this.y
      }
      measurements = [j, k]
      moveCount++
      prBool = !prBool
    }
    return moveCount
  }

  private smallFirst(
    measurements: number[],
    moveCount: number,
    prBool: boolean
  ): number {
    let j = measurements[0],
      k = measurements[1]
    while (!this.reachedGoal(measurements)) {
      if (j === this.x && moveCount === 0) {
        j = 0
        k = this.x
      } else if (j === 0) {
        j = this.x
      } else if (j === this.x && k < this.y) {
        const tempK = k
        k + j > this.y ? (k = this.y) : (k = tempK + j)
        tempK + j > this.y ? (j -= this.y - tempK) : (j = 0)
      } else if (k === this.y) {
        k = 0
      } else if (k === 0 && j < this.x) {
        k = j
        j = 0
      }
      measurements = [j, k]
      moveCount++
      prBool = !prBool
    }
    return moveCount
  }

  public moves(): number {
    let j = 0
    let k = 0 // j will be running val of bucket one, k = running val of bucket two
    this.starter === Bucket.One ? (j = this.x) : (k = this.y)
    const measurements = [j, k]
    let moveCount = 0
    const prBool = true // pour / receive boolean - need to pour or receive every other turn
    if (this.starter === Bucket.One) {
      moveCount = this.smallFirst(measurements, moveCount, prBool)
    } else {
      moveCount = this.bigFirst(measurements, moveCount, prBool)
    }
    return moveCount + 1 // accounts for first move made before loop (and moveCount starts at zero before loop)
  }
}
