import Hamming from './hamming'

describe('Hamming', () => {
  const hamming = new Hamming()

  it('no difference between identical strands', () => {
    expect(hamming.compute('A', 'A')).toEqual(0)
  })

  it('complete hamming distance for single nucleotide strand', () => {
    expect(hamming.compute('A', 'G')).toEqual(1)
  })

  it('complete hamming distance for small strand', () => {
    expect(hamming.compute('AG', 'CT')).toEqual(2)
  })

  it('small hamming distance', () => {
    expect(hamming.compute('AT', 'CT')).toEqual(1)
  })

  it('small hamming distance in longer strand', () => {
    expect(hamming.compute('GGACG', 'GGTCG')).toEqual(1)
  })

  it('large hamming distance', () => {
    expect(hamming.compute('GATACA', 'GCATAA')).toEqual(4)
  })

  it('hamming distance in very long strand', () => {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9)
  })

  it('throws error when strands are not equal length', () => {
    expect(() => { hamming.compute('GGACGGATTCTG', 'AGGAC') }
    ).toThrowError('DNA strands must be of equal length.' )
  })

})
