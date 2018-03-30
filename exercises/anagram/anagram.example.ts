function sort(input: string): string {
    return input.toString().toLowerCase().split("").sort().join("")
}

class Anagram {
    value: string
    constructor(input: string) {
        this.value = input
    }

    matches(...input: string[]): string[] {
        const result: string[] = []
        for (const each of input) {
            if (sort(each) === sort(this.value)) {
                if (each.toLowerCase() === this.value.toLowerCase()) { continue }
                result.push(each)
            }
        }
        return result
    }
}

export default Anagram
