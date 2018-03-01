class NucleotideCount {
  static nucleotideCounts(strand: string) {
    const nucleotideOccurrences: {[nucleotide: string]: number} = {}
    nucleotideOccurrences['A'] = 0
    nucleotideOccurrences['C'] = 0
    nucleotideOccurrences['G'] = 0
    nucleotideOccurrences['T'] = 0

    strand.split('').forEach((nucleotide) => {
      if (nucleotide in nucleotideOccurrences) {
        nucleotideOccurrences[nucleotide]++
      } else {
        throw new Error('Invalid nucleotide in strand')
      }
    })

    return nucleotideOccurrences
  }
}

export default NucleotideCount
