import { steps } from './collatz-conjecture'

describe('CollatzConjecture', () => {
  it('zero steps for one', () => {
    const expected = 0
    expect(steps(1)).toBe(expected)
  })

  xit('divide if even', () => {
    const expected = 4
    expect(steps(16)).toBe(expected)
  })

  xit('even and odd steps', () => {
    const expected = 9
    expect(steps(12)).toBe(expected)
  })

  xit('Large number of even and odd steps', () => {
    const expected = 152
    expect(steps(1000000)).toBe(expected)
  })

  xit('zero is an error', () => {
    const expected = 'Only positive numbers are allowed'
    expect(() => {
      steps(0)
    }).toThrowError(expected)
  })

  xit('negative value is an error', () => {
    const expected = 'Only positive numbers are allowed'
    expect(() => {
      steps(-15)
    }).toThrowError(expected)
  })
})
