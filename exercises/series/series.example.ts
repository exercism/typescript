export default class Series {
  private readonly numberString: string
  public readonly digits: number[]

  constructor(numberString: string) {
    this.numberString = numberString
    this.digits = this.getDigits()
  }

  private getDigits(): number[] {
    return [...this.numberString].map((digit) => parseInt(digit, 10))
  }

  public slices(sliceSize: number): number[][] {
    const result: number[][] = []

    if (sliceSize > this.digits.length) {
      throw new Error('Slice size is too big.')
    }

    for (let i = 0; i < this.digits.length - sliceSize + 1; i++) {
      result.push(this.digits.slice(i, i + sliceSize))
    }

    return result
  }
}
