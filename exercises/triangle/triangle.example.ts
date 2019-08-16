enum Type {
  Equilateral = "equilateral",
  Isosceles = "isosceles",
  Scalene = "scalene"
}

export default class Triangle {
  private readonly sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  public kind(): Type {
    if (this.isIllegal()) {
      throw new TypeError("illegal")
    }

    if (this.isEquilateral()) {
      return Type.Equilateral
    }

    if (this.isIsosceles()) {
      return Type.Isosceles
    }

    return Type.Scalene
  }

  private isIllegal(): boolean {
    return this.violatesInequality() || this.hasImpossibleSides()
  }

  private violatesInequality(): boolean {
    const [a, b, c] = this.sides
    return a + b < c || a + c < b || b + c < a
  }

  private hasImpossibleSides(): boolean {
    const [a, b, c] = this.sides
    return a <= 0 || b <= 0 || c <= 0
  }

  private isEquilateral(): boolean {
    return this.uniqueSidesLength() === 1
  }

  private isIsosceles(): boolean {
    return this.uniqueSidesLength() === 2
  }

  private uniqueSidesLength(): number {
    return new Set(this.sides).size
  }
}
