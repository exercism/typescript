const isValidBase = (base: number): boolean => {
  return !base || base < 2 || Math.floor(base) !== base
}

const isInputValid = (array: number[], base: number): boolean => {
  if (!array || !array.length) {
    return false
  }
  const val = base - 1
  for (let i = 0, n = array.length; i < n; i++) {
    const tmp = array[i]
    if (tmp > val || tmp < 0) {
      return false
    }
  }
  return true
}

const convertFromDecimalToBase = (
  num: number,
  outputBase: number
): number[] => {
  let tmp = num
  const result = []
  while (tmp) {
    result.unshift(tmp % outputBase)
    tmp = Math.floor(tmp / outputBase)
  }
  return result
}

export default class Converter {
  public convert(
    array: number[],
    inputBase: number,
    outputBase: number
  ): number[] {
    if (isValidBase(inputBase)) {
      throw new Error('Wrong input base')
    }
    if (isValidBase(outputBase)) {
      throw new Error('Wrong output base')
    }
    const regexp = new RegExp('^0.', 'g')
    const str = array.join('')
    if (str.match(regexp) || !isInputValid(array, inputBase)) {
      throw new Error('Input has wrong format')
    }
    if (str === '0') {
      return [0]
    }
    if (str === '1') {
      return [1]
    }
    const decimalValue = array.reduce(
      (accumulator, value) => accumulator * inputBase + value,
      0
    )
    return convertFromDecimalToBase(decimalValue, outputBase)
  }
}
