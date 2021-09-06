type Options = {
  minFactor?: number
  maxFactor?: number
  sum: number
}

type TripletArray = [number, number, number]

class Triplet {
  constructor(
    private readonly a: TripletArray[0],
    private readonly b: TripletArray[1],
    private readonly c: TripletArray[2]
  ) {}

  public toArray(): TripletArray {
    return [this.a, this.b, this.c]
  }

  public get pythagorean(): boolean {
    return this.a * this.a + this.b * this.b === this.c * this.c
  }

  public get sum(): number {
    return this.a + this.b + this.c
  }
}

export function triplets({ minFactor, maxFactor, sum }: Options): Triplet[] {
  const min = minFactor || 1
  const max = maxFactor || sum - 1

  const isDesired = (triplet: Triplet): boolean => {
    return triplet.pythagorean && (!sum || triplet.sum === sum)
  }

  const result: Triplet[] = []

  for (let a = min; a < max - 1; a += 1) {
    for (let b = a + 1; b < max; b += 1) {
      for (let c = b + 1; c <= max; c += 1) {
        const triplet = new Triplet(a, b, c)

        if (isDesired(triplet)) {
          result.push(triplet)
        }
      }
    }
  }

  return result
}
