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

    static where(conditions: Conditions) {
        return new Triplets(conditions).toArray()
    }
}

class Triplets {

    min: number
    max: number
    sum?: number

    constructor(conditions: Conditions) {
        this.min = conditions.minFactor || 1
        this.max = conditions.maxFactor
        this.sum = conditions.sum
    }

    toArray() {
        let triplet
        const triplets = []
        for (let a = this.min; a < this.max - 1; a++) {
            for (let b = a + 1; b < this.max; b++) {
                for (let c = b + 1; c <= this.max; c++) {
                    triplet = new Triplet(a, b, c)
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

interface Conditions {
    maxFactor: number,
    minFactor?: number,
    sum?: number
}
