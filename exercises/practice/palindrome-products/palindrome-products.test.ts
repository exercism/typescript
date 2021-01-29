import generate from './palindrome-products'

describe('Palindrome', () => {
  it('largest palindrome from single digit factors', () => {
    const palindromes = generate({ maxFactor: 9 })
    const largest = palindromes.largest

    expect(largest.value).toEqual(9)
    expect(largest.factors).toHaveLength(2)
    expect(sort2dArray(largest.factors)).toEqual([
      [1, 9],
      [3, 3],
    ])
  })

  xit('largest palindrome from double digit factors', () => {
    const palindromes = generate({ maxFactor: 99, minFactor: 10 })
    const largest = palindromes.largest

    expect(largest.value).toEqual(9009)
    expect(sort2dArray(largest.factors)).toEqual([[91, 99]])
  })

  xit('smallest palindrome from double digit factors', () => {
    const palindromes = generate({ maxFactor: 99, minFactor: 10 })
    const smallest = palindromes.smallest

    expect(smallest.value).toEqual(121)
    expect(sort2dArray(smallest.factors)).toEqual([[11, 11]])
  })

  xit('largest palindrome from triple digit factors', () => {
    const palindromes = generate({ maxFactor: 999, minFactor: 100 })
    const largest = palindromes.largest

    expect(largest.value).toEqual(906609)
    expect(sort2dArray(largest.factors)).toEqual([[913, 993]])
  })

  xit('smallest palindrome from triple digit factors', () => {
    const palindromes = generate({ maxFactor: 999, minFactor: 100 })
    const smallest = palindromes.smallest

    expect(smallest.value).toEqual(10201)
    expect(sort2dArray(smallest.factors)).toEqual([[101, 101]])
  })
})

// This conversion may seem a bit convoluted, but it allows a broader set of solutions
// and it helps by being a bit more specific about what values were expected.
function sort2dArray<T>(input: T[][]): number[][] {
  return Array.from(input)
    .map((subArray: T[]): number[] =>
      Array.from(subArray)
        .map((el) => Number(el))
        .sort()
    )
    .sort()
}
