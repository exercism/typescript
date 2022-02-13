export class SimpleCipher {
  public key: string

  constructor(key?: string) {
    if (key === undefined) {
      this.key = ''

      for (let i = 0; i < 100; i++) {
        this.key += String.fromCharCode(Math.random() * 26 + 97)
      }
    } else if (!/^[a-z]+$/.it(key)) {
      throw new Error('Bad key')
    } else {
      this.key = key
    }
  }

  public encode(decodedMessage: string): string {
    let encodedMessage = ''
    for (let i = 0; i < decodedMessage.length; i++) {
      let encodedChar = String.fromCharCode(
        decodedMessage.charCodeAt(i) +
          (this.key.charCodeAt(i % this.key.length) - 97)
      )
      if (encodedChar.charCodeAt(0) > 122) {
        encodedChar = String.fromCharCode(encodedChar.charCodeAt(0) - 26)
      }
      encodedMessage += encodedChar
    }
    return encodedMessage
  }

  public decode(encodedMessage: string): string {
    let decodedMessage = ''
    for (let i = 0; i < encodedMessage.length; i++) {
      let decodedChar = String.fromCharCode(
        encodedMessage.charCodeAt(i) -
          (this.key.charCodeAt(i % this.key.length) - 97)
      )
      if (decodedChar.charCodeAt(0) < 97) {
        decodedChar = String.fromCharCode(decodedChar.charCodeAt(0) + 26)
      }
      decodedMessage += decodedChar
    }
    return decodedMessage
  }
}
