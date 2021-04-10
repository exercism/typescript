import { isValid } from './isbn-verifier'

describe('ISBN Verifier', () => {
  it('valid isbn number', () => {
    expect(isValid('3-598-21508-8')).toBeTruthy()
  })

  xit('invalid isbn check digit', () => {
    expect(isValid('3-598-21508-9')).toBeFalsy()
  })

  xit('valid isbn number with a check digit of 10', () => {
    expect(isValid('3-598-21507-X')).toBeTruthy()
  })

  xit('check digit is a character other than X', () => {
    expect(isValid('3-598-21507-A')).toBeFalsy()
  })

  xit('invalid character in isbn', () => {
    expect(isValid('3-598-2K507-0')).toBeFalsy()
  })

  xit('X is only valid as a check digit', () => {
    expect(isValid('3-598-2X507-9')).toBeFalsy()
  })

  xit('valid isbn without separating dashes', () => {
    expect(isValid('3598215088')).toBeTruthy()
  })

  xit('isbn without separating dashes and X as check digit', () => {
    expect(isValid('359821507X')).toBeTruthy()
  })

  xit('isbn without check digit and dashes', () => {
    expect(isValid('359821507')).toBeFalsy()
  })

  xit('too long isbn and no dashes', () => {
    expect(isValid('3598215078X')).toBeFalsy()
  })

  xit('isbn without check digit', () => {
    expect(isValid('3-598-21507')).toBeFalsy()
  })

  xit('too long isbn', () => {
    expect(isValid('3-598-21507-XX')).toBeFalsy()
  })

  xit('check digit of X should not be used for 0', () => {
    expect(isValid('3-598-21515-X')).toBeFalsy()
  })

  xit('empty isbn', () => {
    expect(isValid('')).toBeFalsy()
  })
})
