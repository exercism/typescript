class PigLatin {
  public static translate(phrase: string): string {
    const words = phrase.split(" ")
    const translated: string[] = []

    words.forEach(word => {
      const parts = word.match(/^([^aeiou]?qu|[^aeiou]*)(.+)/)
      const beginning = parts![1]
      const ending = parts![2]

      if (beginning.length === 0) {
        translated.push(`${word}ay`)
      } else {
        translated.push(`${ending}${beginning}ay`)
      }
    })

    return translated.join(" ")
  }
}

export default PigLatin
