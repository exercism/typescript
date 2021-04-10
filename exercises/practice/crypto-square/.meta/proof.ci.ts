export class Crypto {
  constructor(private readonly input: string) {}

  private get plaintext(): string {
    return this.input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  }

  public get ciphertext(): string {
    const chunkSize = this.size
    if (chunkSize === 0) {
      return ''
    }

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g')
    return this.ciphertextSegments()
      .join('')
      .match(splitRegex)
      .map((item) => item.padEnd(chunkSize, ' '))
      .join(' ')
  }

  public get size(): number {
    const realLength = Math.sqrt(this.plaintext.length)
    return Math.ceil(realLength)
  }

  private ciphertextSegments(): string[] {
    const textSegments = this.plaintextSegments()
    const columns: string[][] = []
    let i: number
    let j: number
    let currentSegment: RegExpMatchArray[number]
    let currentLetter: RegExpMatchArray[number][number]

    for (i = 0; i < this.size; i += 1) {
      columns.push([])
    }

    for (i = 0; i < textSegments.length; i += 1) {
      currentSegment = textSegments[i]

      for (j = 0; j < currentSegment.length; j += 1) {
        currentLetter = currentSegment[j]
        columns[j].push(currentLetter)
      }
    }

    const result: string[] = []
    for (i = 0; i < columns.length; i += 1) {
      result[i] = columns[i].join('')
    }

    return result
  }

  private plaintextSegments(): RegExpMatchArray {
    const plainText = this.plaintext
    const chunkSize = this.size

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g')
    return plainText.match(splitRegex)
  }
}
