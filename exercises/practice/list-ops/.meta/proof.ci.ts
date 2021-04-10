const Null: Cons = {
  get value() {
    return undefined
  },
  get next() {
    return this
  },
  get values() {
    return []
  },

  get() {
    return this.value
  },

  push(item): Cons {
    return new Cons(item, this)
  },
  length() {
    return 0
  },
  append(other: Cons): Cons {
    return other
  },
  concat(): Cons {
    return this
  },
  forEach() {
    /* done */
  },
  foldl(_, initial): any {
    return initial
  },
  foldr(_, initial) {
    return initial
  },
  filter() {
    return Null
  },
  reverse(): Cons {
    return this
  },
  map(): Cons {
    return this
  },
}

class Cons {
  static fromArray([head, ...tail]: any[]) {
    if (head === undefined) {
      return Null
    }

    return new Cons(head, Cons.fromArray(tail || []))
  }

  constructor(public readonly value: any, public next: Cons = Null) {}

  get values() {
    return [this.value, ...this.next.values]
  }

  get(i: number) {
    return i === 0 ? this.value : this.next.get(i - 1)
  }

  push(item: any): this {
    this.next = this.next.push(item)
    return this
  }

  length(): number {
    return 1 + this.next.length()
  }

  append(other: Cons): Cons {
    return other.foldl((result, item) => result.push(item), this)
  }

  concat(others: Cons): Cons {
    return others.foldl((result, other) => result.append(other), this)
  }

  foldl(
    callback: (initial: any, value: any) => any,
    initial: any = undefined
  ): any {
    return this.next.foldl(callback, callback(initial, this.value))
  }

  forEach(callback: (value: any) => void): void {
    this.foldl((_, item) => callback(item))
  }

  foldr(
    callback: (initial: any, value: any) => any,
    initial: any = undefined
  ): any {
    return callback(this.next.foldr(callback, initial), this.value)
  }

  filter(predicate: (value: any) => boolean): Cons {
    return this.foldl(
      (result, item) => (predicate(item) && result.push(item)) || result,
      Null
    )
  }

  map(expression: (value: any) => any): Cons {
    return this.foldl((result, item) => result.push(expression(item)), Null)
  }

  reverse(): Cons {
    return this.next.reverse().push(this.value)
  }
}

export class List {
  constructor(values = []) {
    return Cons.fromArray(values)
  }
}
