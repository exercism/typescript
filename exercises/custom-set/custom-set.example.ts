export default class CustomSet<T> {
  private data: Set<T>

  constructor(data: T[] = []) {
    this.data = new Set<T>()
    data.forEach((el) => this.add(el))
  }

  public add(el: T): this {
    this.data.add(el)
    return this
  }

  public delete(el: T): this {
    this.data.delete(el)
    return this
  }

  public size(): number {
    return this.data.size
  }

  public empty(): boolean {
    return this.data.size === 0
  }

  public contains(el: T): boolean {
    return this.data.has(el)
  }

  public eql(other: CustomSet<T>): boolean {
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

  public difference(other: CustomSet<T>): CustomSet<T> {
    const result = new CustomSet<T>()
    for (const item of this.data) {
      if (!other.data.has(item)) {
        result.add(item)
      }
    }
    return result
  }

  public disjoint(other: CustomSet<T>): boolean {
    return this.size() === 0 || this.difference(other).size() === this.size()
  }

  public intersection(other: CustomSet<T>): CustomSet<T> {
    return this.difference(this.difference(other))
  }

  public union(other: CustomSet<T>): CustomSet<T> {
    const result = new CustomSet<T>()
    for (const item of this.data) {
      result.add(item)
    }
    for (const item of other.data) {
      result.add(item)
    }
    return result
  }

  public subset(other: CustomSet<T>): boolean {
    return this.eql(this.intersection(other))
  }

  public toList(): T[] {
    return Object.values(this.data)
  }
}
