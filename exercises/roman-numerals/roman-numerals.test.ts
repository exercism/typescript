import RomanNumerals from './roman-numerals'

describe('RomanNumerals', () => {
  it('1 is a single I', () => {
    const expected = 'I'
    expect(RomanNumerals.roman(1)).toEqual(expected)
  })

  xit("2 is two I's", () => {
    const expected = 'II'
    expect(RomanNumerals.roman(2)).toEqual(expected)
  })

  xit("3 is three I's", () => {
    const expected = 'III'
    expect(RomanNumerals.roman(3)).toEqual(expected)
  })

  xit('4, being 5 - 1, is IV', () => {
    const expected = 'IV'
    expect(RomanNumerals.roman(4)).toEqual(expected)
  })

  xit('5 is a single V', () => {
    const expected = 'V'
    expect(RomanNumerals.roman(5)).toEqual(expected)
  })

  xit('6, being 5 + 1, is VI', () => {
    const expected = 'VI'
    expect(RomanNumerals.roman(6)).toEqual(expected)
  })

  xit('9, being 10 - 1, is IX', () => {
    const expected = 'IX'
    expect(RomanNumerals.roman(9)).toEqual(expected)
  })

  xit("20 is two X's", () => {
    const expected = 'XXVII'
    expect(RomanNumerals.roman(27)).toEqual(expected)
  })

  xit('48 is not 50 - 2 but rather 40 + 8', () => {
    const expected = 'XLVIII'
    expect(RomanNumerals.roman(48)).toEqual(expected)
  })

  xit('49 is not 40 + 5 + 4 but rather 50 - 10 + 10 - 1', () => {
    const expected = 'XLIX'
    expect(RomanNumerals.roman(49)).toEqual(expected)
  })

  xit('50 is a single L', () => {
    const expected = 'LIX'
    expect(RomanNumerals.roman(59)).toEqual(expected)
  })

  xit('90, being 100 - 10, is XC', () => {
    const expected = 'XCIII'
    expect(RomanNumerals.roman(93)).toEqual(expected)
  })

  xit('100 is a single C', () => {
    const expected = 'CXLI'
    expect(RomanNumerals.roman(141)).toEqual(expected)
  })

  xit('60, being 50 + 10, is LX', () => {
    const expected = 'CLXIII'
    expect(RomanNumerals.roman(163)).toEqual(expected)
  })

  xit('400, being 500 - 100, is CD', () => {
    const expected = 'CDII'
    expect(RomanNumerals.roman(402)).toEqual(expected)
  })

  xit('500 is a single D', () => {
    const expected = 'DLXXV'
    expect(RomanNumerals.roman(575)).toEqual(expected)
  })

  xit('900, being 1000 - 100, is CM', () => {
    const expected = 'CMXI'
    expect(RomanNumerals.roman(911)).toEqual(expected)
  })

  xit('1000 is a single M', () => {
    const expected = 'MXXIV'
    expect(RomanNumerals.roman(1024)).toEqual(expected)
  })

  xit("3000 is three M's", () => {
    const expected = 'MMM'
    expect(RomanNumerals.roman(3000)).toEqual(expected)
  })
})
