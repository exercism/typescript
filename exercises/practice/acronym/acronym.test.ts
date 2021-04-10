import { parse } from './acronym'

describe('Acronym are produced from', () => {
  it('title cased phrases', () => {
    expect(parse('Portable Network Graphics')).toEqual('PNG')
  })

  xit('other title cased phrases', () => {
    expect(parse('Ruby on Rails')).toEqual('ROR')
  })

  xit('inconsistently cased phrases', () => {
    expect(parse('HyperText Markup Language')).toEqual('HTML')
  })

  xit('phrases with punctuation', () => {
    expect(parse('First In, First Out')).toEqual('FIFO')
  })

  xit('other phrases with punctuation', () => {
    expect(parse('PHP: Hypertext Preprocessor')).toEqual('PHP')
  })

  xit('phrases with punctuation and sentence casing', () => {
    expect(parse('Complementary metal-oxide semiconductor')).toEqual('CMOS')
  })
})
