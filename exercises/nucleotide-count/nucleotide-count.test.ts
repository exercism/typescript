import NucleotideCount from './nucleotide-count'

describe('count all nucleotides in a strand', () => {
  it('empty strand', () => {
    const expected = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }
    expect(NucleotideCount.nucleotideCounts('')).toEqual(expected)
  })

  it('can count one nucleotide in single-character input', () => {
    const expected = {
      A: 0,
      C: 0,
      G: 1,
      T: 0
    }
    expect(NucleotideCount.nucleotideCounts('G')).toEqual(expected)
  })

  it('strand with repeated nucleotide', () => {
    const expected = {
      A: 0,
      C: 0,
      G: 7,
      T: 0
    }
    expect(NucleotideCount.nucleotideCounts('GGGGGGG')).toEqual(expected)
  })

  it('strand with multiple nucleotides', () => {
    const expected = {
      A: 20,
      C: 12,
      G: 17,
      T: 21
    }
    expect(NucleotideCount.nucleotideCounts('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC')).toEqual(expected)
  })

  it('strand with invalid nucleotides', () => {
    const expected = 'Invalid nucleotide in strand'
    expect(() => {NucleotideCount.nucleotideCounts('AGXXACT')}).toThrowError(expected)
  })
})
