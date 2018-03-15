import BracketPush from './bracket-push'

describe('Bracket Push', () => {
    it('paired square brackets', () => {
        const bracketPush = new BracketPush('[]')
        expect(bracketPush.isPaired()).toBeTruthy()
    })

    xit('empty string', () => {
        const bracketPush = new BracketPush('')
        expect(bracketPush.isPaired()).toBeTruthy()
    })

    xit('unpaired brackets', () => {
        const bracketPush = new BracketPush('[[')
        expect(bracketPush.isPaired()).toBeFalsy()
    })

    xit('wrong ordered brackets', () => {
        const bracketPush = new BracketPush('}{')
        expect(bracketPush.isPaired()).toBeFalsy()
    })

    xit('wrong closing bracket', () => {
        const bracketPush = new BracketPush('{]')
        expect(bracketPush.isPaired()).toBeFalsy()
    })

    xit('paired with whitespace', () => {
        const bracketPush = new BracketPush('{ }')
        expect(bracketPush.isPaired()).toBeTruthy()
    })

    xit('simple nested brackets', () => {
        const bracketPush = new BracketPush('{[]}')
        expect(bracketPush.isPaired()).toBeTruthy()
    })

    xit('several paired brackets', () => {
        const bracketPush = new BracketPush('{}[]')
        expect(bracketPush.isPaired()).toBeTruthy()
    })

    xit('paired and nested brackets', () => {
        const bracketPush = new BracketPush('([{}({}[])])')
        expect(bracketPush.isPaired()).toBeTruthy()
    })

    xit('unopened closing brackets', () => {
        const bracketPush = new BracketPush('{[)][]}')
        expect(bracketPush.isPaired()).toBeFalsy()
    })

    xit('unpaired and nested brackets', () => {
        const bracketPush = new BracketPush('([{])')
        expect(bracketPush.isPaired()).toBeFalsy()
    })

    xit('paired and wrong nested brackets', () => {
        const bracketPush = new BracketPush('[({]})')
        expect(bracketPush.isPaired()).toBeFalsy()
    })

    xit('math expression', () => {
        const bracketPush = new BracketPush('(((185 + 223.85) * 15) - 543)/2')
        expect(bracketPush.isPaired()).toBeTruthy()
    })

    xit('complex latex expression', () => {
        const bracketPush = new BracketPush('\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)')
        expect(bracketPush.isPaired()).toBeTruthy()
    })
})
