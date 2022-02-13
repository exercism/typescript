import { isLeap } from './leap'

describe('A leap year', () => {
  it('year not divisible by 4 in common year', () => {
    expect(isLeap(2015)).toBe(false)
  })

  xit('year divisible by 2, not divisible by 4 in common year', () => {
    expect(isLeap(1970)).toBe(false)
  })

  xit('year divisible by 4, not divisible by 100 in leap year', () => {
    expect(isLeap(1996)).toBe(true)
  })

  xit('year divisible by 4 and 5 is still a leap year', () => {
    expect(isLeap(1960)).toBe(true)
  })

  xit('year divisible by 100, not divisible by 400 in common year', () => {
    expect(isLeap(2100)).toBe(false)
  })

  xit('year divisible by 100 but not by 3 is still not a leap year', () => {
    expect(isLeap(1900)).toBe(false)
  })

  xit('year divisible by 400 in leap year', () => {
    expect(isLeap(2000)).toBe(true)
  })

  xit('year divisible by 400 but not by 125 is still a leap year', () => {
    expect(isLeap(2400)).toBe(true)
  })

  xit('year divisible by 200, not divisible by 400 in common year', () => {
    expect(isLeap(1800)).toBe(false)
  })
})
