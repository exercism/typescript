import generate from './palindrome-products'

describe('Palindrome', () => {
    it('largest palindrome from single digit factors', () => {
        const palindromes = generate({ maxFactor: 9 })
        const largest = palindromes.largest

        expect(largest.value).toEqual(9)
        expect(largest.factors).toHaveLength(2)
        expect(largest.factors).toContainArray([3, 3])
        expect(largest.factors).toContainArray([1, 9])
    })

    xit('largest palindrome from double digit factors', () => {
        const palindromes = generate({ maxFactor: 99, minFactor: 10 })
        const largest = palindromes.largest

        expect(largest.value).toEqual(9009)
        expect(largest.factors).toHaveLength(1)
        expect(largest.factors).toContainArray([91, 99])
    })

    xit('smallest palindrome from double digit factors', () => {
        const palindromes = generate({ maxFactor: 99, minFactor: 10 })
        const smallest = palindromes.smallest

        expect(smallest.value).toEqual(121)
        expect(smallest.factors).toHaveLength(1)
        expect(smallest.factors).toContainArray([11, 11])
    })

    xit('largest palindrome from triple digit factors', () => {
        const palindromes = generate({ maxFactor: 999, minFactor: 100 })
        const largest = palindromes.largest

        expect(largest.value).toEqual(906609)
        expect(largest.factors).toHaveLength(1)
        expect(largest.factors).toContainArray([913, 993])
    })

    xit('smallest palindrome from triple digit factors', () => {
        const palindromes = generate({ maxFactor: 999, minFactor: 100 })
        const smallest = palindromes.smallest

        expect(smallest.value).toEqual(10201)
        expect(smallest.factors).toHaveLength(1)
        expect(smallest.factors).toContainArray([101, 101])
    })
})

expect.extend({
    toContainArray(received: number[][], argument) {
        const pass = received.some((el) => numericalArraysMatch(el, argument))
        return {
            pass,
            message: () => `expected ${JSON.stringify(received)} ${pass ? 'not ' : ''}to contain ${JSON.stringify(argument)}`
        }
    }
})

function numericalArraysMatch(a: number[], b: number[]) {
    if (a.length !== b.length) {
        return false
    }
    const one = [...a].sort(numericalSort)
    const two = [...b].sort(numericalSort)
    let result = true
    let index = 0
    while (index < one.length) {
        result = result && one[index] === two[index]
        index++
    }
    return result
}

function numericalSort(x: number, y: number) {
    if (x < y) {
        return -1
    }
    if (x > y) {
        return 1
    }
    return 0
}
