export function square(square: number): bigint {
  if (square <= 0 || square >= 65) {
    throw new Error()
  }

  return BigInt(square) ** 2n
}

export function total(): bigint {
  let total = 0n

  for (let i = 1; i <= 64; i++) {
    total += this.square(i)
  }

  return total
}
