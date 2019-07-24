class PhoneNumber {
  private value: string

  constructor(input: string) {
    let cleanedUp = input.replace(/(\)|\(|\s|\.|-)/g, "")
    if (cleanedUp.length === 11 && cleanedUp[0] === "1") {
      cleanedUp = cleanedUp.slice(1, 11)
    }
    this.value = cleanedUp
  }

  public number(): string | undefined {
    if (this.value.length < 10 || this.value.length > 10) {
      return undefined
    }
    for (const each of this.value) {
      const result = parseInt(each, 10)
      if (isNaN(result)) {
        return undefined
      }
    }
    return this.value
  }
}
export default PhoneNumber
