export function isArmstrongNumber(input: number | bigint): boolean {
  const digits = String(input).split('')
  const sum = digits.reduce((total, current) => {
    return total + BigInt(parseInt(current, 10)) ** BigInt(digits.length)
  }, BigInt(0))

  return sum == input
}
