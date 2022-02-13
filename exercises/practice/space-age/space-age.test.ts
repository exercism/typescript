import { age } from './space-age'

describe('Space Age', () => {
  it('age on Earth', () => {
    expect(age('earth', 1000000000)).toEqual(31.69)
  })

  xit('age on Mercury', () => {
    expect(age('mercury', 2134835688)).toEqual(280.88)
  })

  xit('age on Venus', () => {
    expect(age('venus', 189839836)).toEqual(9.78)
  })

  xit('age on Mars', () => {
    expect(age('mars', 2129871239)).toEqual(35.88)
  })

  xit('age on Jupiter', () => {
    expect(age('jupiter', 901876382)).toEqual(2.41)
  })

  xit('age on Saturn', () => {
    expect(age('saturn', 2000000000)).toEqual(2.15)
  })

  xit('age on Uranus', () => {
    expect(age('uranus', 1210123456)).toEqual(0.46)
  })

  xit('age on Neptune', () => {
    expect(age('neptune', 1821023456)).toEqual(0.35)
  })
})
