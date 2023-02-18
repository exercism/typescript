import { decodedResistorValue } from './resistor-color-trio'

describe('Resistor Colors', () => {
  it('Orange and orange and black', () => {
    expect(decodedResistorValue(['orange', 'orange', 'black'])).toEqual(
      '33 ohms'
    )
  })

  xit('Blue and grey and brown', () => {
    expect(decodedResistorValue(['blue', 'grey', 'brown'])).toEqual('680 ohms')
  })

  xit('Red and black and red', () => {
    expect(decodedResistorValue(['red', 'black', 'red'])).toEqual('2 kiloohms')
  })

  xit('Green and brown and orange', () => {
    expect(decodedResistorValue(['green', 'brown', 'orange'])).toEqual(
      '51 kiloohms'
    )
  })

  xit('Yellow and violet and yellow', () => {
    expect(decodedResistorValue(['yellow', 'violet', 'yellow'])).toEqual(
      '470 kiloohms'
    )
  })

  xit('Blue and violet and blue', () => {
    expect(decodedResistorValue(['blue', 'violet', 'blue'])).toEqual(
      '67 megaohms'
    )
  })

  xit('Minimum possible value', () => {
    expect(decodedResistorValue(['black', 'black', 'black'])).toEqual('0 ohms')
  })

  xit('Maximum possible value', () => {
    expect(decodedResistorValue(['white', 'white', 'white'])).toEqual(
      '99 gigaohms'
    )
  })

  xit('First two colors make an invalid octal number', () => {
    expect(decodedResistorValue(['black', 'grey', 'black'])).toEqual('8 ohms')
  })

  xit('Ignore extra colors', () => {
    expect(decodedResistorValue(['blue', 'green', 'yellow', 'orange'])).toEqual(
      '650 kiloohms'
    )
  })
})
