const getSuffix = (number: number): string => {
  const lastTwoDigits = number % 100
  const lastOneDigit = number % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th'
  }

  if (lastOneDigit === 1) {
    return 'st'
  }

  if (lastOneDigit === 2) {
    return 'nd'
  }

  if (lastOneDigit === 3) {
    return 'rd'
  }

  return 'th'
}

export const format = (name: string, number: number): string =>
  `${name}, you are the ${number}${getSuffix(number)} customer we serve today. Thank you!`
