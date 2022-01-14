type BinarySearchTreeMaybe = BinarySearchTree | undefined
type EachFn = (data: number) => void

export class BinarySearchTree {
  private readonly _data: number
  private _left?: BinarySearchTree
  private _right?: BinarySearchTree

  constructor(data: number) {
    this._data = data
  }

  public insert(value: number): this {
    if (value <= this._data) {
      if (this._left) this._left.insert(value)
      else this._left = new BinarySearchTree(value)
    } else {
      if (this._right) this._right.insert(value)
      else this._right = new BinarySearchTree(value)
    }

    return this
  }

  public each(fn: EachFn): void {
    if (this._left) this._left.each(fn)
    fn(this._data)
    if (this._right) this._right.each(fn)
  }

  public get data(): number {
    return this._data
  }

  public get left(): BinarySearchTreeMaybe {
    return this._left
  }

  public get right(): BinarySearchTreeMaybe {
    return this._right

  }
}
