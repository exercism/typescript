const isPrime = (n: number): boolean => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

const range = (min: number, max: number): number[] => {
  const result: number[] = []
  for (let i = min; i < max; i++) {
    result.push(i)
  }
  return result
}

class Prime {
  public nth(nthPrime: number): number {
    if (nthPrime === 0) {
      throw new Error('Prime is not possible')
    }

    return range(2, 2e6).filter(isPrime)[nthPrime - 1]
  }
}

export default Prime
