interface Predicate<T> {
  (element: T): boolean
}

export function keep<T>(array: T[], predicate: Predicate<T>): T[] {
  const output: T[] = []
  array.forEach((el: T) => {
    if (predicate(el)) {
      output.push(el)
    }
  })
  return output
}

export function discard<T>(array: T[], predicate: Predicate<T>): T[] {
  const output: T[] = []
  array.forEach((el: T) => {
    if (!predicate(el)) {
      output.push(el)
    }
  })
  return output
}
