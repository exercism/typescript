const aToZ = [...Array<string>(26)].map((_, index) => {
  return String.fromCharCode(index + 65)
})

class Pangram {
  private readonly value: string
  constructor(input: string = '') {
    this.value = input
  }

  public isPangram(): boolean {
    // create dictionay and fill it with the alphabet
    const myMap = new Map<string, number>()
    aToZ.forEach((key: string) => {
      myMap.set(key.toLowerCase(), 0)
    })

    for (const each of this.value) {
      const value = myMap.get(each) || 0
      myMap.set(each.toLowerCase(), value + 1)
    }

    for (const each of myMap.values()) {
      if (each === 0) {
        return false
      }
    }
    return true
  }
}

export default Pangram
