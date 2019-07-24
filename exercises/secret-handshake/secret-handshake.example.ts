class HandShake {
  private readonly allCommands = ["wink", "double blink", "close your eyes", "jump", "REVERSE"] as const
  private readonly shakeWith: string[]

  constructor(handshake: number) {
    if (typeof handshake !== "number") {
      throw new Error("Handshake must be a number")
    }

    this.shakeWith = this.calculateHandshake(handshake)
  }

  public commands(): string[] {
    return this.shakeWith
  }

   calculateHandshake(handshake: number): string[] {
    const shakeWith = []

    for (let i = 0; i < this.allCommands.length; i++) {
      const currentCommand = this.allCommands[i]
      const handshakeHasCommand = handshake & Math.pow(2, i)

      if (handshakeHasCommand) {
        if (currentCommand === "REVERSE") {
          shakeWith.reverse()
        } else {
          shakeWith.push(this.allCommands[i])
        }
      }
    }
    return shakeWith
  }
}

export default HandShake
