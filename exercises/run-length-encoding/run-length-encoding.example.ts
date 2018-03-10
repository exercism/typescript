class RunLengthEncoding {
    static encode(plaintext: string): string {
        return plaintext.replace(/([\w\s])\1*/g, (match) => {
            return match.length > 1 ? match.length + match[0] : match[0]
        })
    }

    static decode(cypher: string): string {
        return cypher.replace(/(\d+)(\w|\s)/g, (_match, repeats, char) => {
            return new Array(+repeats + 1).join(char)
        })
    }
}

export default RunLengthEncoding
