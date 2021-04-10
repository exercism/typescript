import { valid } from './luhn'

describe('Luhn', () => {
  it('single digit strings can not be valid', () => {
    expect(valid('1')).toBeFalsy()
  })

  xit('a single zero is invalid', () => {
    expect(valid('0')).toBeFalsy()
  })

  xit('a simple valid SIN that remains valid if reversed', () => {
    expect(valid('059')).toBeTruthy()
  })

  xit('a valid Canadian SIN', () => {
    expect(valid('055 444 285')).toBeTruthy()
  })

  xit('invalid Canadian SIN', () => {
    expect(valid('055 444 286')).toBeFalsy()
  })

  xit('invalid credit card', () => {
    expect(valid('8273 1232 7352 0569')).toBeFalsy()
  })

  xit('valid strings with a non-digit included become invalid', () => {
    expect(valid('055a 444 285')).toBeFalsy()
  })

  xit('valid strings with punctuation included become invalid', () => {
    expect(valid('055-444-285')).toBeFalsy()
  })

  xit('valid strings with symbols included become invalid', () => {
    expect(valid('055£ 444$ 285')).toBeFalsy()
  })

  xit('single zero with space is invalid', () => {
    expect(valid(' 0')).toBeFalsy()
  })

  xit('input digit 9 is correctly converted to output digit 9', () => {
    expect(valid('091')).toBeTruthy()
  })
})
