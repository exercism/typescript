
function unified_random(): number {
    return Math.trunc(Math.random() * Number.MAX_SAFE_INTEGER)
}

function  generateRandomLetter(): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const letters = alphabet.split("")
    const randomIndex = unified_random() % letters.length
    return letters[randomIndex]
}

export default class RobotName {
    private _name: string
    private usedNames = new Set<string>()

    get name(): string {
        return this._name
    }

    constructor() {
       this.resetName()
    }
private generateName(): string {
    const numberPart = (unified_random() % 899) + 100
    let result = generateRandomLetter() + generateRandomLetter() + numberPart
    while (this.usedNames.has(result)) {
        result = generateRandomLetter() + generateRandomLetter() + (numberPart + 1)
    }
    this.usedNames.add(result)
    return result
}
    resetName() {
        this._name = this.generateName()
    }
}
