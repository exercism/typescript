export default class Triplet {
  private readonly a: number
  private readonly b: number
  private readonly c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  public isPythagorean(): boolean {
    return this.a * this.a + this.b * this.b === this.c * this.c
  }

  public sum(): number {
    return this.a + this.b + this.c
  }

  public product(): number {
    return this.a * this.b * this.c
  }

  public static where(maxFactor: number, minFactor?: number, sum?: number): Triplet[] {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return new Triplets(maxFactor, minFactor, sum).toArray()
  }
}

class Triplets {
  private readonly min: number
  private readonly max: number
  private readonly sum?: number

  constructor(maxFactor: number, minFactor: number = 1, sum?: number) {
    this.max = maxFactor
    this.min = minFactor
    this.sum = sum
  }

  public toArray(): Triplet[] {
    const triplets = []
    for (let a = this.min; a < this.max - 1; a++) {
      for (let b = a + 1; b < this.max; b++) {
        for (let c = b + 1; c <= this.max; c++) {
          const triplet = new Triplet(a, b, c)
          if (this.isDesired(triplet)) {
            triplets.push(triplet)
          }
        }
      }
    }
    return triplets
  }

  private isDesired(triplet: Triplet): boolean {
    return triplet.isPythagorean() && (!this.sum || triplet.sum() === this.sum)
  }
}
