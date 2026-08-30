import { describe, it, expect, xit } from '@jest/globals'
import { hey } from './bob.ts'

describe('Bob', () => {
  it('asking a question', () => {
    const result = hey('Does this cryogenic chamber make me look fat?')
    expect(result).toEqual('Sure.')
  })

  xit('shouting', () => {
    const result = hey('WATCH OUT!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('forceful question', () => {
    const result = hey("WHAT'S GOING ON?")
    expect(result).toEqual("Calm down, I know what I'm doing!")
  })

  xit('silence', () => {
    const result = hey('')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('stating something', () => {
    const result = hey('Tom-ay-to, tom-aaaah-to.')
    expect(result).toEqual('Whatever.')
  })

  xit('asking a numeric question', () => {
    const result = hey('You are, what, like 15?')
    expect(result).toEqual('Sure.')
  })

  xit('asking gibberish', () => {
    const result = hey('fffbbcbeab?')
    expect(result).toEqual('Sure.')
  })

  xit('question with no letters', () => {
    const result = hey('4?')
    expect(result).toEqual('Sure.')
  })

  xit('non-letters with question', () => {
    const result = hey(':) ?')
    expect(result).toEqual('Sure.')
  })

  xit('prattling on', () => {
    const result = hey('Wait! Hang on. Are you going to be OK?')
    expect(result).toEqual('Sure.')
  })

  xit('ending with whitespace', () => {
    const result = hey('Okay if like my  spacebar  quite a bit?   ')
    expect(result).toEqual('Sure.')
  })

  xit('multiple line question', () => {
    const result = hey('\nDoes this cryogenic chamber make\n me look fat?')
    expect(result).toEqual('Sure.')
  })

  xit('shouting gibberish', () => {
    const result = hey('FCECDFCAAB')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('shouting a statement containing a question mark', () => {
    const result = hey('DO LIONS EAT PEOPLE? AHHHHH.')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('shouting numbers', () => {
    const result = hey('1, 2, 3 GO!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('shouting with special characters', () => {
    const result = hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('shouting with no exclamation mark', () => {
    const result = hey('I HATE THE DENTIST')
    expect(result).toEqual('Whoa, chill out!')
  })

  xit('prolonged silence', () => {
    const result = hey('          ')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('alternate silence', () => {
    const result = hey('\t\t\t\t\t\t\t\t\t\t')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('other whitespace', () => {
    const result = hey('\n\r \t')
    expect(result).toEqual('Fine. Be that way!')
  })

  xit('talking forcefully', () => {
    const result = hey('Hi there!')
    expect(result).toEqual('Whatever.')
  })

  xit('using acronyms in regular speech', () => {
    const result = hey("It's OK if you don't want to go work for NASA.")
    expect(result).toEqual('Whatever.')
  })

  xit('no letters', () => {
    const result = hey('1, 2, 3')
    expect(result).toEqual('Whatever.')
  })

  xit('statement containing question mark', () => {
    const result = hey('Ending with ? means a question.')
    expect(result).toEqual('Whatever.')
  })

  xit('starting with whitespace', () => {
    const result = hey('         hmmmmmmm...')
    expect(result).toEqual('Whatever.')
  })

  xit('non-question ending with whitespace', () => {
    const result = hey('This is a statement ending with whitespace      ')
    expect(result).toEqual('Whatever.')
  })
})
