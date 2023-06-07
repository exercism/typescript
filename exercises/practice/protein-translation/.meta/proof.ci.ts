const ACID_PROTEIN_MAP = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
} as const

type Codon = keyof typeof ACID_PROTEIN_MAP
type Protein = (typeof ACID_PROTEIN_MAP)[Codon]

const getProtein = (codon: string): Protein | 'INVALID' =>
  ACID_PROTEIN_MAP[codon] || 'INVALID'

export const translate = (rnaStrand: string): Protein[] => {
  const proteins: (typeof ACID_PROTEIN_MAP)[keyof typeof ACID_PROTEIN_MAP][] =
    []

  if (rnaStrand) {
    for (let i = 0; i < rnaStrand.length; i += 3) {
      const protein = getProtein(rnaStrand.substring(i, i + 3))

      if (protein) {
        if (protein === 'STOP') {
          break
        }

        if (protein === 'INVALID') {
          throw new Error('Invalid codon')
        }

        proteins.push(protein)
      }
    }
  }

  return proteins
}
