import MatchingBrackets from './matching-brackets'

describe('Matching Brackets', () => {
    it('paired square brackets', () => {
        const matchingBrackets = new MatchingBrackets('[]')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })

    xit('empty string', () => {
        const matchingBrackets = new MatchingBrackets('')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })

    xit('unpaired brackets', () => {
        const matchingBrackets = new MatchingBrackets('[[')
        expect(matchingBrackets.isPaired()).toBeFalsy()
    })

    xit('wrong ordered brackets', () => {
        const matchingBrackets = new MatchingBrackets('}{')
        expect(matchingBrackets.isPaired()).toBeFalsy()
    })

    xit('wrong closing bracket', () => {
        const matchingBrackets = new MatchingBrackets('{]')
        expect(matchingBrackets.isPaired()).toBeFalsy()
    })

    xit('paired with whitespace', () => {
        const matchingBrackets = new MatchingBrackets('{ }')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })

    xit('simple nested brackets', () => {
        const matchingBrackets = new MatchingBrackets('{[]}')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })

    xit('several paired brackets', () => {
        const matchingBrackets = new MatchingBrackets('{}[]')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })

    xit('paired and nested brackets', () => {
        const matchingBrackets = new MatchingBrackets('([{}({}[])])')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })

    xit('unopened closing brackets', () => {
        const matchingBrackets = new MatchingBrackets('{[)][]}')
        expect(matchingBrackets.isPaired()).toBeFalsy()
    })

    xit('unpaired and nested brackets', () => {
        const matchingBrackets = new MatchingBrackets('([{])')
        expect(matchingBrackets.isPaired()).toBeFalsy()
    })

    xit('paired and wrong nested brackets', () => {
        const matchingBrackets = new MatchingBrackets('[({]})')
        expect(matchingBrackets.isPaired()).toBeFalsy()
    })

    xit('math expression', () => {
        const matchingBrackets = new MatchingBrackets('(((185 + 223.85) * 15) - 543)/2')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })

    xit('complex latex expression', () => {
        const matchingBrackets = new MatchingBrackets('\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)')
        expect(matchingBrackets.isPaired()).toBeTruthy()
    })
})
