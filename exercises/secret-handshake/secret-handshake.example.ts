class HandShake {
    allCommands = [
        'wink',
        'double blink',
        'close your eyes',
        'jump',
        'REVERSE'
    ]

    shakeWith: string[] = []

    constructor(handshake: number) {
        if (typeof handshake !== 'number') {
            throw new Error('Handshake must be a number')
        }

        this.shakeWith = this.calculateHandshake(handshake)
    }

    commands() {
        return this.shakeWith
    }

    calculateHandshake(handshake: number) {
        const shakeWith = []

        for (let i = 0; i < this.allCommands.length; i++) {
            const currentCommand = this.allCommands[i]
            const handshakeHasCommand = (handshake & Math.pow(2, i))

            if (handshakeHasCommand) {
                if (currentCommand === 'REVERSE') {
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
