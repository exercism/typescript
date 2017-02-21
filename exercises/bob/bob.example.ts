class Bob {

    private isNullOrWhitespace( input: string ): boolean {
    if (typeof input === 'undefined' || input === undefined ) { return true }
    return input.replace(/\s/g, '').length < 1
}

    hey(inputRaw: string): string {
        const input = inputRaw.trim()
        if (this.isNullOrWhitespace(input)) {
            return "Fine. Be that way!"
        }
        if ( !(input.toLowerCase() === input) &&
            (input.toUpperCase() === input)) {
            return "Whoa, chill out!"
        }

        if ( input.endsWith("?")) { return "Sure." }

        return "Whatever."
        }
    }

export default Bob
