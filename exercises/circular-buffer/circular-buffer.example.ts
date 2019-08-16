interface Buffer<T> {
  read(): T | undefined;
  write(value: T): void;
  clear(): void;
}

export class BufferOverflowError extends Error {
  constructor() {
    super("Buffer is full.")
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super("Buffer is empty.")
  }
}

export default class CircularBuffer<T> implements Buffer<T> {
  private capacity: number
  private buffer: T[] = []

  constructor(capacity: number) {
    this.capacity = capacity
  }

  public read(): T | undefined {
    if (this.buffer.length === 0) {
      throw new BufferEmptyError()
    }
    return this.buffer.shift()
  }

  public write(value: T): void {
    if (this.buffer.length + 1 > this.capacity) {
      throw new BufferOverflowError()
    }
    this.buffer.push(value)
  }

  public forceWrite(value: T): void {
    if (this.buffer.length === this.capacity) {
      this.read()
    }
    this.buffer.push(value)
  }

  public clear(): void {
    this.buffer = []
  }
}
