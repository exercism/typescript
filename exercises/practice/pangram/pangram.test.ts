import { isPangram } from './pangram'

describe('Pangram()', () => {
  it('empty sentence', () => {
    expect(isPangram('')).toBe(false)
  })

  xit('perfect lower case', () => {
    expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true)
  })

  xit('only lower case', () => {
    expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true)
  })

  xit("missing the letter 'x'", () => {
    expect(
      isPangram('a quick movement of the enemy will jeopardize five gunboats')
    ).toBe(false)
  })

  xit("missing the letter 'h'", () => {
    expect(isPangram('five boxing wizards jump quickly at it')).toBe(false)
  })

  xit('with underscores', () => {
    expect(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog')).toBe(true)
  })

  xit('with numbers', () => {
    expect(isPangram('the 1 quick brown fox jumps over the 2 lazy dogs')).toBe(
      true
    )
  })

  xit('missing letters replaced by numbers', () => {
    expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false)
  })

  xit('mixed case and punctuation', () => {
    expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true)
  })

  xit('a-m and A-M are 26 different characters but not a pangram', () => {
    expect(isPangram('abcdefghijklm ABCDEFGHIJKLM')).toBe(false)
  })
})
