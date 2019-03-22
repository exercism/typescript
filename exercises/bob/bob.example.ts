class Bob {
    private isYelling(message: string): boolean {
        return (message.toUpperCase() === message) && (message.toLowerCase() !== message)
    }
    private isQuestion(message: string): boolean {
        return message.trim().slice(-1) === '?'
    }
    private isSilence(message: string): boolean {
        return message.trim().length === 0
    }
    hey(message: string): string {
        if (this.isYelling(message) && this.isQuestion(message)) {
            return 'Calm down, I know what I\'m doing!'
        }

        if (this.isYelling(message)) {
            return 'Whoa, chill out!'
        }

        if (this.isQuestion(message)) {
            return 'Sure.'
        }

        if (this.isSilence(message)) {
            return 'Fine. Be that way!'
        }

        return 'Whatever.'
    }
}

export default Bob