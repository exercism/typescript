export default class Squares {
  public readonly squareOfSum: number
  public readonly sumOfSquares: number
  public readonly difference: number

  constructor(int: number) {
    this.squareOfSum = this._squareOfSum(int)
    this.sumOfSquares = this._sumOfSquares(int)
    this.difference = this._difference()
  }

  private _squareOfSum(int: number): number {
    let sum = 0
    let i = 1

    while (i <= int) {
      sum += i
      i++
    }

    return sum * sum
  }

  private _sumOfSquares(int: number): number {
    let sum = 0
    let i = 1

    while (i <= int) {
      sum += i * i
      i++
    }

    return sum
  }

  private _difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
