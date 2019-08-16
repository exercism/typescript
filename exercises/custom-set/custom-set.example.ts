export default class CustomSet<T> {
    data: Set<T>

    constructor(data: T[] = []) {
        this.data = new Set<T>()
        data.forEach((el) => this.add(el))
    }

    add(el: T) {
        this.data.add(el)
        return this
    }

    delete(el: T) {
        this.data.delete(el)
        return this
    }

    size() {
        return this.data.size
    }

    empty() {
        return this.data.size === 0
    }

    contains(el: T) {
        return this.data.has(el)
    }

    eql(other: CustomSet<T>) {
        if (this.data.size !== other.data.size) {
            return false
        }
        for (const item of this.data) {
            if (!other.data.has(item)) {
                return false
            }
        }
        return true
    }

    difference(other: CustomSet<T>) {
        const result = new CustomSet<T>()
        for (const item of this.data) {
            if (!other.data.has(item)) {
                result.add(item)
            }
        }
        return result
    }

    disjoint(other: CustomSet<T>) {
        return this.size() === 0 || this.difference(other).size() === this.size()
    }

    intersection(other: CustomSet<T>) {
        return this.difference(this.difference(other))
    }

    union(other: CustomSet<T>) {
        const result = new CustomSet<T>()
        for (const item of this.data) {
            result.add(item)
        }
        for (const item of other.data) {
            result.add(item)
        }
        return result
    }

    subset(other: CustomSet<T>) {
        return this.eql(this.intersection(other))
    }

    toList() {
        return Object.values(this.data)
    }
}
