import ISBN from './isbn-verifier'

describe('ISBN Verifier', () => {
  it('valid isbn number', () => {
    expect(new ISBN('3-598-21508-8').isValid()).toBeTruthy()
  })

  xit('invalid isbn check digit', () => {
    expect(new ISBN('3-598-21508-9').isValid()).toBeFalsy()
  })

  xit('valid isbn number with a check digit of 10', () => {
    expect(new ISBN('3-598-21507-X').isValid()).toBeTruthy()
  })

  xit('check digit is a character other than X', () => {
    expect(new ISBN('3-598-21507-A').isValid()).toBeFalsy()
  })

  xit('invalid character in isbn', () => {
    expect(new ISBN('3-598-2K507-0').isValid()).toBeFalsy()
  })

  xit('X is only valid as a check digit', () => {
    expect(new ISBN('3-598-2X507-9').isValid()).toBeFalsy()
  })

  xit('valid isbn without separating dashes', () => {
    expect(new ISBN('3598215088').isValid()).toBeTruthy()
  })

  xit('isbn without separating dashes and X as check digit', () => {
    expect(new ISBN('359821507X').isValid()).toBeTruthy()
  })

  xit('isbn without check digit and dashes', () => {
    expect(new ISBN('359821507').isValid()).toBeFalsy()
  })

  xit('too long isbn and no dashes', () => {
    expect(new ISBN('3598215078X').isValid()).toBeFalsy()
  })

  xit('isbn without check digit', () => {
    expect(new ISBN('3-598-21507').isValid()).toBeFalsy()
  })

  xit('too long isbn', () => {
    expect(new ISBN('3-598-21507-XX').isValid()).toBeFalsy()
  })

  xit('check digit of X should not be used for 0', () => {
    expect(new ISBN('3-598-21515-X').isValid()).toBeFalsy()
  })

  xit('empty isbn', () => {
    expect(new ISBN('').isValid()).toBeFalsy()
  })
})
