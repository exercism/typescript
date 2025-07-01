import { describe, it, expect, xit } from '@jest/globals'
import { annotate } from './flower-field.ts'

describe('Flower Field annotate', () => {
  it('handles no rows', () => {
    expect(annotate([])).toEqual([])
  })

  xit('handles no columns', () => {
    expect(annotate([''])).toEqual([''])
  })

  xit('handles no flowers', () => {
    const input = ['   ', '   ', '   ']
    const expected = ['   ', '   ', '   ']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles garden full of flowers', () => {
    const input = ['***', '***', '***']
    const expected = ['***', '***', '***']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles flower surrounded by spaces', () => {
    const input = ['   ', ' * ', '   ']
    const expected = ['111', '1*1', '111']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles space surrounded by flowers', () => {
    const input = ['***', '* *', '***']
    const expected = ['***', '*8*', '***']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles horizontal line', () => {
    const input = [' * * ']
    const expected = ['1*2*1']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles horizontal line, flowers at edges', () => {
    const input = ['*   *']
    const expected = ['*1 1*']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles vertical line', () => {
    const input = [' ', '*', ' ', '*', ' ']
    const expected = ['1', '*', '2', '*', '1']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles vertical line, flowers at edges', () => {
    const input = ['*', ' ', ' ', ' ', '*']
    const expected = ['*', '1', ' ', '1', '*']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles cross', () => {
    const input = ['  *  ', '  *  ', '*****', '  *  ', '  *  ']
    const expected = [' 2*2 ', '25*52', '*****', '25*52', ' 2*2 ']
    expect(annotate(input)).toEqual(expected)
  })

  xit('handles large gardem', () => {
    const input = [' *  * ', '  *   ', '    * ', '   * *', ' *  * ', '      ']
    const expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111',
    ]
    expect(annotate(input)).toEqual(expected)
  })
})
