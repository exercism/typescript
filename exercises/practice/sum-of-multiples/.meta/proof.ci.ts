export const sum = (multiples: number[], limit: number) => {
  let sum = 0
  for (let i = 1; i < limit; i++) {
    if (multiples.some((multiple) => i % multiple === 0)) {
      sum += i
    }
  }
  return sum
}
