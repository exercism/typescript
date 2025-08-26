class Bucket {
  public name: string
  public readonly size: number
  public amount: number

  constructor(name: string, size: number) {
    this.name = name
    this.size = size
    this.amount = 0
  }

  // accessors
  public get available(): number {
    return this.size - this.amount
  }
  public get isFull(): boolean {
    return this.amount === this.size
  }
  public get isEmpty(): boolean {
    return this.amount === 0
  }

  public fill(): void {
    this.amount = this.size
  }
  public empty(): void {
    this.amount = 0
  }

  public pourInto(other: Bucket): void {
    const quantity = Math.min(this.amount, other.available)
    this.amount -= quantity
    other.amount += quantity
  }
}

const gcd: (a: number, b: number) => number = (a, b) =>
  b === 0 ? a : gcd(b, a % b)

export class TwoBucket {
  private readonly buckets: Bucket[]
  private readonly goal: number
  public goalBucket: string | undefined
  public otherBucket: number | undefined

  constructor(size1: number, size2: number, goal: number, start: string) {
    this.goal = goal
    this.buckets = [new Bucket('one', size1), new Bucket('two', size2)]

    if (start === 'two') {
      this.buckets.reverse()
    }
  }

  private get first(): Bucket {
    return this.buckets[0]
  }
  private get second(): Bucket {
    return this.buckets[1]
  }

  private validate(): void {
    if (this.goal > Math.max(this.first.size, this.second.size)) {
      throw new Error('Goal is bigger than the largest bucket.')
    }

    if (this.goal % gcd(this.first.size, this.second.size) !== 0) {
      throw new Error(
        'Goal must be a multiple of the GCD of the sizes of the two buckets.'
      )
    }
  }

  private moves(): number {
    this.validate()

    this.first.empty()
    this.second.empty()
    let moves = 0

    // fill the start bucket with the first move
    this.first.fill()
    moves += 1

    // optimization: if the other bucket is the right size,
    // fill it immediately with the second move
    if (this.second.size === this.goal) {
      this.second.fill()
      moves += 1
    }

    while (true) {
      if (this.first.amount === this.goal) {
        this.goalBucket = this.first.name
        this.otherBucket = this.second.amount
        return moves
      }

      if (this.second.amount === this.goal) {
        this.goalBucket = this.second.name
        this.otherBucket = this.first.amount
        return moves
      }

      if (this.first.isEmpty) {
        this.first.fill()
      } else if (this.second.isFull) {
        this.second.empty()
      } else {
        this.first.pourInto(this.second)
      }

      moves += 1
    }
  }
}
