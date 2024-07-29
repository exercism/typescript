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

  xit('longest reported english isogram', () => {
    const expected = true
    expect(isIsogram('subdermatoglyphic')).toEqual(expected)
  })

  xit('word with duplicated character in mixed case', () => {
    const expected = false
    expect(isIsogram('Alphabet')).toEqual(expected)
  })

  xit('hypothetical isogrammic word with hyphen', () => {
    const expected = true
    expect(isIsogram('thumbscrew-japingly')).toEqual(expected)
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
})
