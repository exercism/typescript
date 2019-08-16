export default class Squares {
    squareOfSum: number
    sumOfSquares: number
    difference: number

    constructor(int: number) {
        this.squareOfSum = this._squareOfSum(int)
        this.sumOfSquares = this._sumOfSquares(int)
        this.difference = this._difference()
    }

    private _squareOfSum(int: number) {
        let sum = 0
        let i = 1

        while (i <= int) {
            sum += i
            i++
        }

        return sum * sum
    }

    private _sumOfSquares(int: number) {
        let sum = 0
        let i = 1

        while (i <= int) {
            sum += (i * i)
            i++
        }

        return sum
    }

    private _difference() {
        return this.squareOfSum - this.sumOfSquares
    }
}
