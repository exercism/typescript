import { describe, it, expect, xit } from '@jest/globals'
import { eggCount } from './eliuds-eggs.ts'

describe('EliudsEggs', () => {
  it('0 eggs', () => {
    const expected = 0
    const actual = eggCount(0)
    expect(actual).toEqual(expected)
  })

  xit('1 egg', () => {
    const expected = 1
    const actual = eggCount(16)
    expect(actual).toEqual(expected)
  })

  xit('4 eggs', () => {
    const expected = 4
    const actual = eggCount(89)
    expect(actual).toEqual(expected)
  })

  xit('13 eggs', () => {
    const expected = 13
    const actual = eggCount(2000000000)
    expect(actual).toEqual(expected)
  })
})
