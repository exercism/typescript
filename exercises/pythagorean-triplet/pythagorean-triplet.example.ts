export default class Triplet {

    a: number
    b: number
    c: number

    constructor(a: number, b: number, c: number) {
        this.a = a
        this.b = b
        this.c = c
    }

    isPythagorean() {
        return this.a * this.a + this.b * this.b === this.c * this.c
    }

    sum() {
        return this.a + this.b + this.c
    }

    product() {
        return this.a * this.b * this.c
    }

    static where(maxFactor: number, minFactor?: number, sum?: number) {
        return new Triplets(maxFactor, minFactor, sum).toArray()
    }
}

class Triplets {

    min: number
    max: number
    sum?: number

    constructor(maxFactor: number, minFactor: number = 1, sum?: number) {
        this.max = maxFactor
        this.min = minFactor
        this.sum = sum
    }

    toArray() {
        const triplets = []
        for (let a = this.min; a < this.max - 1; a++) {
            for (let b = a + 1; b < this.max; b++) {
                for (let c = b + 1; c <= this.max; c++) {
                    const triplet = new Triplet(a, b, c)
                    if (this.isDesired(triplet)) {
                        triplets.push(triplet)
                    }
                }
            }
        }
        return triplets
    }

    isDesired(triplet: Triplet) {
        return triplet.isPythagorean() && (!this.sum || triplet.sum() === this.sum)
    }
}
