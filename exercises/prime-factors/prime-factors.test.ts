import calculatePrimeFactors from './prime-factors'

describe('calculatePrimeFactors', () => {
  test('returns an empty array for 1', () => expect(calculatePrimeFactors(1)).toEqual([]))

  xtest('factors 2', () => expect(calculatePrimeFactors(2)).toEqual([2]))

  xtest('factors 3', () => expect(calculatePrimeFactors(3)).toEqual([3]))

  xtest('factors 4', () => expect(calculatePrimeFactors(4)).toEqual([2, 2]))

  xtest('factors 6', () => expect(calculatePrimeFactors(6)).toEqual([2, 3]))

  xtest('factors 8', () => expect(calculatePrimeFactors(8)).toEqual([2, 2, 2]))

  xtest('factors 9', () => expect(calculatePrimeFactors(9)).toEqual([3, 3]))

  xtest('factors 27', () => expect(calculatePrimeFactors(27)).toEqual([3, 3, 3]))

  xtest('factors 625', () => expect(calculatePrimeFactors(625)).toEqual([5, 5, 5, 5]))

  xtest('factors 901255', () => expect(calculatePrimeFactors(901255)).toEqual([5, 17, 23, 461]))

  xtest('factors 93819012551', () => expect(calculatePrimeFactors(93819012551)).toEqual([11, 9539, 894119]))
})