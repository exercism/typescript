export function isIsogram(phrase: string): boolean {
  const appearances = new Set()

  for (const letter of phrase) {
    if (isLetter(letter)) {
      if (appearances.has(letter.toLowerCase())) {
        return false
      } else {
        appearances.add(letter.toLowerCase())
      }
    } else {
      continue
    }
  }

  return true
}

function isLetter(letter: string): boolean {
  if (
    (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ||
    (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)
  ) {
    return true
  } else {
    return false
  }
}
