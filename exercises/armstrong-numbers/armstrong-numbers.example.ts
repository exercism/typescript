class ArmstrongNumbers {
  public static isArmstrongNumber(input: number): boolean {
    const digits = String(input).split('')
    const sum = digits.reduce((total, current) => {
      return total + Math.pow(parseInt(current, 10), digits.length)
    }, 0)
    return sum === input
  }
}

export default ArmstrongNumbers
