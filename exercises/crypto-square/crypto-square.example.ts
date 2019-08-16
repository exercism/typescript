export default class Square {
    input: string

    constructor(input: string) {
        this.input = input
    }

    normalizePlaintext(): string {
        return this.input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    }

    size() {
        const realLength = Math.sqrt(this.normalizePlaintext().length)
        return Math.ceil(realLength)
    }

    plaintextSegments() {
        const plainText = this.normalizePlaintext()
        const chunkSize = this.size()

        const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g')
        return plainText.match(splitRegex)
    }

    ciphertext() {
        const textSegments = this.plaintextSegments()
        let i
        let j
        // tslint:disable-next-line: no-any
        const columns: any[] = []
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

        for (i = 0; i < columns.length; i++) {
            columns[i] = columns[i].join('')
        }

        return columns.join('')
    }

    normalizeCiphertext() {
        const chunkSize = this.size()
        const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g')
        return this.ciphertext().match(splitRegex)!.join(' ')
    }
}
