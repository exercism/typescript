import { bestHands } from './poker'
import { describe, expect, it, xit } from '@jest/globals'

describe('Poker', () => {
  it('single hand always wins', () => {
    expect(bestHands(['4S 5S 7H 8D JC'])).toEqual(['4S 5S 7H 8D JC'])
  })

  xit('highest card out of all hands wins', () => {
    expect(
      bestHands(['4D 5S 6S 8D 3C', '2S 4C 7S 9H 10H', '3S 4S 5D 6H JH'])
    ).toEqual(['3S 4S 5D 6H JH'])
  })

  xit('a tie has multiple winners', () => {
    expect(
      bestHands([
        '4D 5S 6S 8D 3C',
        '2S 4C 7S 9H 10H',
        '3S 4S 5D 6H JH',
        '3H 4H 5C 6C JD',
      ])
    ).toEqual(['3S 4S 5D 6H JH', '3H 4H 5C 6C JD'])
  })

  xit('multiple hands with the same high cards, tie compares next highest ranked, down to last card', () => {
    expect(bestHands(['3S 5H 6S 8D 7H', '2S 5D 6D 8C 7S'])).toEqual([
      '3S 5H 6S 8D 7H',
    ])
  })

  xit('winning high card hand also has the lowest card', () => {
    expect(bestHands(['2S 5H 6S 8D 7H', '3S 4D 6D 8C 7S'])).toEqual([
      '2S 5H 6S 8D 7H',
    ])
  })

  xit('one pair beats high card', () => {
    expect(bestHands(['4S 5H 6C 8D KH', '2S 4H 6S 4D JH'])).toEqual([
      '2S 4H 6S 4D JH',
    ])
  })

  xit('highest pair wins', () => {
    expect(bestHands(['4S 2H 6S 2D JH', '2S 4H 6C 4D JD'])).toEqual([
      '2S 4H 6C 4D JD',
    ])
  })

  xit('both hands have the same pair, high card wins', () => {
    expect(bestHands(['4H 4S AH JC 3D', '4C 4D AS 5D 6C'])).toEqual([
      '4H 4S AH JC 3D',
    ])
  })

  xit('two pairs beats one pair', () => {
    expect(bestHands(['2S 8H 6S 8D JH', '4S 5H 4C 8C 5C'])).toEqual([
      '4S 5H 4C 8C 5C',
    ])
  })

  xit('both hands have two pairs, highest ranked pair wins', () => {
    expect(bestHands(['2S 8H 2D 8D 3H', '4S 5H 4C 8S 5D'])).toEqual([
      '2S 8H 2D 8D 3H',
    ])
  })

  xit('both hands have two pairs, with the same highest ranked pair, tie goes to low pair', () => {
    expect(bestHands(['2S QS 2C QD JH', 'JD QH JS 8D QC'])).toEqual([
      'JD QH JS 8D QC',
    ])
  })

  xit('both hands have two identically ranked pairs, tie goes to remaining card (kicker)', () => {
    expect(bestHands(['JD QH JS 8D QC', 'JS QS JC 2D QD'])).toEqual([
      'JD QH JS 8D QC',
    ])
  })

  xit('both hands have two pairs that add to the same value, win goes to highest pair', () => {
    expect(bestHands(['6S 6H 3S 3H AS', '7H 7S 2H 2S AC'])).toEqual([
      '7H 7S 2H 2S AC',
    ])
  })

  xit('two pairs first ranked by largest pair', () => {
    expect(bestHands(['5C 2S 5S 4H 4C', '6S 2S 6H 7C 2C'])).toEqual([
      '6S 2S 6H 7C 2C',
    ])
  })

  xit('three of a kind beats two pair', () => {
    expect(bestHands(['2S 8H 2H 8D JH', '4S 5H 4C 8S 4H'])).toEqual([
      '4S 5H 4C 8S 4H',
    ])
  })

  xit('both hands have three of a kind, tie goes to highest ranked triplet', () => {
    expect(bestHands(['2S 2H 2C 8D JH', '4S AH AS 8C AD'])).toEqual([
      '4S AH AS 8C AD',
    ])
  })

  xit('with multiple decks, two players can have same three of a kind, ties go to highest remaining cards', () => {
    expect(bestHands(['5S AH AS 7C AD', '4S AH AS 8C AD'])).toEqual([
      '4S AH AS 8C AD',
    ])
  })

  xit('a straight beats three of a kind', () => {
    expect(bestHands(['4S 5H 4C 8D 4H', '3S 4D 2S 6D 5C'])).toEqual([
      '3S 4D 2S 6D 5C',
    ])
  })

  xit('aces can end a straight (10 J Q K A)', () => {
    expect(bestHands(['4S 5H 4C 8D 4H', '10D JH QS KD AC'])).toEqual([
      '10D JH QS KD AC',
    ])
  })

  xit('aces can start a straight (A 2 3 4 5)', () => {
    expect(bestHands(['4S 5H 4C 8D 4H', '4D AH 3S 2D 5C'])).toEqual([
      '4D AH 3S 2D 5C',
    ])
  })

  xit('aces cannot be in the middle of a straight (Q K A 2 3)', () => {
    expect(bestHands(['2C 3D 7H 5H 2S', 'QS KH AC 2D 3S'])).toEqual([
      '2C 3D 7H 5H 2S',
    ])
  })

  xit('both hands with a straight, tie goes to highest ranked card', () => {
    expect(bestHands(['4S 6C 7S 8D 5H', '5S 7H 8S 9D 6H'])).toEqual([
      '5S 7H 8S 9D 6H',
    ])
  })

  xit('even though an ace is usually high, a 5-high straight is the lowest-scoring straight', () => {
    expect(bestHands(['2H 3C 4D 5D 6H', '4S AH 3S 2D 5H'])).toEqual([
      '2H 3C 4D 5D 6H',
    ])
  })

  xit('flush beats a straight', () => {
    expect(bestHands(['4C 6H 7D 8D 5H', '2S 4S 5S 6S 7S'])).toEqual([
      '2S 4S 5S 6S 7S',
    ])
  })

  xit('both hands have a flush, tie goes to high card, down to the last one if necessary', () => {
    expect(bestHands(['4H 7H 8H 9H 6H', '2S 4S 5S 6S 7S'])).toEqual([
      '4H 7H 8H 9H 6H',
    ])
  })

  xit('both hands have a flush, tie goes to high card, down to the last one if necessary', () => {
    expect(bestHands(['2H 7H 8H 9H 6H', '3S 5S 6S 7S 8S'])).toEqual([
      '2H 7H 8H 9H 6H',
    ])
  })

  xit('full house beats a flush', () => {
    expect(bestHands(['3H 6H 7H 8H 5H', '4S 5H 4C 5D 4H'])).toEqual([
      '4S 5H 4C 5D 4H',
    ])
  })

  xit('both hands have a full house, tie goes to highest-ranked triplet', () => {
    expect(bestHands(['4H 4S 4D 9S 9D', '5H 5S 5D 8S 8D'])).toEqual([
      '5H 5S 5D 8S 8D',
    ])
  })

  xit('with multiple decks, both hands have a full house with the same triplet, tie goes to the pair', () => {
    expect(bestHands(['5H 5S 5D 9S 9D', '5H 5S 5D 8S 8D'])).toEqual([
      '5H 5S 5D 9S 9D',
    ])
  })

  xit('four of a kind beats a full house', () => {
    expect(bestHands(['4S 5H 4D 5D 4H', '3S 3H 2S 3D 3C'])).toEqual([
      '3S 3H 2S 3D 3C',
    ])
  })

  xit('both hands have four of a kind, tie goes to high quad', () => {
    expect(bestHands(['2S 2H 2C 8D 2D', '4S 5H 5S 5D 5C'])).toEqual([
      '4S 5H 5S 5D 5C',
    ])
  })

  xit('with multiple decks, both hands with identical four of a kind, tie determined by kicker', () => {
    expect(bestHands(['3S 3H 2S 3D 3C', '3S 3H 4S 3D 3C'])).toEqual([
      '3S 3H 4S 3D 3C',
    ])
  })

  xit('straight flush beats four of a kind', () => {
    expect(bestHands(['4S 5H 5S 5D 5C', '7S 8S 9S 6S 10S'])).toEqual([
      '7S 8S 9S 6S 10S',
    ])
  })

  xit('aces can end a straight flush (10 J Q K A)', () => {
    expect(bestHands(['KC AH AS AD AC', '10C JC QC KC AC'])).toEqual([
      '10C JC QC KC AC',
    ])
  })

  xit('aces can start a straight flush (A 2 3 4 5)', () => {
    expect(bestHands(['KS AH AS AD AC', '4H AH 3H 2H 5H'])).toEqual([
      '4H AH 3H 2H 5H',
    ])
  })

  xit('aces cannot be in the middle of a straight flush (Q K A 2 3)', () => {
    expect(bestHands(['2C AC QC 10C KC', 'QH KH AH 2H 3H'])).toEqual([
      '2C AC QC 10C KC',
    ])
  })

  xit('both hands have a straight flush, tie goes to highest-ranked card', () => {
    expect(bestHands(['4H 6H 7H 8H 5H', '5S 7S 8S 9S 6S'])).toEqual([
      '5S 7S 8S 9S 6S',
    ])
  })

  xit('even though an ace is usually high, a 5-high straight flush is the lowest-scoring straight flush', () => {
    expect(bestHands(['2H 3H 4H 5H 6H', '4D AD 3D 2D 5D'])).toEqual([
      '2H 3H 4H 5H 6H',
    ])
  })
})
