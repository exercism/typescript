export function rotate(text: string, shiftBy: number): string {
  return [...text]
    .map((c) => {
      const isUpper = c.toUpperCase() === c
      const isAlpha = c.match(/[a-z]/i)
      const caseCharCode = (isUpper ? 'A' : 'a').charCodeAt(0)
      if (isAlpha) {
        const charCode = c.charCodeAt(0)
        return String.fromCharCode(
          ((charCode - caseCharCode + shiftBy) % 26) + caseCharCode
        )
      } else {
        return c
      }
    })
    .join('')
}
