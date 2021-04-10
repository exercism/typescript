export function primes(limit: number): number[] {
  if (limit === 2) {
    return [limit]
  }

  const sieve: boolean[] = []
  for (let i = 0; i < limit; i++) {
    sieve[i] = true
  }

  const primes: number[] = []
  const maxCandidate = Math.floor(Math.sqrt(limit))
  for (let candidate = 2; candidate <= maxCandidate + 1; candidate++) {
    if (!sieve[candidate - 1]) {
      continue
    }

    primes.push(candidate)
    let multiple = candidate * candidate
    while (multiple <= limit) {
      sieve[multiple - 1] = false
      multiple += candidate
    }
  }

  for (let i = maxCandidate + 1; i <= limit; i++) {
    if (sieve[i - 1]) {
      primes.push(i)
    }
  }

  return primes
}
