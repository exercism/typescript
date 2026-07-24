import { describe, expect, it, xit } from '@jest/globals'
import { findFewestCoins } from './change.ts'

describe('Change', () => {
  it('change for 1 cent', () => {
    expect(findFewestCoins([1, 5, 10, 25], 1)).toEqual([1])
  })

  xit('single coin change', () => {
    expect(findFewestCoins([1, 5, 10, 25, 100], 25)).toEqual([25])
  })

  xit('multiple coin change', () => {
    expect(findFewestCoins([1, 5, 10, 25, 100], 15)).toEqual([5, 10])
  })

  xit('change with Lilliputian Coins', () => {
    expect(findFewestCoins([1, 4, 15, 20, 50], 23)).toEqual([4, 4, 15])
  })

  xit('change with Lower Elbonia Coins', () => {
    expect(findFewestCoins([1, 5, 10, 21, 25], 63)).toEqual([21, 21, 21])
  })

  xit('large target values', () => {
    expect(findFewestCoins([1, 2, 5, 10, 20, 50, 100], 999)).toEqual([
      2, 2, 5, 20, 20, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ])
  })

  xit('possible change without unit coins available', () => {
    expect(findFewestCoins([2, 5, 10, 20, 50], 21)).toEqual([2, 2, 2, 5, 10])
  })

  xit('another possible change without unit coins available', () => {
    expect(findFewestCoins([4, 5], 27)).toEqual([4, 4, 4, 5, 5, 5])
  })

  xit('a greedy approach is not optimal', () => {
    expect(findFewestCoins([1, 10, 11], 20)).toEqual([10, 10])
  })

  xit('no coins make 0 change', () => {
    expect(findFewestCoins([1, 5, 10, 21, 25], 0)).toEqual([])
  })

  xit('error testing for change smaller than the smallest of coins', () => {
    expect(() => findFewestCoins([5, 10], 3)).toThrow(
      "can't make target with given coins"
    )
  })

  xit('error if no combination can add up to target', () => {
    expect(() => findFewestCoins([5, 10], 94)).toThrow(
      "can't make target with given coins"
    )
  })

  xit('cannot find negative change values', () => {
    expect(() => findFewestCoins([1, 2, 5], -5)).toThrow(
      "target can't be negative"
    )
  })
})
