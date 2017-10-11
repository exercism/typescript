export default class Triangle {
    rows: number[][]
    lastRow: number[]

    constructor(rows: number) {
        this.rows = this.fillRows(rows)
        this.lastRow = this.rows[this.rows.length - 1]
    }

    newRow(prevRow: number[]) {
        let prev = 0
        const nextRow = []
        for (const x of prevRow) {
            nextRow.push(prev + x)
            prev = x
        }
        nextRow.push(1)
        return nextRow
    }

    fillRows(rows: number) {
        const result = []
        let prevRow: number[] = []
        for (let x = 0; x < rows; x++) {
            const nextRow = this.newRow(prevRow)
            result.push(nextRow)
            prevRow = nextRow
        }
        return result
    }

}