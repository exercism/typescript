class SumOfMultiples {
  private numbers: number[]

  constructor(numbers: number[]) {
    this.numbers = numbers
  }

  public to(limit: number): number {
    const multiples = new Set<number>()
    this.numbers.forEach((n: number) => {
      let i = n
      while (i < limit) {
        multiples.add(i)
        i += n
      }
    })
    return [...multiples].reduce((a, b) => a + b, 0)
  }
}

export default (numbers: number[]): SumOfMultiples => new SumOfMultiples(numbers)
