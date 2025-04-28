import { describe, it, expect, xit } from '@jest/globals'
import { squareRoot } from './square-root.ts'

describe('Square Root', () => {
  // Root of 1
  it('root of 1', () => {
    expect(squareRoot(1)).toEqual(1)
  })

  // Root of 4
  xit('root of 4', () => {
    expect(squareRoot(4)).toEqual(2)
  })

  // Root of 25
  xit('root of 25', () => {
    expect(squareRoot(25)).toEqual(5)
  })

  // Root of 81
  xit('root of 81', () => {
    expect(squareRoot(81)).toEqual(9)
  })

  // Root of 196
  xit('root of 196', () => {
    expect(squareRoot(196)).toEqual(14)
  })

  // Root of 65025
  xit('root of 65025', () => {
    expect(squareRoot(65025)).toEqual(255)
  })
})
