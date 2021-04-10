import { compute } from './hamming'

describe('Hamming', () => {
  it('no difference between identical strands', () => {
    expect(compute('A', 'A')).toEqual(0)
  })

  xit('complete hamming distance for single nucleotide strand', () => {
    expect(compute('A', 'G')).toEqual(1)
  })

  xit('complete hamming distance for small strand', () => {
    expect(compute('AG', 'CT')).toEqual(2)
  })

  xit('small hamming distance', () => {
    expect(compute('AT', 'CT')).toEqual(1)
  })

  xit('small hamming distance in longer strand', () => {
    expect(compute('GGACG', 'GGTCG')).toEqual(1)
  })

  xit('large hamming distance', () => {
    expect(compute('GATACA', 'GCATAA')).toEqual(4)
  })

  xit('hamming distance in very long strand', () => {
    expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9)
  })

  xit('throws error when strands are not equal length', () => {
    expect(() => {
      compute('GGACGGATTCTG', 'AGGAC')
    }).toThrowError('DNA strands must be of equal length.')
  })
})
