export function steps(n: number): number {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error('Only positive integers are allowed')
  }
  return calculateStepsRecursively(n, 0)
}

function calculateStepsRecursively(n: number, count: number): number {
  if (n === 1) {
    return count
  } else if (n % 2 === 0) {
    return calculateStepsRecursively(n / 2, ++count)
  } else {
    return calculateStepsRecursively(n * 3 + 1, ++count)
  }
}
