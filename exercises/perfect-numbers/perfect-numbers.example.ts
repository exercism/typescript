class PerfectNumbers {
    static classify(n: number): string {
        let i
        let sum
        let result

        // Check if the input is valid
        if (n <= 0) {
            throw new Error('Classification is only possible for natural numbers.')
        }

        // Factorize the current number.
        const divsArray = this.getDivisors(n)

        // Sum the factors.
        sum = 0
        for (i = 0; i < divsArray.length; i++) {
            sum = sum + divsArray[i]
        }

        // Check if the number is perfect.
        if (sum === n) {
            result = 'perfect'
        } else if (sum > n) {
            result = 'abundant'
        } else {
            result = 'deficient'
        }

        return result
    }

    static getDivisors(n: number): number[] {
        const divs: number[] = []

        // Accepts only natura numbers greater than 1.
        if (n <= 1) {
            return divs
        }

        // 1 always divides everyone!
        divs.push(1)

        // Calculate the divisors up the the half of the number + 1
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                divs.push(i)
            }
        }

        return divs
    }
}

export default PerfectNumbers
