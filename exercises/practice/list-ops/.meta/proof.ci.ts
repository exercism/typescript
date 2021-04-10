const Null: Cons = {
  get value() {
    return undefined
  },
  get next() {
    return this
  },

  get() {
    return this.value
  },

  push(item): Cons {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
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
  forEach(): void {
    /* done */
  },
  foldl<TValue = unknown, TReturn = unknown>(
    _: (initial: TReturn, value: TValue) => TReturn,
    initial?: TReturn
  ): TReturn {
    return initial as TReturn
  },
  foldr<TValue = unknown, TReturn = unknown>(
    _: (initial: TReturn, value: TValue) => TReturn,
    initial?: TReturn
  ): TReturn {
    return initial as TReturn
  },
  filter(): Cons {
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
  constructor(public readonly value: unknown, public next: Cons = Null) {}

  public get(i: number): unknown {
    return i === 0 ? this.value : this.next.get(i - 1)
  }

  public push(item: unknown): this {
    this.next = this.next.push(item)
    return this
  }

  public length(): number {
    return 1 + this.next.length()
  }

  public append(other: Cons): Cons {
    return other.foldl((result, item) => result.push(item), this)
  }

  public concat(others: Cons): Cons {
    return others.foldl<Cons, Cons>(
      (result, other) => result.append(other),
      this
    )
  }

  public foldl<TValue = unknown>(
    callback: (initial: TValue, value: TValue) => TValue
  ): TValue
  public foldl<TValue = unknown, TReturn = unknown>(
    callback: (initial: TReturn, value: TValue) => TReturn,
    initial: TReturn
  ): TReturn

  public foldl<TValue = unknown, TReturn = unknown>(
    callback: (initial: TReturn | undefined, value: TValue) => TReturn,
    initial?: TReturn
  ): TReturn {
    return this.next.foldl<TValue, TReturn>(
      callback,
      callback(initial, this.value as TValue)
    )
  }

  public forEach(callback: (value: unknown) => void): void {
    this.foldl((_, item) => callback(item))
  }

  public foldr<TValue = unknown>(
    callback: (initial: TValue, value: TValue) => TValue
  ): TValue
  public foldr<TValue = unknown, TReturn = unknown>(
    callback: (initial: TReturn, value: TValue) => TReturn,
    initial: TReturn
  ): TReturn

  public foldr<TValue = unknown, TReturn = unknown>(
    callback: (initial: TReturn, value: TValue) => TReturn,
    initial?: TReturn
  ): TReturn {
    return callback(
      this.next.foldr<TValue, TReturn>(callback, initial as TReturn),
      this.value as TValue
    )
  }

  public filter<TValue = unknown>(predicate: (value: TValue) => boolean): Cons {
    return this.foldl<TValue, Cons>(
      (result, item) => (predicate(item) && result.push(item)) || result,
      Null
    )
  }

  public map<TValue = unknown, TReturn = unknown>(
    expression: (value: TValue) => TReturn
  ): Cons {
    return this.foldl<TValue, Cons>(
      (result, item) => result.push(expression(item)),
      Null
    )
  }

  public reverse(): Cons {
    return this.next.reverse().push(this.value)
  }
}
export class List {
  public static create(...values: unknown[]): Cons {
    const [head, ...tail] = values

    if (head === undefined) {
      return Null
    }

    return new Cons(head, List.create(...tail))
  }
}
