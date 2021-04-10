import { translate } from './pig-latin'

describe('ay is added to words that start with vowels', () => {
  it('word beginning with a', () => {
    const expected = 'appleay'
    expect(translate('apple')).toEqual(expected)
  })

  xit('word beginning with e', () => {
    const expected = 'earay'
    expect(translate('ear')).toEqual(expected)
  })

  xit('word beginning with i', () => {
    const expected = 'iglooay'
    expect(translate('igloo')).toEqual(expected)
  })

  xit('word beginning with o', () => {
    const expected = 'objectay'
    expect(translate('object')).toEqual(expected)
  })

  xit('word beginning with u', () => {
    const expected = 'underay'
    expect(translate('under')).toEqual(expected)
  })

  xit('word beginning with a vowel and followed by a qu', () => {
    const expected = 'equalay'
    expect(translate('equal')).toEqual(expected)
  })
})

describe('first letter and ay are moved to the end of words that start with consonants', () => {
  xit('word beginning with p', () => {
    const expected = 'igpay'
    expect(translate('pig')).toEqual(expected)
  })

  xit('word beginning with k', () => {
    const expected = 'oalakay'
    expect(translate('koala')).toEqual(expected)
  })

  xit('word beginning with x', () => {
    const expected = 'enonxay'
    expect(translate('xenon')).toEqual(expected)
  })

  xit('word beginning with q without a following u', () => {
    const expected = 'atqay'
    expect(translate('qat')).toEqual(expected)
  })
})

describe('some letter clusters are treated like a single consonant', () => {
  xit('word beginning with ch', () => {
    const expected = 'airchay'
    expect(translate('chair')).toEqual(expected)
  })

  xit('word beginning with qu', () => {
    const expected = 'eenquay'
    expect(translate('queen')).toEqual(expected)
  })

  xit('word beginning with qu and a preceding consonant', () => {
    const expected = 'aresquay'
    expect(translate('square')).toEqual(expected)
  })

  xit('word beginning with th', () => {
    const expected = 'erapythay'
    expect(translate('therapy')).toEqual(expected)
  })

  xit('word beginning with thr', () => {
    const expected = 'ushthray'
    expect(translate('thrush')).toEqual(expected)
  })

  xit('word beginning with sch', () => {
    const expected = 'oolschay'
    expect(translate('school')).toEqual(expected)
  })
})

describe('position of y in a word determines if it is a consonant or a vowel', () => {
  xit('y is treated like a consonant at the beginning of a word', () => {
    const expected = 'ellowyay'
    expect(translate('yellow')).toEqual(expected)
  })

  xit('y as second letter in two letter word', () => {
    const expected = 'ymay'
    expect(translate('my')).toEqual(expected)
  })
})

describe('phrases are translated', () => {
  xit('a whole phrase', () => {
    const expected = 'ickquay astfay unray'
    expect(translate('quick fast run')).toEqual(expected)
  })
})
