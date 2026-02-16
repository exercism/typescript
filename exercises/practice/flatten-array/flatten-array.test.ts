import { describe, it, expect, xit } from '@jest/globals'
import { flatten } from './flatten-array.ts'

describe('Flatten Array', () => {
  it('empty', () => {
    const arr = []
    const expected = []
    expect(flatten(arr)).toEqual(expected)
  })

  xit('no nesting', () => {
    const arr = [0, 1, 2]
    const expected = [0, 1, 2]
    expect(flatten(arr)).toEqual(expected)
  })

  xit('flattens a nested array', () => {
    const arr = [[[]]]
    const expected = []
    expect(flatten(arr)).toEqual(expected)
  })

  xit('flattens array with just integers present', () => {
    const arr = [1, [2, 3, 4, 5, 6, 7], 8]
    const expected = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(flatten(arr)).toEqual(expected)
  })

  xit('5 level nesting', () => {
    const arr = [0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2]
    const expected = [0, 2, 2, 3, 8, 100, 4, 50, -2]
    expect(flatten(arr)).toEqual(expected)
  })

  xit('6 level nesting', () => {
    const arr = [1, [2, [[3]], [4, [[5]]], 6, 7], 8]
    const expected = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(flatten(arr)).toEqual(expected)
  })

  xit('consecutive null values at the front of the array are omitted from the final result', () => {
    const arr = [undefined, undefined, 3]
    const expected = [3]
    expect(flatten(arr)).toEqual(expected)
  })

  xit('consecutive null values in the middle of the array are omitted from the final result', () => {
    const arr = [1, undefined, undefined, 4]
    const expected = [1, 4]
    expect(flatten(arr)).toEqual(expected)
  })

  xit('6 level nest array with null values', () => {
    const arr = [0, 2, [[2, 3], 8, [[100]], undefined, [[undefined]]], -2]
    const expected = [0, 2, 2, 3, 8, 100, -2]
    expect(flatten(arr)).toEqual(expected)
  })

  xit('all values in nested array are null', () => {
    const expected: number[] = []
    expect(
      flatten([
        undefined,
        [[[undefined]]],
        undefined,
        undefined,
        [[undefined, undefined], undefined],
        undefined,
      ])
    ).toEqual(expected)
  })
})
