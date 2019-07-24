class List<T> {
  public values: T[]

  constructor(arr?: T[]) {
    this.values = arr || []
  }

  public append(otherList: List<T>): this {
    for (const el of otherList.values) {
      this.values.push(el)
    }
    return this
  }

  public concat(listOfLists: List<List<T>>): this {
    for (const list of listOfLists.values) {
      this.append(list)
    }
    return this
  }

  public filter(operation: (arg: T) => boolean): this {
    const filteredValues = []
    for (const el of this.values) {
      if (operation(el)) {
        filteredValues.push(el)
      }
    }
    this.values = filteredValues
    return this
  }

  public length(): number {
    let length = 0
    length += this.values.length
    return length
  }

  public map(operation: (arg: T) => T): this {
    const mappedValues = []
    for (const el of this.values) {
      mappedValues.push(operation(el))
    }
    this.values = mappedValues
    return this
  }

  public foldl<A>(operation: (arg1: A, arg2: T) => A, initialValue: A): A {
    let acc = initialValue
    for (const el of this.values) {
      acc = operation(acc, el)
    }
    return acc
  }

  public foldr<A>(operation: (arg1: A, arg2: T) => A, initialValue: A): A {
    let acc = initialValue
    let index = this.length() - 1
    while (index >= 0) {
      const el = this.values[index--]
      acc = operation(acc, el)
    }
    return acc
  }

  public reverse(): this {
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
