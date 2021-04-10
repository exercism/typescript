export function isPaired(input: string): boolean {
  const brackets = input.replace(/[^{(\[\])}]/g, '')
  const bracketsAreMatching = (leftBracket, rightBracket) =>
    (leftBracket === '(' && rightBracket === ')') ||
    (leftBracket === '[' && rightBracket === ']') ||
    (leftBracket === '{' && rightBracket === '}')

  let arr = []
  for (let letter of brackets) {
    if (arr.length >= 1) {
      const lastBracket = arr[arr.length - 1]
      if (bracketsAreMatching(lastBracket, letter)) {
        arr.pop()
      } else {
        arr.push(letter)
      }
    } else {
      arr.push(letter)
    }
  }
  return arr.length === 0
}
