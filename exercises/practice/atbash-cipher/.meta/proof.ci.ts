const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'

export function encode(plainText: string): string {
  const lowerCaseLettersOnly = plainText
    .toLowerCase()
    .split('')
    .filter((char) => alphabet.includes(char) || numbers.includes(char))
    .join('')

  return decode(lowerCaseLettersOnly)
    .split('')
    .reduce((accumulator: string[], _, index, array) => {
      if (index % 5 === 0) {
        accumulator.push(array.slice(index, index + 5).join(''))
      }
      return accumulator
    }, [])
    .join(' ')
}

export function decode(cipherText: string): string {
  return cipherText
    .split(' ')
    .join('')
    .split('')
    .map((char) =>
      alphabet.includes(char) ? alphabet[25 - alphabet.indexOf(char)] : char
    )
    .join('')
}
