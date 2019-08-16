class Node<T> {
  private value: T
  private next: Node<T> | undefined
  private prev: Node<T> | undefined

  constructor(value: T) {
    this.value = value
  }

  public getNext(): Node<T> | undefined {
    return this.next
  }

  public setNext(newNext: Node<T> | undefined): void {
    this.next = newNext
  }

  public getPrev(): Node<T> | undefined {
    return this.prev
  }

  public setPrev(newPrev: Node<T> | undefined): void {
    this.prev = newPrev
  }

  public getValue(): T {
    return this.value
  }
}

export default class LinkedList<T> {
  private head: Node<T> | undefined
  private tail: Node<T> | undefined

  public pop(): T | undefined {
    if (!this.head) {
      return undefined
    }

    const value = this.head.getValue()
    this.head = this.head.getNext()
    if (this.head) {
      this.head.setPrev(undefined)
    } else {
      this.head = this.tail = undefined
    }

    return value
  }

  public push(value: T): void {
    if (this.head) {
      const newHead = new Node<T>(value)
      newHead.setNext(this.head)
      this.head.setPrev(newHead)
      this.head = newHead
    } else {
      this.head = new Node<T>(value)
      this.tail = this.head
    }
  }

  public shift(): T | undefined {
    if (!this.tail) {
      return undefined
    }

    const value = this.tail.getValue()
    this.tail = this.tail.getPrev()
    if (this.tail) {
      this.tail.setNext(undefined)
    } else {
      this.head = this.tail = undefined
    }

    return value
  }

  public unshift(value: T): void {
    if (this.tail) {
      const newTail = new Node<T>(value)
      newTail.setPrev(this.tail)
      this.tail.setNext(newTail)
      this.tail = newTail
    } else {
      this.tail = new Node<T>(value)
      this.head = this.tail
    }
  }

  public count(): number {
    let count = 0
    let element: Node<T> | undefined = this.head

    while (this.head && element) {
      count++
      element = element.getNext()
    }
    return count
  }

  public delete(value: T): void {
    let element = this.head
    while (element) {
      if (element.getValue() === value) {
        const nextNode = element.getNext()
        const prevNode = element.getPrev()

        if (nextNode) {
          nextNode.setPrev(prevNode)
        } else if (this.tail) {
          this.tail = this.tail.getPrev()
        }

        if (prevNode) {
          prevNode.setNext(nextNode)
        } else if (this.head) {
          this.head = this.head.getNext()
        }

        element = undefined
      } else {
        element = element.getNext()
      }
    }
  }
}
