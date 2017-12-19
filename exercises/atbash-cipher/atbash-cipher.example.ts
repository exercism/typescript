class AtbashCipher {
    private alphabet: string = "abcdefghijklmnopqrstuvwxyz"
    private numbers: string = "0123456789"

    public encode(plainText: string) {
        const lowerCaseLettersOnly = plainText
            .toLowerCase()
            .split("")
            .filter((char) => this.alphabet.includes(char) || this.numbers.includes(char))
            .join("")

        return this.decode(lowerCaseLettersOnly)
            .split("")
            .reduce((accumulator: string[], _, index, array) => {
                if (index % 5 === 0) {
                    accumulator.push(array.slice(index, index + 5).join(""))
                }
                return accumulator
            }, [])
            .join(" ")
    }

    public decode(cipherText: string) {
        return cipherText
            .split(" ").join("")
            .split("")
            .map((char) => this.alphabet.includes(char) ? this.alphabet[25 - this.alphabet.indexOf(char)] : char)
            .join("")
    }
}

export default AtbashCipher
