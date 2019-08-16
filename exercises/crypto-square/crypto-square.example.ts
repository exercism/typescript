export default class Square {
  private input: string

  constructor(input: string) {
    this.input = input
  }

  public normalizePlaintext(): string {
    return this.input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  }

  public size(): number {
    const realLength = Math.sqrt(this.normalizePlaintext().length)
    return Math.ceil(realLength)
  }

  public plaintextSegments(): ArrayLike<string> | null {
    const plainText = this.normalizePlaintext()
    const chunkSize = this.size()

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, "g")
    return plainText.match(splitRegex)
  }

  public ciphertext(): string {
    const textSegments = this.plaintextSegments()
    let i
    let j
    const columns: string[][] = []
    let currentSegment
    let currentLetter

    for (i = 0; i < this.size(); i++) {
      columns.push([])
    }

    for (i = 0; i < textSegments!.length; i++) {
      currentSegment = textSegments![i]

      for (j = 0; j < currentSegment.length; j++) {
        currentLetter = currentSegment[j]
        columns[j].push(currentLetter)
      }
    }

    const result: string[] = []
    for (i = 0; i < columns.length; i++) {
      result[i] = columns[i].join("")
    }

    return result.join("")
  }

  public normalizeCiphertext(): string {
    const chunkSize = this.size()
    const splitRegex = new RegExp(`.{1,${chunkSize}}`, "g")
    return this.ciphertext()
      .match(splitRegex)!
      .join(" ")
  }
}
