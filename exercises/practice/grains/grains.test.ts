import { square, total } from './grains'

describe('returns the number of grains on the square', () => {
  it('1', () => {
    const expected = 1n
    expect(square(1)).toEqual(expected)
  })

  xit('2', () => {
    const expected = 2n
    expect(square(2)).toEqual(expected)
  })

  xit('3', () => {
    const expected = 4n
    expect(square(3)).toEqual(expected)
  })

  xit('4', () => {
    const expected = 8n
    expect(square(4)).toEqual(expected)
  })

  xit('16', () => {
    const expected = 32768n
    expect(square(16)).toEqual(expected)
  })

  xit('32', () => {
    const expected = 2147483648n
    expect(square(32)).toEqual(expected)
  })

  xit('64', () => {
    const expected = 9223372036854775808n
    expect(square(64)).toEqual(expected)
  })

  xit('square 0 raises an exception', () => {
    expect(() => square(0)).toThrow()
  })

  xit('negative square raises an exception', () => {
    expect(() => square(-1)).toThrow()
  })

  xit('square greater than 64 raises an exception', () => {
    expect(() => square(65)).toThrow()
  })
})

describe('returns the total number of grains on the board', () => {
  xit('total', () => {
    const expected = 18446744073709551615n
    expect(total()).toEqual(expected)
  })
})
