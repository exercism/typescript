import { describe, expect, it, xit } from '@jest/globals'
import { Category, score } from './yacht.ts'

describe('Yacht', () => {
  it('Yacht', () => {
    expect(score([5, 5, 5, 5, 5], Category.YACHT)).toEqual(50)
  })

  xit('Not Yacht', () => {
    expect(score([1, 3, 3, 2, 5], Category.YACHT)).toEqual(0)
  })

  xit('Ones', () => {
    expect(score([1, 1, 1, 3, 5], Category.ONES)).toEqual(3)
  })

  xit('Ones, out of order', () => {
    expect(score([3, 1, 1, 5, 1], Category.ONES)).toEqual(3)
  })

  xit('No ones', () => {
    expect(score([4, 3, 6, 5, 5], Category.ONES)).toEqual(0)
  })

  xit('Twos', () => {
    expect(score([2, 3, 4, 5, 6], Category.TWOS)).toEqual(2)
  })

  xit('Fours', () => {
    expect(score([1, 4, 1, 4, 1], Category.FOURS)).toEqual(8)
  })

  xit('Yacht counted as threes', () => {
    expect(score([3, 3, 3, 3, 3], Category.THREES)).toEqual(15)
  })

  xit('Yacht of 3s counted as fives', () => {
    expect(score([3, 3, 3, 3, 3], Category.FIVES)).toEqual(0)
  })

  xit('Fives', () => {
    expect(score([1, 5, 3, 5, 3], Category.FIVES)).toEqual(10)
  })

  xit('Sixes', () => {
    expect(score([2, 3, 4, 5, 6], Category.SIXES)).toEqual(6)
  })

  xit('Full house two small, three big', () => {
    expect(score([2, 2, 4, 4, 4], Category.FULL_HOUSE)).toEqual(16)
  })

  xit('Full house three small, two big', () => {
    expect(score([5, 3, 3, 5, 3], Category.FULL_HOUSE)).toEqual(19)
  })

  xit('Two pair is not a full house', () => {
    expect(score([2, 2, 4, 4, 5], Category.FULL_HOUSE)).toEqual(0)
  })

  xit('Four of a kind is not a full house', () => {
    expect(score([1, 4, 4, 4, 4], Category.FULL_HOUSE)).toEqual(0)
  })

  xit('Yacht is not a full house', () => {
    expect(score([2, 2, 2, 2, 2], Category.FULL_HOUSE)).toEqual(0)
  })

  xit('Four of a Kind', () => {
    expect(score([6, 6, 4, 6, 6], Category.FOUR_OF_A_KIND)).toEqual(24)
  })

  xit('Yacht can be scored as Four of a Kind', () => {
    expect(score([3, 3, 3, 3, 3], Category.FOUR_OF_A_KIND)).toEqual(12)
  })

  xit('Full house is not Four of a Kind', () => {
    expect(score([3, 3, 3, 5, 5], Category.FOUR_OF_A_KIND)).toEqual(0)
  })

  xit('Little Straight', () => {
    expect(score([3, 5, 4, 1, 2], Category.LITTLE_STRAIGHT)).toEqual(30)
  })

  xit('Little Straight as Big Straight', () => {
    expect(score([1, 2, 3, 4, 5], Category.BIG_STRAIGHT)).toEqual(0)
  })

  xit('Four in order but not a little straight', () => {
    expect(score([1, 1, 2, 3, 4], Category.LITTLE_STRAIGHT)).toEqual(0)
  })

  xit('No pairs but not a little straight', () => {
    expect(score([1, 2, 3, 4, 6], Category.LITTLE_STRAIGHT)).toEqual(0)
  })

  xit('Minimum is 1, maximum is 5, but not a little straight', () => {
    expect(score([1, 1, 3, 4, 5], Category.LITTLE_STRAIGHT)).toEqual(0)
  })

  xit('Big Straight', () => {
    expect(score([4, 6, 2, 5, 3], Category.BIG_STRAIGHT)).toEqual(30)
  })

  xit('Big Straight as little straight', () => {
    expect(score([6, 5, 4, 3, 2], Category.LITTLE_STRAIGHT)).toEqual(0)
  })

  xit('No pairs but not a big straight', () => {
    expect(score([6, 5, 4, 3, 1], Category.BIG_STRAIGHT)).toEqual(0)
  })

  xit('Choice', () => {
    expect(score([3, 3, 5, 6, 6], Category.CHOICE)).toEqual(23)
  })

  xit('Yacht as choice', () => {
    expect(score([2, 2, 2, 2, 2], Category.CHOICE)).toEqual(10)
  })
})
