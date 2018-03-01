class NucleotideCount {
  static nucleotideCounts(strand: string) {
    const nucleotideOccurrences = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }

    strand.split('').forEach((nucleotide) => {
      if (nucleotide in nucleotideOccurrences) {
        if (nucleotide === 'A') nucleotideOccurrences.A++
        if (nucleotide === 'C') nucleotideOccurrences.C++
        if (nucleotide === 'G') nucleotideOccurrences.G++
        if (nucleotide === 'T') nucleotideOccurrences.T++
      } else {
        throw new Error('Invalid nucleotide in strand')
      }
    })

    return nucleotideOccurrences
  }
}

export default NucleotideCount
