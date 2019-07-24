class ProteinTranslation {
  private static readonly translations = [
    { codon: "AUG", protein: "Methionine" },
    { codon: "UUU", protein: "Phenylalanine" },
    { codon: "UUC", protein: "Phenylalanine" },
    { codon: "UUA", protein: "Leucine" },
    { codon: "UUG", protein: "Leucine" },
    { codon: "UCU", protein: "Serine" },
    { codon: "UCC", protein: "Serine" },
    { codon: "UCA", protein: "Serine" },
    { codon: "UCG", protein: "Serine" },
    { codon: "UAU", protein: "Tyrosine" },
    { codon: "UAC", protein: "Tyrosine" },
    { codon: "UGU", protein: "Cysteine" },
    { codon: "UGC", protein: "Cysteine" },
    { codon: "UGG", protein: "Tryptophan" },
    { codon: "UAA", protein: "STOP" },
    { codon: "UAG", protein: "STOP" },
    { codon: "UGA", protein: "STOP" }
  ]

  public static proteins(strand: string): string[] {
    const codons = this.breakStrandIntoCodons(strand)
    return this.getProteinsFromCodons(codons)
  }

  private static breakStrandIntoCodons(strand: string): string[] {
    const result: string[] = []
    for (let i = 0; i <= strand.length - 1; i++) {
      result.push(strand.slice(0, 3))
      strand = strand.slice(3)
    }
    return result
  }

  private static getProteinsFromCodons(codons: string[]): string[] {
    const result: string[] = []
    for (const codon of codons) {
      const protein = this.getProteinFromCodon(codon)
      if (protein !== "STOP") {
        result.push(protein)
      } else {
        break
      }
    }
    return result
  }

  private static getProteinFromCodon(codon: string): string {
    let result = ""
    for (const translation of this.translations) {
      if (translation.codon === codon) {
        result = translation.protein
        break
      }
    }
    return result
  }
}

export default ProteinTranslation
