class SaddlePoints {
    static saddlePoints(matrix: number[][]) {
        const maximumRowValues: number[] = []
        const minimumColumnValues: number[] = []

        for (let i = 0; i <= matrix.length - 1; i++) {
            let maximumRowValue = Number.MIN_VALUE
            for (let j = 0; j < matrix[0].length; j++) {
                maximumRowValue = Math.max(maximumRowValue, matrix[i][j])
            }
            maximumRowValues.push(maximumRowValue)
        }

        for (let i = 0; i <= matrix[0].length - 1; i++) {
            let minimumColumnValue = Number.MAX_VALUE
            for (let j = 0; j <= matrix.length - 1; j++) {
                minimumColumnValue = Math.min(minimumColumnValue, matrix[j][i])
            }
            minimumColumnValues.push(minimumColumnValue)
        }

        const resultPoints: Array<{row: number, column: number}> = []
        for (let i = 0; i < maximumRowValues.length; i++) {
            for (let j = 0; j < minimumColumnValues.length; j++) {
                if (maximumRowValues[i] === minimumColumnValues[j]) {
                    resultPoints.push({row: i, column: j})
                }
            }
        }

        return resultPoints
    }
}

export default SaddlePoints
