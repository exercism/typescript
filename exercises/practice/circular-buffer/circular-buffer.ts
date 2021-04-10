export default class CircularBuffer<T> {
  constructor(initial: unknown) {
    throw new Error('Remove this statement and implement this function')
  }

  write(value: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  read(): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  forceWrite(value: unknown): unknown {
    throw new Error('Remove this statement and implement this function')
  }

  clear(): unknown {
    throw new Error('Remove this statement and implement this function')
  }
}

export class BufferFullError extends Error {
  constructor() {
    super()
    throw new Error('Remove this statement and implement this function')
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super()
    throw new Error('Remove this statement and implement this function')
  }
}
