export default class CustomSet {
    data: number[]

    // tslint:disable-next-line: no-any
    constructor(data: any[] = []) {
        this.data = []
        data.forEach((el) => this.add(parseInt(el, 10)))
    }

    add(el: number) {
        this.data[el] = el
        return this
    }

    delete(el: number) {
        delete this.data[el]
        return this
    }

    size() {
        return Object.keys(this.data).length
    }

    empty() {
        return this.size() === 0
    }

    contains(el: number) {
        return this.data[el] !== undefined
    }

    eql(other: CustomSet) {
        return this.size() === other.size() && this.difference(other).size() === 0
    }

    difference(other: CustomSet) {
        return new CustomSet(Object.keys(this.data).filter((el) => other.data[parseInt(el, 10)] === undefined))
    }

    disjoint(other: CustomSet) {
        return this.size() === 0 || this.difference(other).size() === this.size()
    }

    intersection(other: CustomSet) {
        return this.difference(this.difference(other))
    }

    union(other: CustomSet) {
        return new CustomSet(this.toList().concat(other.toList()))
    }

    subset(other: CustomSet) {
        return this.eql(this.intersection(other))
    }

    toList() {
        return Object.values(this.data)
    }
}
