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
})
