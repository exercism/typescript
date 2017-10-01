class Node<T> {
  private value: T
  private next: Node<T> | null
  private prev: Node<T> | null
  
  constructor(value: T) {
    this.value = value
  }

  public getNext(): Node<T> | null {
    return this.next;
  }

  public setNext(newNext: Node<T> | null) {
    this.next = newNext;
  } 

  public getPrev(): Node<T> | null {
    return this.prev;
  }

  public setPrev(newPrev: Node<T> | null) {
    this.prev = newPrev;
  }

  public getValue(): T {
    return this.value;
  }
}
  
export default class LinkedList<T> {
  size: number = 0
  head: Node<T> | null;
  tail: Node<T> | null;

  pop(): T | null {
    if (!this.head) {
      return null;
    }
    
    const value = this.head.getValue();
    this.head = this.head.getNext()
    if (this.head) {
      this.head.setPrev(null);
    } else {
      this.head = this.tail = null;
    }

    return value;
  }

  push(value: T) {
    if (this.head) {
      const newHead = new Node<T>(value);
      newHead.setNext(this.head);
      this.head.setPrev(newHead);
      this.head = newHead;
    } else {
      this.head = new Node<T>(value);
      this.tail = this.head;
    }
  }

  shift(): T | null {
    if (!this.tail) {
      return null; 
    }

    const value = this.tail.getValue();
    this.tail = this.tail.getPrev(); 
    if (this.tail) {
      this.tail.setNext(null);
    } else {
      this.head = this.tail = null;  
    }

    return value;
  }

  unshift(value: T) {
    if (this.tail) {
      const newTail = new Node<T>(value);
      newTail.setPrev(this.tail);
      this.tail.setNext(newTail);
      this.tail = newTail;
    } else {
      this.tail = new Node<T>(value);
      this.head = this.tail;
    }
  }

  count(): number {
    let count: number = 0;
    let element: Node<T> | null = this.head;

    while (this.head && element) {
      count++;
      element = element.getNext();
    }
    return count;
  }

  delete(value: T) {
    let element = this.head;
    while (element) {
      if (element.getValue() === value) {
        const nextNode = element.getNext()
        const prevNode = element.getPrev()

        if (nextNode) {
          nextNode.setPrev(prevNode);
        } else if (this.tail) {
          this.tail = this.tail.getPrev()
        }

        if (prevNode) {
          prevNode.setNext(nextNode)
        } else if (this.head) {
          this.head = this.head.getNext();
        }
        
        element = null;
      } else {
        element = element.getNext();
      }
    }
  }
}