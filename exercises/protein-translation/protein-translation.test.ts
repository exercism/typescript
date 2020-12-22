import ProteinTranslation from './protein-translation'

describe('Translate input RNA sequences into proteins', () => {
  it('Methionine RNA sequence', () => {
    const expected = ['Methionine']
    expect(ProteinTranslation.proteins('AUG')).toEqual(expected)
  })

  xit('Phenylalanine RNA sequence 1', () => {
    const expected = ['Phenylalanine']
    expect(ProteinTranslation.proteins('UUU')).toEqual(expected)
  })

  xit('Phenylalanine RNA sequence 2', () => {
    const expected = ['Phenylalanine']
    expect(ProteinTranslation.proteins('UUC')).toEqual(expected)
  })

  xit('Leucine RNA sequence 1', () => {
    const expected = ['Leucine']
    expect(ProteinTranslation.proteins('UUA')).toEqual(expected)
  })

  xit('Leucine RNA sequence 2', () => {
    const expected = ['Leucine']
    expect(ProteinTranslation.proteins('UUG')).toEqual(expected)
  })

  xit('Serine RNA sequence 1', () => {
    const expected = ['Serine']
    expect(ProteinTranslation.proteins('UCU')).toEqual(expected)
  })

  xit('Serine RNA sequence 2', () => {
    const expected = ['Serine']
    expect(ProteinTranslation.proteins('UCC')).toEqual(expected)
  })

  xit('Serine RNA sequence 3', () => {
    const expected = ['Serine']
    expect(ProteinTranslation.proteins('UCA')).toEqual(expected)
  })

  xit('Serine RNA sequence 4', () => {
    const expected = ['Serine']
    expect(ProteinTranslation.proteins('UCG')).toEqual(expected)
  })

  xit('Tyrosine RNA sequence 1', () => {
    const expected = ['Tyrosine']
    expect(ProteinTranslation.proteins('UAU')).toEqual(expected)
  })

  xit('Tyrosine RNA sequence 2', () => {
    const expected = ['Tyrosine']
    expect(ProteinTranslation.proteins('UAC')).toEqual(expected)
  })

  xit('Cysteine RNA sequence 1', () => {
    const expected = ['Cysteine']
    expect(ProteinTranslation.proteins('UGU')).toEqual(expected)
  })

  xit('Cysteine RNA sequence 2', () => {
    const expected = ['Cysteine']
    expect(ProteinTranslation.proteins('UGC')).toEqual(expected)
  })

  xit('Tryptophan RNA sequence', () => {
    const expected = ['Tryptophan']
    expect(ProteinTranslation.proteins('UGG')).toEqual(expected)
  })

  xit('STOP codon RNA sequence 1', () => {
    const expected: string[] = []
    expect(ProteinTranslation.proteins('UAA')).toEqual(expected)
  })

  xit('STOP codon RNA sequence 2', () => {
    const expected: string[] = []
    expect(ProteinTranslation.proteins('UAG')).toEqual(expected)
  })

  xit('STOP codon RNA sequence 3', () => {
    const expected: string[] = []
    expect(ProteinTranslation.proteins('UGA')).toEqual(expected)
  })

  xit('Translate RNA strand into correct protein list', () => {
    const expected = ['Methionine', 'Phenylalanine', 'Tryptophan']
    expect(ProteinTranslation.proteins('AUGUUUUGG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon at beginning of sequence', () => {
    const expected: string[] = []
    expect(ProteinTranslation.proteins('UAGUGG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon at end of two-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(ProteinTranslation.proteins('UGGUAG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon at end of three-codon sequence', () => {
    const expected = ['Methionine', 'Phenylalanine']
    expect(ProteinTranslation.proteins('AUGUUUUAA')).toEqual(expected)
  })

  xit('Translation stops if STOP codon in middle of three-codon sequence', () => {
    const expected = ['Tryptophan']
    expect(ProteinTranslation.proteins('UGGUAGUGG')).toEqual(expected)
  })

  xit('Translation stops if STOP codon in middle of six-codon sequence', () => {
    const expected = ['Tryptophan', 'Cysteine', 'Tyrosine']
    expect(ProteinTranslation.proteins('UGGUGUUAUUAAUGGUUU')).toEqual(expected)
  })
})
