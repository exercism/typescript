type Counts = Record<'A' | 'C' | 'G' | 'T', number>

export function nucleotideCounts(strand: string): Counts {
  const nucleotideOccurrences: Counts = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  }

  strand.split('').forEach((nucleotide) => {
    if (nucleotide in nucleotideOccurrences) {
      if (nucleotide === 'A') {
        nucleotideOccurrences.A++
      }
      if (nucleotide === 'C') {
        nucleotideOccurrences.C++
      }
      if (nucleotide === 'G') {
        nucleotideOccurrences.G++
      }
      if (nucleotide === 'T') {
        nucleotideOccurrences.T++
      }
    } else {
      throw new Error('Invalid nucleotide in strand')
    }
  })

  return nucleotideOccurrences
}
