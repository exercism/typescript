import { describe, it, expect, xit } from '@jest/globals'
import { keep, discard } from './strain.ts'

describe('strain', () => {
  it('keeps on empty array returns empty array', () => {
    expect(keep<number>([], (e: number) => true)).toEqual([])
  })

  xit('keeps everything', () => {
    expect(keep<number>([1, 3, 5], (e: number) => true)).toEqual([1, 3, 5])
  })

  xit('keeps nothing', () => {
    expect(keep<number>([1, 3, 5], (e: number) => false)).toEqual([])
  })

  xit('keeps first and last', () => {
    expect(keep<number>([1, 2, 3], (e: number) => e % 2 === 1)).toEqual([1, 3])
  })

  xit('keeps neither first nor last', () => {
    expect(keep<number>([1, 2, 3], (e: number) => e % 2 === 0)).toEqual([2])
  })

  xit('keeps strings', () => {
    const words = ['apple', 'zebra', 'banana', 'zombies', 'cherimoya', 'zealot']
    const result = keep<string>(
      words,
      (word: string) => word.indexOf('z') === 0
    )
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
    const result = keep<number[]>(rows, (row: number[]) => row.indexOf(5) > -1)
    expect(result).toEqual([
      [5, 5, 5],
      [5, 1, 2],
      [1, 5, 2],
      [1, 2, 5],
    ])
  })

  xit('empty discard', () => {
    expect(discard<number>([], (e: number) => true)).toEqual([])
  })

  xit('discards everything', () => {
    expect(discard<number>([1, 3, 5], (e: number) => true)).toEqual([])
  })

  it('discards nothing', () => {
    expect(discard<number>([1, 3, 5], (e: number) => false)).toEqual([1, 3, 5])
  })

  xit('discards first and last', () => {
    expect(discard<number>([1, 2, 3], (e: number) => e % 2 === 1)).toEqual([2])
  })

  xit('discards neither first nor last', () => {
    const result = discard<number>([1, 2, 3], (e: number) => e % 2 === 0)
    expect(result).toEqual([1, 3])
  })

  xit('discards strings', () => {
    const words = ['apple', 'zebra', 'banana', 'zombies', 'cherimoya', 'zealot']
    const result = discard<string>(
      words,
      (word: string) => word.indexOf('z') === 0
    )
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
    const result = discard<number[]>(
      rows,
      (row: number[]) => row.indexOf(5) > -1
    )
    expect(result).toEqual([
      [1, 2, 3],
      [2, 1, 2],
      [2, 2, 1],
    ])
  })
})
