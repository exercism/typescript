export function square(n: number): bigint {
  if (n <= 0 || n >= 65) {
    throw new Error()
  }

  return 2n ** BigInt(n - 1)
}

export function total(): bigint {
  let result = 0n

  for (let i = 1; i <= 64; i++) {
    result += square(i)
  }

  return result
}
