import { count } from './rectangles'

describe('Rectangles', () => {
  it('no rows', () => {
    const expected = 0
    const actual = count([])
    expect(actual).toEqual(expected)
  })

  xit('no columns', () => {
    const expected = 0
    const actual = count([''])
    expect(actual).toEqual(expected)
  })

  xit('no rectangles', () => {
    const expected = 0
    const actual = count([' '])
    expect(actual).toEqual(expected)
  })

  xit('one rectangle', () => {
    const expected = 1
    const actual = count(['+-+', '| |', '+-+'])
    expect(actual).toEqual(expected)
  })

  xit('two rectangles without shared parts', () => {
    const expected = 2
    const actual = count(['  +-+', '  | |', '+-+-+', '| |  ', '+-+  '])
    expect(actual).toEqual(expected)
  })

  xit('five rectangles with shared parts', () => {
    const expected = 5
    const actual = count(['  +-+', '  | |', '+-+-+', '| | |', '+-+-+'])
    expect(actual).toEqual(expected)
  })

  xit('rectangle of height 1 is counted', () => {
    const expected = 1
    const actual = count(['+--+', '+--+'])
    expect(actual).toEqual(expected)
  })

  xit('rectangle of width 1 is counted', () => {
    const expected = 1
    const actual = count(['++', '||', '++'])
    expect(actual).toEqual(expected)
  })

  xit('1x1 square is counted', () => {
    const expected = 1
    const actual = count(['++', '++'])
    expect(actual).toEqual(expected)
  })

  xit('only complete rectangles are counted', () => {
    const expected = 1
    const actual = count(['  +-+', '    |', '+-+-+', '| | -', '+-+-+'])
    expect(actual).toEqual(expected)
  })

  xit('rectangles can be of different sizes', () => {
    const expected = 3
    const actual = count([
      '+------+----+',
      '|      |    |',
      '+---+--+    |',
      '|   |       |',
      '+---+-------+',
    ])
    expect(actual).toEqual(expected)
  })

  xit('corner is required for a rectangle to be complete', () => {
    const expected = 2
    const actual = count([
      '+------+----+',
      '|      |    |',
      '+------+    |',
      '|   |       |',
      '+---+-------+',
    ])
    expect(actual).toEqual(expected)
  })

  xit('large input with many rectangles', () => {
    const expected = 60
    const actual = count([
      '+---+--+----+',
      '|   +--+----+',
      '+---+--+    |',
      '|   +--+----+',
      '+---+--+--+-+',
      '+---+--+--+-+',
      '+------+  | |',
      '          +-+',
    ])
    expect(actual).toEqual(expected)
  })
})
