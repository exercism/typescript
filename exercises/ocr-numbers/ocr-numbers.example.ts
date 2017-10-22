interface Patterns {
    [key: number]: string[]
}

const PATTERNS: Patterns = {
    0: [' _ ',
        '| |',
        '|_|',
        '   '],
    1: ['   ',
        '  |',
        '  |',
        '   '],
    2: [' _ ',
        ' _|',
        '|_ ',
        '   '],
    3: [' _ ',
        ' _|',
        ' _|',
        '   '],
    4: ['   ',
        '|_|',
        '  |',
        '   '],
    5: [' _ ',
        '|_ ',
        ' _|',
        '   '],
    6: [' _ ',
        '|_ ',
        '|_|',
        '   '],
    7: [' _ ',
        '  |',
        '  |',
        '   '],
    8: [' _ ',
        '|_|',
        '|_|',
        '   '],
    9: [' _ ',
        '|_|',
        ' _|',
        '   '],
}

export default class OcrParser {
    convert(text: string) {
        return OcrParser.splitIntoRows(text).map(OcrParser.valuesInRow).join(',')
    }

    static valuesInRow(row: string) {
        return OcrParser.splitIntoDigits(row).map(OcrParser.getDigit).join('')
    }

    static splitIntoRows(text: string) {
        const rows = []
        const lines = text.split('\n')
        for (let rowNumber = 0; rowNumber < lines.length; rowNumber += 4) {
            let row = ''
            for (let rowLine = 0; rowLine < 4; rowLine++) {
                row += `${lines[rowNumber + rowLine]}\n`
            }
            rows.push(row.slice(0, -1))
        }
        return rows
    }

    static splitIntoDigits(row: string) {
        const digits = [],
            rows = row.split('\n')
        for (let digitNumber = 0; digitNumber < rows[0].length; digitNumber += 3) {
            let digit = ''
            for (const row of rows) {
                digit += row.substr(digitNumber, 3)
            }
            digits.push(digit)
        }
        return digits
    }

    static getDigit(text: string) {
        for (const digit in PATTERNS) {
            if (PATTERNS[digit].join('') === text) {
                return digit
            }
        }
        return '?'
    }

}
