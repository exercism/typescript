import { describe, it, expect, xit } from '@jest/globals'
import { translate } from './protein-translation.ts'

describe('Translate input RNA sequences into proteins', () => {
  it('Methionine RNA sequence', () => {
    const expected = ['Methionine']
    expect(translate('AUG')).toEqual(expected)
  })

  xit('Phenylalanine RNA sequence 1', () => {
    const expected = ['Phenylalanine']
    expect(translate('UUU')).toEqual(expected)
  })

  xit('Phenylalanine RNA sequence 2', () => {
    const expected = ['Phenylalanine']
    expect(translate('UUC')).toEqual(expected)
  })

  xit('Leucine RNA sequence 1', () => {
    const expected = ['Leucine']
    expect(translate('UUA')).toEqual(expected)
  })

  xit('Leucine RNA sequence 2', () => {
    const expected = ['Leucine']
    expect(translate('UUG')).toEqual(expected)
  })

  xit('Serine RNA sequence 1', () => {
    const expected = ['Serine']
    expect(translate('UCU')).toEqual(expected)
  })

  xit('Serine RNA sequence 2', () => {
    const expected = ['Serine']
    expect(translate('UCC')).toEqual(expected)
  })

  xit('Serine RNA sequence 3', () => {
    const expected = ['Serine']
    expect(translate('UCA')).toEqual(expected)
  })

  xit('Serine RNA sequence 4', () => {
    const expected = ['Serine']
    expect(translate('UCG')).toEqual(expected)
  })

  xit('Tyrosine RNA sequence 1', () => {
    const expected = ['Tyrosine']
    expect(translate('UAU')).toEqual(expected)
  })

  xit('Tyrosine RNA sequence 2', () => {
    const expected = ['Tyrosine']
    expect(translate('UAC')).toEqual(expected)
  })

  xit('Cysteine RNA sequence 1', () => {
    const expected = ['Cysteine']
    expect(translate('UGU')).toEqual(expected)
  })

  xit('Cysteine RNA sequence 2', () => {
    const expected = ['Cysteine']
    expect(translate('UGC')).toEqual(expected)
  })

  xit('Tryptophan RNA sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGG')).toEqual(expected)
  })

  xit('STOP codon RNA sequence 1', () => {
    const expected: string[] = []
    expect(translate('UAA')).toEqual(expected)
  })

  xit('STOP codon RNA sequence 2', () => {
    const expected: string[] = []
    expect(translate('UAG')).toEqual(expected)
  })

  xit('STOP codon RNA sequence 3', () => {
    const expected: string[] = []
    expect(translate('UGA')).toEqual(expected)
  })

  xit('Sequence of two protein codons translates into proteins', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translate('UUUUUU')).toEqual(expected)
  })

  xit('Sequence of two different protein codons translates into proteins', () => {
    const expected = ['Leucine', 'Leucine']
    expect(translate('UUAUUG')).toEqual(expected)
  })

  xit('Translate RNA strand into correct protein list', () => {
    const expected = ['Methionine', 'Phenylalanine', 'Tryptophan']
    expect(translate('AUGUUUUGG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon at beginning of sequence', () => {
    const expected: string[] = []
    expect(translate('UAGUGG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon at end of two-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGGUAG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon at end of three-codon sequence', () => {
    const expected = ['Methionine', 'Phenylalanine']
    expect(translate('AUGUUUUAA')).toEqual(expected)
  })

  xit('Translation stops if STOP codon in middle of three-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(translate('UGGUAGUGG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon in middle of six-codon sequence', () => {
    const expected = ['Tryptophan', 'Cysteine', 'Tyrosine']
    expect(translate('UGGUGUUAUUAAUGGUUU')).toEqual(expected)
  })

  xit("Non-existing codon can't translate", () => {
    expect(() => {
      translate('AAA')
    }).toThrow('Invalid codon')
  })

  xit("Unknown amino acids, not part of a codon, can't translate", () => {
    expect(() => {
      translate('XYZ')
    }).toThrow('Invalid codon')
  })

  xit("Incomplete RNA sequence can't translate", () => {
    expect(() => {
      translate('AUGU')
    }).toThrow('Invalid codon')
  })

  xit('Incomplete RNA sequence can translate if valid until a STOP codon', () => {
    const expected = ['Phenylalanine', 'Phenylalanine']
    expect(translate('UUCUUCUAAUGGU')).toEqual(expected)
  })
})
