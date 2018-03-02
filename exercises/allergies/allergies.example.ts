class Allergies {
  allergenIndex: number

  possibleAllergies = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats'
  ]

  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex
  }

  allergicTo(food: string) {
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

  list(): string[] {
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

export default Allergies
