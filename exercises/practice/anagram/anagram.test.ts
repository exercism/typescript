import { describe, it, expect, xit } from '@jest/globals'
import { Anagram } from './anagram.ts'

describe('Anagram', () => {
  it('no matches', () => {
    const subject = new Anagram('diaper')
    const matches = subject.matches('hello', 'world', 'zombies', 'pants')

    expect(matches).toEqual([])
  })

  xit('detects two anagrams', () => {
    const subject = new Anagram('solemn')
    const matches = subject.matches('lemons', 'cherry', 'melons')

    expect(matches).toEqual(['lemons', 'melons'])
  })

  xit('does not detect anagram subsets', () => {
    const subject = new Anagram('good')
    const matches = subject.matches('dog', 'goody')

    expect(matches).toEqual([])
  })

  xit('detects anagram', () => {
    const subject = new Anagram('listen')
    const matches = subject.matches('enlists', 'google', 'inlets', 'banana')

    expect(matches).toEqual(['inlets'])
  })

  xit('detects three anagrams', () => {
    const subject = new Anagram('allergy')
    const matches = subject.matches(
      'gallery',
      'ballerina',
      'regally',
      'clergy',
      'largely',
      'leading'
    )

    expect(matches).toEqual(['gallery', 'regally', 'largely'])
  })

  xit('detects multiple anagrams with different case', () => {
    const subject = new Anagram('nose')
    const matches = subject.matches('Eons', 'ONES')

    expect(matches).toEqual(['Eons', 'ONES'])
  })

  xit('does not detect non-anagrams with identical checksum', () => {
    const subject = new Anagram('mass')
    const matches = subject.matches('last')

    expect(matches).toEqual([])
  })

  xit('detects anagrams case-insensitively', () => {
    const subject = new Anagram('Orchestra')
    const matches = subject.matches('cashregister', 'Carthorse', 'radishes')

    expect(matches).toEqual(['Carthorse'])
  })

  xit('detects anagrams using case-insensitive subject', () => {
    const subject = new Anagram('Orchestra')
    const matches = subject.matches('cashregister', 'carthorse', 'radishes')

    expect(matches).toEqual(['carthorse'])
  })

  xit('detects anagrams using case-insensitive possible matches', () => {
    const subject = new Anagram('orchestra')
    const matches = subject.matches('cashregister', 'Carthorse', 'radishes')

    expect(matches).toEqual(['Carthorse'])
  })

  xit('does not detect an anagram if the original word is repeated', () => {
    const subject = new Anagram('go')
    const matches = subject.matches('go Go GO')

    expect(matches).toEqual([])
  })

  xit('anagrams must use all letters exactly once', () => {
    const subject = new Anagram('tapper')
    const matches = subject.matches('patter')

    expect(matches).toEqual([])
  })

  xit('words are not anagrams of themselves', () => {
    const subject = new Anagram('BANANA')
    const matches = subject.matches('BANANA')

    expect(matches).toEqual([])
  })

  xit('words are not anagrams of themselves even if letter case is partially different', () => {
    const subject = new Anagram('BANANA')
    const matches = subject.matches('Banana')

    expect(matches).toEqual([])
  })

  xit('words are not anagrams of themselves even if letter case is completely different', () => {
    const subject = new Anagram('BANANA')
    const matches = subject.matches('Banana')

    expect(matches).toEqual([])
  })

  xit('words other than themselves can be anagrams', () => {
    const subject = new Anagram('LISTEN')
    const matches = subject.matches('LISTEN', 'Silent')

    expect(matches).toEqual(['Silent'])
  })

  xit('matches() accepts string arguments', () => {
    const subject = new Anagram('ant')
    const matches = subject.matches('stand', 'tan', 'at')

    expect(matches).toEqual(['tan'])
  })

  xit('matches() accepts single string argument', () => {
    const subject = new Anagram('ant')
    const matches = subject.matches('tan')

    expect(matches).toEqual(['tan'])
  })
})
