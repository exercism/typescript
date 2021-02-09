export default class ComplexNumber {
  public readonly real: number
  public readonly imag: number

  constructor(real: number, imag: number) {
    this.real = real
    this.imag = imag
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag)
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag)
  }

  public mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.imag * other.real + this.real * other.imag
    )
  }

  public div(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      (this.real * other.real + this.imag * other.imag) /
        (other.real * other.real + other.imag * other.imag),
      (this.imag * other.real - this.real * other.imag) /
        (other.real * other.real + other.imag * other.imag)
    )
  }

  public get abs(): number {
    return Math.sqrt(this.real * this.real + this.imag * this.imag)
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag !== 0 ? -this.imag : 0)
  }

  public get exp(): ComplexNumber {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.exp(this.real) * Math.sin(this.imag)
    )
  }
}
