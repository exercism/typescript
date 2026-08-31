export type Key = {
  a: number
  b: number
}

const alphabetLength = 26

const mod = (value: number, modulus: number): number =>
  ((value % modulus) + modulus) % modulus

const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    const remainder = mod(a, b)
    a = b
    b = remainder
  }

  return Math.abs(a)
}

const assertValidKey = (key: Key): void => {
  if (gcd(key.a, alphabetLength) !== 1) {
    throw new Error('a and m must be coprime.')
  }
}

const modularInverse = (value: number): number => {
  for (let candidate = 1; candidate < alphabetLength; candidate += 1) {
    if (mod(value * candidate, alphabetLength) === 1) {
      return candidate
    }
  }

  throw new Error('a and m must be coprime.')
}

const normalize = (phrase: string): string =>
  phrase.toLowerCase().replace(/[^a-z0-9]/g, '')

const chunk = (text: string): string => text.match(/.{1,5}/g)?.join(' ') ?? ''

const letterIndex = (char: string): number =>
  char.charCodeAt(0) - 'a'.charCodeAt(0)

const letterFor = (index: number): string =>
  String.fromCharCode(mod(index, alphabetLength) + 'a'.charCodeAt(0))

const translate = (
  text: string,
  transformIndex: (index: number) => number
): string =>
  text.replace(/[a-z]/g, (char) => letterFor(transformIndex(letterIndex(char))))

export const encode = (phrase: string, key: Key): string => {
  assertValidKey(key)

  return chunk(translate(normalize(phrase), (index) => key.a * index + key.b))
}

export const decode = (phrase: string, key: Key): string => {
  assertValidKey(key)

  const inverse = modularInverse(key.a)
  return translate(normalize(phrase), (index) => inverse * (index - key.b))
}
