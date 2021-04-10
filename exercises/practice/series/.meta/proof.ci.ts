export class Series {
  numberString: string
  digits: number[]

  constructor(numberString: string) {
    if (!numberString) {
      throw new Error('series cannot be empty')
    }

    this.numberString = numberString
    this.digits = this.getDigits()
  }

  getDigits(): number[] {
    return [...this.numberString].map((digit) => parseInt(digit, 10))
  }

  slices(sliceSize: number): number[][] {
    const result: number[][] = []
    let slice: number[] = []

    if (sliceSize < 0) {
      throw new Error('slice length cannot be negative')
    }

    if (sliceSize == 0) {
      throw new Error('slice length cannot be zero')
    }

    if (sliceSize > this.digits.length) {
      throw new Error('slice length cannot be greater than series length')
    }

    for (let i = 0; i < this.digits.length - sliceSize + 1; i += 1) {
      for (let j = 0; j < sliceSize; j += 1) {
        slice.push(this.digits[i + j])
      }
      result.push(slice)
      slice = []
    }

    return result
  }
}
