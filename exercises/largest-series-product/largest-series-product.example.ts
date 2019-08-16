export default class Series {
  private numberString: string
  private digits: number[]

  constructor(numberString: string) {
    if (numberString.match('[^0-9]')) {
      throw new Error('Invalid input.')
    }

    this.numberString = numberString
    this.digits = this.getDigits()
  }

  private getDigits(): number[] {
    return [...this.numberString].map((digit) => parseInt(digit, 10))
  }

  public largestProduct(size: number): number {
    if (size < 0) {
      throw new Error('Invalid input.')
    }

    let product,
      max = 0
    this.slices(size).forEach((slice) => {
      product = slice.reduce((a, b) => a * b, 1)
      if (product > max) {
        max = product
      }
    })
    return max
  }

  private slices(sliceSize: number): number[][] {
    const result = []
    let slice = []

    if (sliceSize > this.digits.length) {
      throw new Error('Slice size is too big.')
    }

    for (let i = 0; i < this.digits.length - sliceSize + 1; i++) {
      for (let j = 0; j < sliceSize; j++) {
        slice.push(this.digits[i + j])
      }
      result.push(slice)
      slice = []
    }

    return result
  }
}
