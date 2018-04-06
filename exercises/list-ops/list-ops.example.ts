class List {
    values: number[]

    constructor(arr?: number[]) {
        this.values = arr || []
    }

    append(otherList: List) {
        for (const el of otherList.values) {
            this.values.push(el)
        }
        return this
    }

    concat(otherList: List) {
        return this.append(otherList)
    }

    // tslint:disable-next-line: no-any
    filter(operation: any) {
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

    // tslint:disable-next-line: no-any
    map(operation: any) {
        const mappedValues = []
        for (const el of this.values) {
            mappedValues.push(operation(el))
        }
        this.values = mappedValues
        return this
    }

    // tslint:disable-next-line: no-any
    foldl(operation: any, initialValue: any) {
        let acc = initialValue
        for (const el of this.values) {
            acc = operation(acc, el)
        }
        return acc
    }

    // tslint:disable-next-line: no-any
    foldr(operation: any, initialValue: any) {
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
