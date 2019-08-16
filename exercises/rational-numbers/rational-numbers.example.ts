class Rational {
  private numerator: number
  private denominator: number

  constructor(numerator: number, denominator: number) {
    if (denominator === 0) {
      throw new Error("Denominator must not be zero.")
    }

    this.numerator = numerator
    this.denominator = denominator

    this.reduce()
    this.ensureSignInNumerator()
  }

  public add(that: Rational): Rational {
    const commonDenominator = this.denominator * that.denominator
    return new Rational(
      this.numerator * that.denominator + that.numerator * this.denominator,
      commonDenominator
    )
  }

  public sub(that: Rational): Rational {
    const commonDenominator = this.denominator * that.denominator
    return new Rational(
      this.numerator * that.denominator - that.numerator * this.denominator,
      commonDenominator
    )
  }

  public mul(that: Rational): Rational {
    return new Rational(
      this.numerator * that.numerator,
      this.denominator * that.denominator
    )
  }

  public div(that: Rational): Rational {
    return new Rational(
      this.numerator * that.denominator,
      this.denominator * that.numerator
    )
  }

  public abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator))
  }

  public exprational(n: number): Rational {
    return new Rational(
      Math.pow(this.numerator, n),
      Math.pow(this.denominator, n)
    )
  }

  public expreal(base: number): number {
    return Math.pow(
      10.0,
      Math.log10(Math.pow(base, this.numerator)) / this.denominator
    )
  }

  public reduce(): this {
    const commonDivisor = this.gcd(this.numerator, this.denominator)

    this.numerator /= commonDivisor
    this.denominator /= commonDivisor
    this.ensureSignInNumerator()

    return this
  }

  private gcd(a: number, b: number): number {
    let localA = a
    let localB = b
    while (localB !== 0) {
      const t = localB
      localB = localA % localB
      localA = t
    }
    return localA
  }

  private ensureSignInNumerator(): void {
    if (this.denominator < 0) {
      this.denominator = -this.denominator
      this.numerator = -this.numerator
    }
  }
}

export default Rational
