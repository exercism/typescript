class Grains {
    static square(square: number): number {
        if (square <= 0 || square >= 65) {
            throw new Error()
        }

        return Math.pow(2, square - 1)
    }

    static total(): number {
        let total = 0

        for (let i = 1; i <= 64; i++) {
            total += this.square(i)
        }

        return total
    }
}

export default Grains
