enum Type {
    Equilateral = "equilateral",
    Isosceles = "isosceles",
    Scalene = "scalene"
}


export default class Triangle {
    sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides;
    }

    kind() {
        if (this.isIllegal()) {
            throw new TypeError('illegal');
        }

        if (this.isEquilateral()) {
            return Type.Equilateral;
        }

        if (this.isIsosceles()) {
            return Type.Isosceles;
        }

        return Type.Scalene;
    }

    isIllegal() {
        return this.violatesInequality() || this.hasImpossibleSides();
    }

    violatesInequality() {
        const [a, b, c] = this.sides;
        return a + b < c || a + c < b || b + c < a;
    }

    hasImpossibleSides() {
        const [a, b, c] = this.sides;
        return a <= 0 || b <= 0 || c <= 0;
    }

    isEquilateral() {
        return this.uniqueSidesLength() === 1;
    }

    isIsosceles() {
        return this.uniqueSidesLength() === 2;
    }

    uniqueSidesLength() {
        return new Set(this.sides).size;
    }

}