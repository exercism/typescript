const aToZ = [...Array<string>(26)].map((_, index) => {
  return String.fromCharCode(index + 65)
})

export function isPangram(value: string): boolean {
  const myMap = new Map<string, number>()
  aToZ.forEach((key: string) => {
    myMap.set(key.toLowerCase(), 0)
  })

  for (const each of value) {
    const item = myMap.get(each) || 0
    myMap.set(each.toLowerCase(), item + 1)
  }

  for (const each of myMap.values()) {
    if (each === 0) {
      return false
    }
  }
  return true
}
