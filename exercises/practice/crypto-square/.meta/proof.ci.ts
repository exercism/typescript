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

    return this.ciphertextSegments().join(' ')
  }

  public get size(): number {
    const realLength = Math.sqrt(this.plaintext.length)
    return Math.trunc(Math.ceil(realLength))
  }

  private ciphertextSegments(): string[] {
    const textSegments = this.plaintextSegments().map((s) => s.split(''))
    if (textSegments === []) {
      return []
    } else {
      return textSegments[0].map((_firstTextSegmentLetter, i) =>
        textSegments.map((_textSegment, j) => textSegments[j][i]).join('')
      )
    }
  }

  private plaintextSegments(): string[] {
    const plainText = this.plaintext
    const chunkSize = this.size

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g')
    const matches = plainText.match(splitRegex)

    if (!matches) {
      return []
    }

    if (matches[matches.length - 1].length < this.size) {
      matches[matches.length - 1] += ' '.repeat(this.size - matches.length + 1)
    }

    return matches
  }
}
