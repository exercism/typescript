export const enum Category {
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXES,
  FULL_HOUSE,
  FOUR_OF_A_KIND,
  LITTLE_STRAIGHT,
  BIG_STRAIGHT,
  CHOICE,
  YACHT,
}

/**
 * multiplies the number of occurances of a specific value by that number
 */
const countSingles = (dice: number[], value: number): number =>
  value * dice.filter((d) => d === value).length

/**
 * sorts a list of numbers in numerically increasing order
 */
const sortNumbers = (dice: number[]): number[] => dice.toSorted((a, b) => a - b)

/**
 * build a mapping of the number of occurances of each die. For example. a full house of 1s and 6s will return `{1: 2, 6: 3}`
 */
const frequencies = (dice: number[]): Record<string, number> =>
  dice.reduce(
    (res, d) => ({
      ...res,
      [d]: (res[d] ?? 0) + 1,
    }),
    {} as Record<string, number>
  )

/**
 * sums a list of numbers
 */
const sum = (dice: number[]): number => dice.reduce((res, d) => d + res, 0)

/**
 * compares two list of numbers for equality
 */
const eq = (l: number[], r: number[]): boolean =>
  JSON.stringify(l) === JSON.stringify(r)

export const score = (dice: number[], category: Category): number => {
  switch (category) {
    case Category.ONES:
      return countSingles(dice, 1)
    case Category.TWOS:
      return countSingles(dice, 2)
    case Category.THREES:
      return countSingles(dice, 3)
    case Category.FOURS:
      return countSingles(dice, 4)
    case Category.FIVES:
      return countSingles(dice, 5)
    case Category.SIXES:
      return countSingles(dice, 6)
    case Category.FULL_HOUSE:
      return eq(sortNumbers(Object.values(frequencies(dice))), [2, 3])
        ? sum(dice)
        : 0
    case Category.FOUR_OF_A_KIND:
      return sum(
        Object.entries(frequencies(dice)).map(([d, count]) =>
          count >= 4 ? parseInt(d) * 4 : 0
        )
      )
    case Category.LITTLE_STRAIGHT:
      return eq(sortNumbers(dice), [1, 2, 3, 4, 5]) ? 30 : 0
    case Category.BIG_STRAIGHT:
      return eq(sortNumbers(dice), [2, 3, 4, 5, 6]) ? 30 : 0
    case Category.CHOICE:
      return sum(dice)
    case Category.YACHT:
      return new Set(dice).size === 1 ? 50 : 0
    default:
      throw new Error(`unhandled case: ${category}`)
  }
}
