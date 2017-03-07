
function transform(input: {[key: string]: string[]}): {[key: string]: number} {
    const phase1: {[key: string]: number} = {}

    for ( const key in input) {
        if (input.hasOwnProperty(key)) {
            const value = input[key]
            for (const each of value) {
                phase1[each.toLowerCase()] = Number.parseInt(key, 10)
            }
        }
    }
    return phase1
}

export default transform
