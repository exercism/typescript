export default class Series {
  numberString: string
  digits: number[]

  constructor(numberString: string) {
    this.numberString = numberString
    this.digits = this.getDigits()
  }

  getDigits(): number[] {
    return [...this.numberString].map((digit) => parseInt(digit, 10))
  }

  slices(sliceSize: number): number[][] {
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
