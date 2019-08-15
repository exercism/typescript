class CollatzConjecture {
    public static steps(n: number): number {
        if (n <= 0) {
            throw new Error('Only positive numbers are allowed')
        }
        return this.calculateStepsRecursively(n, 0)
    }

    private static calculateStepsRecursively(n: number, count: number): number {
        if (n === 1) {
            return count
        } else if (n % 2 === 0) {
            return this.calculateStepsRecursively(n / 2, ++count)
        } else {
            return this.calculateStepsRecursively(n * 3 + 1, ++count)
        }
    }
}

export default CollatzConjecture