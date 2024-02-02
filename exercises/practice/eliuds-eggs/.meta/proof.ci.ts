export const eggCount = (displayValue: number): number => {
  let count = 0

  while (displayValue !== 0) {
    count += displayValue & 1
    displayValue >>= 1
  }

  return count
}
