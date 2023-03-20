import { isArmstrongNumber } from './armstrong-numbers'

describe('Armstrong Numbers', () => {
  it('Single-digit numbers are Armstrong numbers', () => {
    expect(isArmstrongNumber(5)).toBeTruthy()
  })

  xit('There are no two-digit Armstrong numbers', () => {
    expect(isArmstrongNumber(10)).toBeFalsy()
  })

  xit('Three-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(153)).toBeTruthy()
  })

  xit('Three-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(100)).toBeFalsy()
  })

  xit('Four-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9474)).toBeTruthy()
  })

  xit('Four-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9475)).toBeFalsy()
  })

  xit('Seven-digit number that is an Armstrong number', () => {
    expect(isArmstrongNumber(9926315)).toBeTruthy()
  })

  xit('Seven-digit number that is not an Armstrong number', () => {
    expect(isArmstrongNumber(9926314)).toBeFalsy()
  })

  xit('Armstrong number containing seven zeroes', () => {
    expect(
      isArmstrongNumber(BigInt('186709961001538790100634132976990'))
    ).toBeTruthy()
  })

  xit('The largest and last Armstrong number', () => {
    expect(
      isArmstrongNumber(BigInt('115132219018763992565095597973971522401'))
    ).toBeTruthy()
  })
})
