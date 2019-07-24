const numbersMap = new Map<number, string>([
  [0, "zero"],
  [1, "one"],
  [2, "two"],
  [3, "three"],
  [4, "four"],
  [5, "five"],
  [6, "six"],
  [7, "seven"],
  [8, "eight"],
  [9, "nine"],
  [10, "ten"],
  [11, "eleven"],
  [12, "twelve"],
  [13, "thirteen"],
  [14, "fourteen"],
  [15, "fifteen"],
  [16, "sixteen"],
  [17, "seventeen"],
  [18, "eighteen"],
  [19, "nineteen"],
  [20, "twenty"],
  [30, "thirty"],
  [40, "forty"],
  [50, "fifty"],
  [60, "sixty"],
  [70, "seventy"],
  [80, "eighty"],
  [90, "ninety"],
  [100, "hundred"],
  [1000, "thousand"],
  [1000000, "million"],
  [1000000000, "billion"]
])

function divideNoDecimal(input: number, by: number): number {
  return (input / by) | 0 // this is like a hack to get int width
}

function classifier(input: number): number {
  if (input >= 100 && input < 1000) {
    return 100
  }
  if (input < 1000000 && input >= 1000) {
    return 1000
  }
  if (input < 1000000000 && input >= 1000000) {
    return 1000000
  }
  if (input < 1000000000000 && input >= 1000000000) {
    return 1000000000
  }
  throw new Error(
    `${classifier.name} only accepts values between 100 to 1000000000000 - 1`
  )
}

function numberGenerator(input: number): string {
  if (input < 100) {
    return zeroTo99(input)
  }
  const level = classifier(input)
  const thirdPlace = divideNoDecimal(input, level)
  const remainer = input % level

  let builder = ""
  builder +=
    thirdPlace === 0
      ? ""
      : `${numberGenerator(thirdPlace)} ${numbersMap.get(level)!}`
  builder += remainer === 0 ? "" : " " + `${numberGenerator(remainer)}`
  return builder
}

function zeroTo99(input: number): string {
  if (input > 100) {
    throw new Error(`${zeroTo99.name} only accepts values 0 to 99`)
  }
  if (input <= 20) {
    return numbersMap.get(input)!
  }
  if (input > 20 && input < 100) {
    const teen = divideNoDecimal(input, 10) * 10
    const tens = numbersMap.get(teen)!
    const remainer = numbersMap.get(input % teen)!
    return `${tens}-${remainer}`
  }
  return ""
}

class Say {
  public inEnglish(input: number): string {
    if (input < 0 || input > 999999999999) {
      throw new Error("Number must be between 0 and 999,999,999,999.")
    }

    return numberGenerator(input)
  }
}

export default Say
