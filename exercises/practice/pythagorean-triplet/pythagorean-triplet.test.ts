import { triplets } from './pythagorean-triplet'

type Triplet = [number, number, number]

function tripletsWithSum(sum: number, options = {}): Triplet[] {
  return triplets({ ...options, sum }).map((triplet) =>
    triplet.toArray().sort((a, b) => a - b)
  )
}

describe('Triplet', () => {
  it('triplets whose sum is 12', () => {
    expect(tripletsWithSum(12)).toEqual([[3, 4, 5]])
  })

  xit('triplets whose sum is 108', () => {
    expect(tripletsWithSum(108)).toEqual([[27, 36, 45]])
  })

  xit('triplets whose sum is 1000', () => {
    expect(tripletsWithSum(1000)).toEqual([[200, 375, 425]])
  })

  xit('no matching triplets for 1001', () => {
    expect(tripletsWithSum(1001)).toEqual([])
  })

  xit('returns all matching triplets', () => {
    expect(tripletsWithSum(90)).toEqual([
      [9, 40, 41],
      [15, 36, 39],
    ])
  })

  xit('several matching triplets', () => {
    expect(tripletsWithSum(840)).toEqual([
      [40, 399, 401],
      [56, 390, 394],
      [105, 360, 375],
      [120, 350, 370],
      [140, 336, 364],
      [168, 315, 357],
      [210, 280, 350],
      [240, 252, 348],
    ])
  })

  xit('returns triplets with no factor smaller than minimum factor', () => {
    expect(tripletsWithSum(90, { minFactor: 10 })).toEqual([[15, 36, 39]])
  })

  xit('returns triplets with no factor larger than maximum factor', () => {
    expect(tripletsWithSum(840, { maxFactor: 349 })).toEqual([[240, 252, 348]])
  })

  xit('returns triplets with factors in range', () => {
    expect(tripletsWithSum(840, { maxFactor: 352, minFactor: 150 })).toEqual([
      [210, 280, 350],
      [240, 252, 348],
    ])
  })

  it.skip('triplets for large number', () => {
    expect(tripletsWithSum(30000)).toEqual([
      [1200, 14375, 14425],
      [1875, 14000, 14125],
      [5000, 12000, 13000],
      [6000, 11250, 12750],
      [7500, 10000, 12500],
    ])
  })
})
