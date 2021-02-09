export default class Acronym {
  public static parse(phrase: string): string {
    if (typeof phrase !== 'undefined' && phrase !== undefined) {
      const match = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g)
      return !match
        ? ''
        : match.reduce(
            (acronym: string, word: string) =>
              (acronym += word[0].toUpperCase()),
            ''
          )
    }
    return ''
  }
}
