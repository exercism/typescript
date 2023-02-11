import { decodedValue } from './resistor-color-duo'

describe('Resistor Colors', () => {
  it('Brown and black', () => {
    expect(decodedValue(['brown', 'black'])).toEqual(10)
  })

  xit('Blue and grey', () => {
    expect(decodedValue(['blue', 'grey'])).toEqual(68)
  })

  xit('White and red', () => {
    expect(decodedValue(['white', 'red'])).toEqual(92)
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

  xit('Black and brown, one-digit', () => {
    expect(decodedValue(['black', 'brown'])).toEqual(1)
  })
})
