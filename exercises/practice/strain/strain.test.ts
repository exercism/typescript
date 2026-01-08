import { describe, it, expect, xit } from '@jest/globals'
import { keep, discard } from './strain.ts'

describe('strain', () => {
  it('keeps on empty array returns empty array', () => {
    const predicate = (e: number): boolean => true
    expect(keep<number>([], predicate)).toEqual([])
  })

  xit('keeps everything', () => {
    const predicate = (e: number): boolean => true
    expect(keep<number>([1, 3, 5], predicate)).toEqual([1, 3, 5])
  })

  xit('keeps nothing', () => {
    const predicate = (e: number): boolean => false
    expect(keep<number>([1, 3, 5], predicate)).toEqual([])
  })

  xit('keeps first and last', () => {
    const predicate = (e: number): boolean => e % 2 === 1
    expect(keep<number>([1, 2, 3], predicate)).toEqual([1, 3])
  })

  xit('keeps neither first nor last', () => {
    const predicate = (e: number): boolean => e % 2 === 0
    expect(keep<number>([1, 2, 3], predicate)).toEqual([2])
  })

  xit('keeps strings', () => {
    const words = ['apple', 'zebra', 'banana', 'zombies', 'cherimoya', 'zealot']
    const predicate = (word: string): boolean => word.indexOf('z') === 0
    const result = keep<string>(words, predicate)
    expect(result).toEqual(['zebra', 'zombies', 'zealot'])
  })

  xit('keeps arrays', () => {
    const rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5],
    ]
    const predicate = (row: number[]) => row.indexOf(5) > -1
    const result = keep<number[]>(rows, predicate)
    expect(result).toEqual([
      [5, 5, 5],
      [5, 1, 2],
      [1, 5, 2],
      [1, 2, 5],
    ])
  })

  xit('empty discard', () => {
    const predicate = (e: number): boolean => true
    expect(discard<number>([], predicate)).toEqual([])
  })

  xit('discards everything', () => {
    const predicate = (e: number): boolean => true
    expect(discard<number>([1, 3, 5], predicate)).toEqual([])
  })

  it('discards nothing', () => {
    const predicate = (e: number): boolean => false
    expect(discard<number>([1, 3, 5], predicate)).toEqual([1, 3, 5])
  })

  xit('discards first and last', () => {
    const predicate = (e: number): boolean => e % 2 === 1
    expect(discard<number>([1, 2, 3], predicate)).toEqual([2])
  })

  xit('discards neither first nor last', () => {
    const predicate = (e: number): boolean => e % 2 === 0
    const result = discard<number>([1, 2, 3], predicate)
    expect(result).toEqual([1, 3])
  })

  xit('discards strings', () => {
    const words = ['apple', 'zebra', 'banana', 'zombies', 'cherimoya', 'zealot']
    const predicate = (word: string) => word.indexOf('z') === 0
    const result = discard<string>(words, predicate)
    expect(result).toEqual(['apple', 'banana', 'cherimoya'])
  })

  xit('discards arrays', () => {
    const rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5],
    ]

    const predicate = (row: number[]) => row.indexOf(5) > -1
    const result = discard<number[]>(rows, predicate)
    expect(result).toEqual([
      [1, 2, 3],
      [2, 1, 2],
      [2, 2, 1],
    ])
  })
})
