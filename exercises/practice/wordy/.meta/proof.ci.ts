class ArgumentError {}

type MathFunc = (a: number, b: number) => number

const OPERATIONS: { [key: string]: MathFunc } = {
  plus: (a: number, b: number) => {
    return a + b
  },
  minus: (a: number, b: number) => {
    return a - b
  },
  multiplied: (a: number, b: number) => {
    return a * b
  },
  divided: (a: number, b: number) => {
    return a / b
  },
}

export function answer(question: string): number {
  const query = question
    .replace(/by /g, '')
    .replace('What is ', '')
    .replace('?', '')
  const array = query.split(' ')

  let subtotal = 0

  if (array.length > 5 || array.length < 3) {
    throw new ArgumentError()
  }

  if (array.length >= 3) {
    const a = array[0]
    const b: MathFunc = OPERATIONS[array[1]]
    const c = array[2]
    if (b === undefined) {
      throw new ArgumentError()
    }
    subtotal = b(+a, +c)
  }
  if (array.length === 5) {
    const d: MathFunc = OPERATIONS[array[3]]
    const e = array[4]
    if (d === undefined) {
      throw new ArgumentError()
    }
    subtotal = d(subtotal, +e)
  }
  return subtotal
}
