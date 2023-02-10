export function valid(value: string): boolean {
  const valueWithoutSpaces = value.replace(/\s/g, '')
  const digits = [...valueWithoutSpaces]

  const sum = digits
    // convert to integers
    .map((d) => parseInt(d, 10))
    .reverse()
    // double even positions (odd indexes)
    .map((d, i) => {
      if (i % 2 !== 0) {
        return d * 2
      }
      return d
    })
    // limit to digits less than 10
    .map((d) => {
      if (d > 9) {
        return d - 9
      }
      return d
    })
    // sum all digits
    .reduce((d, acc) => d + acc, 0)

  return valueWithoutSpaces.length > 1 && sum % 10 === 0
}
