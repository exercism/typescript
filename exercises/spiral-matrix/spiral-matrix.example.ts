class SpiralMatrix {

    static ofSize(size: number) {
        const spiral = Array(size).fill(Array<number>()).map(() => Array<number>(size).fill(0))

        const totalNumbers = size ** 2
        let currentNumber = 1
        let topLeft = 0
        let bottomRight = size - 1

        while (currentNumber <= totalNumbers) {
            for (let x = topLeft; x <= bottomRight; x++) {
                spiral[topLeft][x] = currentNumber++
            }
            for (let y = topLeft + 1; y <= bottomRight; y++) {
                spiral[y][bottomRight] = currentNumber++
            }
            for (let x = bottomRight - 1; x >= topLeft; x--) {
                spiral[bottomRight][x] = currentNumber++
            }
            for (let y = bottomRight - 1; y >= topLeft + 1; y--) {
                spiral[y][topLeft] = currentNumber++
            }
            topLeft++
            bottomRight--
        }

        return spiral
    }

}

export default SpiralMatrix
