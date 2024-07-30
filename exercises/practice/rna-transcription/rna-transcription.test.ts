import { describe, it, expect, xit } from '@jest/globals'
import { toRna } from './rna-transcription.ts'

describe('Transcriptor', () => {
  it('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G')
  })

  xit('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C')
  })

  xit('transcribes adenine to uracil', () => {
    expect(toRna('A')).toEqual('U')
  })

  xit('transcribes thymine to adenine', () => {
    expect(toRna('T')).toEqual('A')
  })

  xit('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU')
  })

  xit('correctly handles invalid input', () => {
    expect(() => toRna('U')).toThrow('Invalid input DNA.')
  })

  xit('correctly handles completely invalid input', () => {
    expect(() => toRna('XXX')).toThrow('Invalid input DNA.')
  })

  xit('correctly handles partially invalid input', () => {
    expect(() => toRna('ACGTXXXCTTAA')).toThrow('Invalid input DNA.')
  })
})
