export default class BinarySearchTree {
  private _data: number
  private _left: BinarySearchTree
  private _right: BinarySearchTree

  constructor(_data: number) {
    this._data = _data
  }

  public insert(value: number): this {
    return value <= this._data ?
      this.insertLeft(value) :
      this.insertRight(value)
  }

  public each(fn: (data: number) => any): void {
    if(this._left) {
      this._left.each(fn)
    }
    fn(this._data)
    if(this._right) {
      this._right.each(fn)
    }
  }

  public get data(): number {
    return this._data
  }

  public get left(): BinarySearchTree {
    return this._left
  }

  public get right(): BinarySearchTree {
    return this._right
  }

  private insertLeft(value: number): this {
    if(!this._left) {
      this._left = new BinarySearchTree(value)
    } else {
      this._left.insert(value)
    }
    return this
  }

  private insertRight(value: number): this {
    if(!this._right) {
      this._right = new BinarySearchTree(value)
    } else {
      this._right.insert(value)
    }
    return this
  }
}