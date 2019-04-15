class MatchingBrackets {
    bracketPairs: Map<string, string>
    expression: string

    constructor(expression: string) {
        this.bracketPairs = new Map<string, string>()
        this.bracketPairs.set('{', '}')
        this.bracketPairs.set('[', ']')
        this.bracketPairs.set('(', ')')

        this.expression = expression
    }

    isPaired(): boolean {
        const bracketStack: string[] = []
        const expressionSplitted = this.expression.split('')

        for (let i = 0; i <= expressionSplitted.length - 1; i++) {
            const element = expressionSplitted[i]

            if (this.isOpeningBracket(element)) {
                bracketStack.push(element)
            } else if (this.isClosingBracket(element)) {
                if (bracketStack === []) {
                    return false
                }

                if (this.bracketPairs.get(String(bracketStack.pop())) !== element) {
                    return false
                }
            }
        }

        return bracketStack.length === 0
    }

    private isOpeningBracket(bracket: string): boolean {
        return this.bracketPairs.has(bracket)
    }

    private isClosingBracket(bracket: string): boolean {
        if (bracket === '}' || bracket === ']' || bracket === ')') {
            return true
        } else {
            return false
        }
    }
}

export default MatchingBrackets
