import { describe, it, expect, xit } from '@jest/globals'
import { isIsogram } from './isogram.ts'

describe('Check if the given string is an isogram', () => {
  it('empty string', () => {
    const expected = true
    expect(isIsogram('')).toEqual(expected)
  })

  xit('isogram with only lower case characters', () => {
    const expected = true
    expect(isIsogram('isogram')).toEqual(expected)
  })

  xit('word with one duplicated character', () => {
    const expected = false
    expect(isIsogram('eleven')).toEqual(expected)
  })

  xit('word with one duplicated character from the end of the alphabet', () => {
    const expected = false
    expect(isIsogram('zzyzx')).toEqual(expected)
  })

  xit('longest reported english isogram', () => {
    const expected = true
    expect(isIsogram('subdermatoglyphic')).toEqual(expected)
  })

  xit('word with duplicated character in mixed case', () => {
    const expected = false
    expect(isIsogram('Alphabet')).toEqual(expected)
  })

  xit('word with duplicated character in mixed case, lowercase first', () => {
    const expected = false
    expect(isIsogram('alphAbet')).toEqual(expected)
  })

  xit('hypothetical isogrammic word with hyphen', () => {
    const expected = true
    expect(isIsogram('thumbscrew-japingly')).toEqual(expected)
  })

  xit('hypothetical word with duplicated character following hyphen', () => {
    const expected = false
    expect(isIsogram('thumbscrew-jappingly')).toEqual(expected)
  })

  xit('isogram with duplicated hyphen', () => {
    const expected = true
    expect(isIsogram('six-year-old')).toEqual(expected)
  })

  xit('made-up name that is an isogram', () => {
    const expected = true
    expect(isIsogram('Emily Jung Schwartzkopf')).toEqual(expected)
  })

  xit('duplicated character in the middle', () => {
    const expected = false
    expect(isIsogram('accentor')).toEqual(expected)
  })

  xit('same first and last characters', () => {
    const expected = false
    expect(isIsogram('angola')).toEqual(expected)
  })

  xit('word with duplicated character and with two hyphens', () => {
    const expected = false
    expect(isIsogram('up-to-date')).toEqual(expected)
  })
})
