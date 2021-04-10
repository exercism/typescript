import { convert } from './raindrops'

describe('Raindrops', () => {
  it('converts 1', () => expect(convert(1)).toEqual('1'))

  xit('converts 3', () => expect(convert(3)).toEqual('Pling'))

  xit('converts 5', () => expect(convert(5)).toEqual('Plang'))

  xit('converts 7', () => expect(convert(7)).toEqual('Plong'))

  xit('converts 6', () => expect(convert(6)).toEqual('Pling'))

  xit('converts 9', () => expect(convert(9)).toEqual('Pling'))

  xit('converts 10', () => expect(convert(10)).toEqual('Plang'))

  xit('converts 14', () => expect(convert(14)).toEqual('Plong'))

  xit('converts 15', () => expect(convert(15)).toEqual('PlingPlang'))

  xit('converts 21', () => expect(convert(21)).toEqual('PlingPlong'))

  xit('converts 25', () => expect(convert(25)).toEqual('Plang'))

  xit('converts 35', () => expect(convert(35)).toEqual('PlangPlong'))

  xit('converts 49', () => expect(convert(49)).toEqual('Plong'))

  xit('converts 52', () => expect(convert(52)).toEqual('52'))

  xit('converts 105', () => expect(convert(105)).toEqual('PlingPlangPlong'))

  xit('converts 12121', () => expect(convert(12121)).toEqual('12121'))
})
