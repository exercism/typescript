import Acronym from './acronym'

describe('Acronym are produced from', () => {
  it('title cased phrases', () => {
    expect(Acronym.parse('Portable Network Graphics')).toEqual('PNG')
  })

  xit('other title cased phrases', () => {
    expect(Acronym.parse('Ruby on Rails')).toEqual('ROR')
  })

  xit('inconsistently cased phrases', () => {
    expect(Acronym.parse('HyperText Markup Language')).toEqual('HTML')
  })

  xit('phrases with punctuation', () => {
    expect(Acronym.parse('First In, First Out')).toEqual('FIFO')
  })

  xit('other phrases with punctuation', () => {
    expect(Acronym.parse('PHP: Hypertext Preprocessor')).toEqual('PHP')
  })

  xit('phrases with punctuation and sentence casing', () => {
    expect(Acronym.parse('Complementary metal-oxide semiconductor')).toEqual(
      'CMOS'
    )
  })
})
