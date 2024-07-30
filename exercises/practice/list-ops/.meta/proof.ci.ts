const Null: Cons<undefined> = {
  get value() {
    return undefined
  },
  get next() {
    return this
  },

  get() {
    return this.value
  },

  push<T>(item: T): Cons<T> {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return new Cons(item, this) as Cons<T>
  },
  length() {
    return 0
  },
  append<T>(other: Cons<T>): Cons<T> {
    return other
  },
  concat(): Cons<undefined> {
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
  filter(): Cons<undefined> {
    return Null
  },
  reverse(): Cons<undefined> {
    return this
  },
  map<TReturn>(): Cons<TReturn> {
    return this as Cons<TReturn>
  },
}
class Cons<T> {
  constructor(
    public readonly value: T,
    public next: Cons<T> = Null as Cons<T>
  ) {}

  public get(i: number): T | undefined {
    return i === 0 ? this.value : this.next.get(i - 1)
  }

  public push(item: T): this {
    this.next = this.next.push(item)
    return this
  }

  public length(): number {
    return 1 + this.next.length()
  }

  public append(other: Cons<T>): Cons<T> {
    return other.foldl((result, item) => result.push(item), this)
  }

  public concat(others: Cons<Cons<T>>): Cons<T> {
    return others.foldl<Cons<T>>(
      (result, other) => result.append(other),
      this
    )
  }

  public foldl<TReturn = unknown>(
    callback: (initial: TReturn, value: T) => TReturn
  ): TReturn
  public foldl<TReturn = unknown>(
    callback: (initial: TReturn, value: T) => TReturn,
    initial: TReturn
  ): TReturn
  public foldl<TReturn = unknown>(
    callback: (initial: TReturn | undefined, value: T) => TReturn,
    initial?: TReturn
  ): TReturn {
    return this.next.foldl<TReturn>(
      callback,
      callback(initial, this.value)
    )
  }

  public forEach(callback: (value: T) => void): void {
    this.foldl((_, item) => callback(item))
  }

  public foldr<TReturn = unknown>(
    callback: (initial: TReturn, value: T) => TReturn
  ): TReturn
  public foldr<TReturn = unknown>(
    callback: (initial: TReturn, value: T) => TReturn,
    initial: TReturn
  ): TReturn
  public foldr<TReturn = unknown>(
    callback: (initial: TReturn, value: T) => TReturn,
    initial?: TReturn
  ): TReturn {
    return callback(
      this.next.foldr<TReturn>(callback as (initial: TReturn, value: T | undefined) => TReturn, initial as TReturn),
      this.value
    )
  }

  public filter(predicate: (value: T) => boolean): Cons<T> {
    return this.foldl<Cons<T>>(
      (result, item) => (predicate(item) && result.push(item)) || result,
      Null as Cons<T>
    )
  }

  public map<TReturn = unknown>(
    expression: (value: T) => TReturn
  ): Cons<TReturn> {
    return this.foldl(
      (result, item) => result.push(expression(item)),
      Null as Cons<TReturn>
    )
  }

  public reverse(): Cons<T> {
    return this.next.reverse().push(this.value)
  }
}
export class List {
  public static create<T>(...values: T[]): Cons<T> {
    const [head, ...tail] = values

    if (head === undefined) {
      return Null as Cons<T>
    }

    return new Cons(head, List.create(...tail))
  }
}
