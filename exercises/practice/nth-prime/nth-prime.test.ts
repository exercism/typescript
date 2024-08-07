import { describe, it, expect, xit } from '@jest/globals'
import { nth } from './nth-prime.ts'

describe('Prime', () => {
  it('first', () => {
    expect(nth(1)).toEqual(2)
  })

  xit('second', () => {
    expect(nth(2)).toEqual(3)
  })

  xit('sixth', () => {
    expect(nth(6)).toEqual(13)
  })

  xit('big prime', () => {
    expect(nth(10001)).toEqual(104743)
  })

  xit('weird case', () => {
    expect(() => nth(0)).toThrow('Prime is not possible')
  })
})
