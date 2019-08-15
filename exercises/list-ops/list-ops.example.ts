class List<T> {
    values: T[]

    constructor(arr?: T[]) {
        this.values = arr || []
    }

    append(otherList: List<T>) {
        for (const el of otherList.values) {
            this.values.push(el)
        }
        return this
    }

    concat(listOfLists: List<List<T>>) {
        for (const list of listOfLists.values) {
            this.append(list)
        }
        return this
    }

    filter(operation: (arg: T) => boolean) {
        const filteredValues = []
        for (const el of this.values) {
            if (operation(el)) {
                filteredValues.push(el)
            }
        }
        this.values = filteredValues
        return this
    }

    length() {
        let length = 0
        length += this.values.length
        return length
    }

    map(operation: (arg: T) => T) {
        const mappedValues = []
        for (const el of this.values) {
            mappedValues.push(operation(el))
        }
        this.values = mappedValues
        return this
    }

    foldl(operation: (arg1: T, arg2: T) => T, initialValue: T) {
        let acc = initialValue
        for (const el of this.values) {
            acc = operation(acc, el)
        }
        return acc
    }

    foldr(operation: (arg1: T, arg2: T) => T, initialValue: T) {
        let acc = initialValue
        let index = this.length() - 1
        while (index >= 0) {
            const el = this.values[index--]
            acc = operation(acc, el)
        }
        return acc
    }

    reverse() {
        const numElements = this.length()
        let finalIndex = numElements - 1
        for (let index = 0; index < numElements / 2; index++) {
            const temp = this.values[index]
            this.values[index] = this.values[finalIndex]
            this.values[finalIndex--] = temp
        }
        return this
    }
}

export default List
