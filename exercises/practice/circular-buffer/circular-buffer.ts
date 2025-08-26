export default class CircularBuffer<T> {
  constructor(initial: unknown) {
    throw new Error('Remove this line and implement the function')
  }

  write(value: unknown): unknown {
    throw new Error('Remove this line and implement the function')
  }

  read(): unknown {
    throw new Error('Remove this line and implement the function')
  }

  forceWrite(value: unknown): unknown {
    throw new Error('Remove this line and implement the function')
  }

  clear(): unknown {
    throw new Error('Remove this line and implement the function')
  }
}

export class BufferFullError extends Error {
  constructor() {
    super()
    throw new Error('Remove this line and implement the function')
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super()
    throw new Error('Remove this line and implement the function')
  }
}
