import accumulate from './accumulate'

describe('accumulate()', () => {
  it('accumulation empty', () => {
    const accumulator = (e: number): number => e * e
    expect(accumulate([], accumulator)).toEqual([])
  })

  it('accumulate squares', () => {
    const accumulator = (n: number): number => n * n
    const result = accumulate([1, 2, 3], accumulator)
    expect(result).toEqual([1, 4, 9])
  })

  it('accumulate upcases', () => {
    const accumulator = (word: string): string => word.toUpperCase()
    const result = accumulate('hello world'.split(/\s/), accumulator)
    expect(result).toEqual(['HELLO', 'WORLD'])
  })

  it('accumulate reversed strings', () => {
    const accumulator = (word: string): string => word.split('').reverse().join('')
    const result = accumulate('the quick brown fox etc'.split(/\s/), accumulator)
    expect(result).toEqual(['eht', 'kciuq', 'nworb', 'xof', 'cte'])
  })

  it('accumulate recursively', () => {
    const result = accumulate('a b c'.split(/\s/), (char: string) => accumulate('1 2 3'.split(/\s/), (digit: string) => char + digit))

    expect(result).toEqual([['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']])
  })
})
