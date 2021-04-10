export function count(input: string): Map<string, number> {
  const inputArray = input
    .toLowerCase()
    .replace(/\n/m, ' ')
    .replace(/\t/m, ' ')
    .split(' ')
  const inputMap = new Map<string, number>()

  for (const each of inputArray) {
    if (each === '') {
      continue
    }
    const value = inputMap.get(each) || 0

    inputMap.set(each.trim(), value + 1)
  }
  return inputMap
}
