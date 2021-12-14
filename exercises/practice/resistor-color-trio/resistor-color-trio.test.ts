import { decodedResistorValue } from './resistor-color-trio'

describe('Resistor Colors', () => {
  test('Orange and orange and black', () => {
    expect(decodedResistorValue(['orange', 'orange', 'black'])).toEqual(
      '33 ohms'
    )
  })

  xtest('Blue and grey and brown', () => {
    expect(decodedResistorValue(['blue', 'grey', 'brown'])).toEqual('680 ohms')
  })

  xtest('Red and black and red', () => {
    expect(decodedResistorValue(['red', 'black', 'red'])).toEqual('2 kiloohms')
  })

  xtest('Green and brown and orange', () => {
    expect(decodedResistorValue(['green', 'brown', 'orange'])).toEqual(
      '51 kiloohms'
    )
  })

  xtest('Yellow and violet and yellow', () => {
    expect(decodedResistorValue(['yellow', 'violet', 'yellow'])).toEqual(
      '470 kiloohms'
    )
  })
})
