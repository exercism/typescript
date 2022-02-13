import { decodedValue } from './resistor-color-duo'

describe('Resistor Colors', () => {
  it('Brown and black', () => {
    expect(decodedValue(['brown', 'black'])).toEqual(10)
  })

  xit('Blue and grey', () => {
    expect(decodedValue(['blue', 'grey'])).toEqual(68)
  })

  xit('Yellow and violet', () => {
    expect(decodedValue(['yellow', 'violet'])).toEqual(47)
  })

  xit('Orange and orange', () => {
    expect(decodedValue(['orange', 'orange'])).toEqual(33)
  })

  xit('Ignore additional colors', () => {
    expect(decodedValue(['green', 'brown', 'orange'])).toEqual(51)
  })
})
