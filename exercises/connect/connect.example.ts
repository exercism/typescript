/**
 * "Player O" plays from top to bottom, "Player X" plays from left to right.
 * @param board
 */
export default class ConnectBoard {
    board: string[][]

    constructor(board: string[]) {
        this.board = board.map((b) => [...b])
    }

    winner() {
        const players = ['X', 'O']
        for (const player of players) {
            if (this.checkWin(player)) {
                return player
            }
        }
        return ''
    }

    checkWin(player: string) {
        const positions = this.startPositions(player)
        for (const position of positions) {
            if (this.search(position, player, [])) {
                return true
            }
        }
        return false
    }

    search(pos: { x: number, y: number }, XorO: string, checked: Array<{ x: number, y: number }>): boolean {
        if (!this.matches(pos, XorO)) {
            return false
        }
        if (this.winningSpot(pos, XorO)) {
            return true
        }
        checked = checked.slice(0)
        checked.push(pos)
        const matches = this.neighbors(pos).filter(({ x, y }) => this.matches({ x, y }, XorO) && checked.filter((spot) => spot.x === x && spot.y === y).length === 0)
        if (matches.length === 0) {
            return false
        }

        return matches.filter((spot) => this.search(spot, XorO, checked)).length > 0
    }

    neighbors(pos: { x: number, y: number }) {
        return [
            { x: pos.x, y: pos.y + 2 },
            { x: pos.x, y: pos.y - 2 },

            { x: pos.x + 1, y: pos.y + 1 },
            { x: pos.x - 1, y: pos.y + 1 },

            { x: pos.x + 1, y: pos.y - 1 },
            { x: pos.x - 1, y: pos.y - 1 },
        ]
    }

    startPositions(XorO: string) {
        return XorO === 'X' ?
            this.board.map((_, i) => ({ x: i, y: i })) :
            this.board[0].map((_, i) => ({ x: 0, y: i }))
    }

    winningSpot(pos: { x: number, y: number }, XorO: string) {
        return XorO === 'X' ?
            pos.y === this.board[0].length - 1 + pos.x :
            pos.x === this.board.length - 1
    }

    matches(pos: { x: number, y: number }, XorO: string) {
        return this.board[pos.x] !== undefined && this.board[pos.x][pos.y] === XorO
    }
}
