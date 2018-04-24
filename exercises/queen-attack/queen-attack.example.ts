class QueenAttack {
    W = 8
    H = 8
    black: number[]
    white: number[]
    board: string[]

    constructor(params: { black: [number, number], white: [number, number] }) {
        const self = this instanceof QueenAttack ? this : Object.getPrototypeOf(QueenAttack)
        if (this.samePosition(params)) {
            throw new Error('Queens cannot share the same space')
        }

        self.black = params.black
        self.white = params.white
        self.board = this.constructBoard()
        this.placePieces()

        self.toString = () => self.board.join('')

        return self
    }

    samePosition(positioning: { white: number[], black: number[] }) {
        return positioning.white[0] === positioning.black[0] && positioning.white[1] === positioning.black[1]
    }

    buildRow(cell: string, colCount: number) {
        return Array(...Array(colCount)).map(() => cell)
    }

    concatRows(row: string, rowCount: number) {
        return [...Array.prototype.concat.apply(this.buildRow(row, rowCount)).join('')]
    }

    constructBoard() {
        let row = this.buildRow('_ ', this.W).join('')
        row = `${row.substring(0, row.length - 1)}\n`
        return this.concatRows(row, this.H)
    }

    placePieces() {
        const board = this.board
        board[(this.black[0] * this.W * 2) + (this.black[1] * 2)] = 'B'
        board[(this.white[0] * this.W * 2) + (this.white[1] * 2)] = 'W'
    }

    canAttack = () => {
        if (this.black[0] === this.white[0] || this.black[1] === this.white[1]) {
            return true
        }
        return Math.abs(this.black[0] - this.white[0]) === Math.abs(this.black[1] - this.white[1])
    }
}

export default QueenAttack
