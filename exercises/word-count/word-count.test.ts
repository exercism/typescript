import Words from './word-count'

describe('words()', () => {
  const words = new Words()

  it('counts one word', () => {
    const expectedCounts = new Map(Object.entries({ word: 1 }))
    expect(words.count('word')).toEqual(expectedCounts)
  })

  xit('counts one of each', () => {
    const expectedCounts = new Map(Object.entries({ one: 1, of: 1, each: 1 }))
    expect(words.count('one of each')).toEqual(expectedCounts)
  })

  xit('counts multiple occurrences', () => {
    const expectedCounts = new Map(Object.entries({ one : 1, fish: 4, two: 1, red: 1, blue: 1 }))
    expect(words.count('one fish two fish red fish blue fish')).toEqual(expectedCounts)
  })

  xit('includes punctuation', () => {
    const expectedCounts = new Map(Object.entries({ car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 }))
    expect(words.count('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts)
  })

  xit('includes numbers', () => {
    const expectedCounts = new Map(Object.entries({ testing: 2, 1: 1, 2: 1 }))
    expect(words.count('1 2 testing testing')).toEqual(expectedCounts)
  })

  xit('normalizes to lower case', () => {
    const expectedCounts = new Map(Object.entries({ go: 3 }))
    expect(words.count('go Go GO')).toEqual(expectedCounts)
  })

  xit('counts properly international characters', () => {
    const expectedCounts = new Map(Object.entries({ '¡hola!': 1, '¿qué': 1, 'tal?': 1, 'привет!': 1 }))
    expect(words.count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts)
  })

  xit('counts multiline', () => {
    const expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }))
    expect(words.count('hello\nworld')).toEqual(expectedCounts)
  })

  xit('counts tabs', () => {
    const expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }))
    expect(words.count('hello\tworld')).toEqual(expectedCounts)
  })

  xit('counts multiple spaces as one', () => {
    const expectedCounts = new Map(Object.entries({ hello: 1, world: 1 }))
    expect(words.count('hello  world')).toEqual(expectedCounts)
  })

  xit('does not count leading or trailing whitespace', () => {
    const expectedCounts = new Map(Object.entries({ introductory: 1, course: 1 }))
    expect(words.count('\t\tIntroductory Course      ')).toEqual(expectedCounts)
  })

  xit('handles properties that exist on Object’s prototype', () => {
    const expectedCounts = new Map(Object.entries({ reserved: 1, words : 1, like : 1,  constructor: 1, and : 1, tostring: 1,  'ok?': 1}))
    expect(words.count('reserved words like constructor and toString ok?')).toEqual(expectedCounts)
  })
})
