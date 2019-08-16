class Isogram {
  private static alphabet = "abcdefghijklmnopqrstuvwxyz"

  public static isIsogram(phrase: string): boolean {
    const appearances = new Set()

    for (const letter of phrase) {
      if (this.isLetter(letter)) {
        if (appearances.has(letter.toLowerCase())) {
          return false
        } else {
          appearances.add(letter.toLowerCase())
        }
      } else {
        continue
      }
    }

    return true
  }

  private static isLetter(letter: string): boolean {
    if (
      (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) ||
      (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)
    ) {
      return true
    } else {
      return false
    }
  }
}

export default Isogram
