interface Input {
  maxFactor: number
  minFactor?: number
}

interface Palindrome {
  value: number
  factors: Array<[number, number]>
}

interface Output {
  largest: Palindrome
  smallest: Palindrome
}

export function generate(input: Input): Output {
  throw new Error('Remove this statement and implement this function')
}
