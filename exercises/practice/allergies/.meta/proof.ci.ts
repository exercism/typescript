export class Allergies {
  private allergenIndex: number

  private possibleAllergies = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats',
  ] as const

  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex
  }

  public allergicTo(food: string): boolean {
    let isAllergic = false

    const allergyList = this.list()
    for (const allergy of allergyList) {
      if (allergy === food) {
        isAllergic = true
        break
      }
    }

    return isAllergic
  }

  public list(): string[] {
    const possibleAllergies = this.possibleAllergies
    const allergicTo = []

    for (let i = 0; i < possibleAllergies.length; i++) {
      const allergy = possibleAllergies[i]
      if (this.allergenIndex & Math.pow(2, i)) {
        allergicTo.push(allergy)
      }
    }

    return allergicTo
  }
}
