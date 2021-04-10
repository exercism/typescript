type LeftBracket = '(' | '[' | '{'
type RightBracket = ')' | ']' | '}'
type AnyBracket = LeftBracket | RightBracket

function bracketsAreMatching(
  leftBracket: AnyBracket,
  rightBracket: AnyBracket
): boolean {
  return (
    (leftBracket === '(' && rightBracket === ')') ||
    (leftBracket === '[' && rightBracket === ']') ||
    (leftBracket === '{' && rightBracket === '}')
  )
}

export function isPaired(input: string): boolean {
  const brackets = input.replace(/[^{([\])}]/g, '')

  const openBrackets: AnyBracket[] = []

  for (const letter of brackets) {
    const bracket = letter as AnyBracket
    if (openBrackets.length >= 1) {
      const lastBracket = openBrackets[openBrackets.length - 1]
      if (bracketsAreMatching(lastBracket, bracket)) {
        openBrackets.pop()
      } else {
        openBrackets.push(bracket)
      }
    } else {
      openBrackets.push(bracket)
    }
  }
  return openBrackets.length === 0
}
