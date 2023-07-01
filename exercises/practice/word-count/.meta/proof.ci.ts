export function count(input: string): Map<string, number> {
  const inputArray = input
    .trim()
    .toLowerCase()
    .split(/[ ,\n]+/g)
  const inputMap = new Map<string, number>()

  for (const each of inputArray) {
    const word = each.replace(/[.,!:"&@$%^?]|^'|'$/g, '')

    if (word === '') {
      continue
    }
    const value = inputMap.get(word) || 0

    inputMap.set(word, value + 1)
  }
  return inputMap
}
