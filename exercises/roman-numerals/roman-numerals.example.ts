class RomanNumerals {
  static arabicToRomanConversions = [
    {arabic: 1000, roman: 'M'},
    {arabic: 900, roman: 'CM'},
    {arabic: 500, roman: 'D'},
    {arabic: 400, roman: 'CD'},
    {arabic: 100, roman: 'C'},
    {arabic: 90, roman: 'XC'},
    {arabic: 50, roman: 'L'},
    {arabic: 40, roman: 'XL'},
    {arabic: 10, roman: 'X'},
    {arabic: 9, roman: 'IX'},
    {arabic: 5, roman: 'V'},
    {arabic: 4, roman: 'IV'},
    {arabic: 1, roman: 'I'},
  ]

  static roman(n: number) {
    let result = ''

    this.arabicToRomanConversions.forEach((conversion) => {
        while (n >= conversion.arabic) {
          result += conversion.roman
          n -= conversion.arabic
        }
    })

    return result
  }
}

export default RomanNumerals
