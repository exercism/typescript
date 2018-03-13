class Rational {
    numerator: number
    denominator: number

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error('Denominator must not be zero.')
        }

        this.numerator = numerator
        this.denominator = denominator

        this.reduce()
        this.ensureSignInNumerator()
    }

    add(that: Rational) {
        const commonDenominator = this.denominator * that.denominator
        return new Rational(this.numerator * that.denominator + that.numerator * this.denominator, commonDenominator)
    }

    sub(that: Rational) {
        const commonDenominator = this.denominator * that.denominator
        return new Rational(this.numerator * that.denominator - that.numerator * this.denominator, commonDenominator)
    }

    mul(that: Rational) {
        return new Rational(this.numerator * that.numerator, this.denominator * that.denominator)
    }

    div(that: Rational) {
        return new Rational(this.numerator * that.denominator, this.denominator * that.numerator)
    }

    abs() {
        return new Rational(Math.abs(this.numerator), Math.abs(this.denominator))
    }

    exprational(n: number) {
        return new Rational(Math.pow(this.numerator, n), Math.pow(this.denominator, n))
    }

    expreal(base: number) {
        return Math.pow(10.0, Math.log10(Math.pow(base, this.numerator)) / this.denominator)
    }

    reduce() {
        const commonDivisor = this.gcd(this.numerator, this.denominator)

        this.numerator /= commonDivisor
        this.denominator /= commonDivisor
        this.ensureSignInNumerator()

        return this
    }

    gcd(a: number, b: number) {
        let localA = a
        let localB = b
        while (localB !== 0) {
            const t = localB
            localB = localA % localB
            localA = t
        }
        return localA
    }

    ensureSignInNumerator() {
        if (this.denominator < 0) {
            this.denominator = -this.denominator
            this.numerator = -this.numerator
        }
    }
}

export default Rational
