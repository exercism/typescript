import SpaceAge from './space-age'

describe('Space Age', () => {

  it('age in seconds', () => {
    const age = new SpaceAge(1000000)
    expect(age.seconds).toEqual(1000000)
  })

  xit('age in earth years', () => {
    const age = new SpaceAge(1000000000)
    expect(age.onEarth()).toBeCloseTo(31.69)
  })

  xit('age in mercury years', () => {
    const age = new SpaceAge(2134835688)
    expect(age.onEarth()).toBeCloseTo(67.65)
    expect(age.onMercury()).toBeCloseTo(280.88)
  })

  xit('age in venus years', () => {
    const age = new SpaceAge(189839836)
    expect(age.onEarth()).toBeCloseTo(6.02)
    expect(age.onVenus()).toBeCloseTo(9.78)
  })

  xit('age in mars years', () => {
    const age = new SpaceAge(2329871239)
    expect(age.onEarth()).toBeCloseTo(73.83)
    expect(age.onMars()).toBeCloseTo(39.25)
  })

  xit('age in jupiter years', () => {
    const age = new SpaceAge(901876382)
    expect(age.onEarth()).toBeCloseTo(28.58)
    expect(age.onJupiter()).toBeCloseTo(2.41)
  })

  xit('age in saturn years', () => {
    const age = new SpaceAge(3000000000)
    expect(age.onEarth()).toBeCloseTo(95.06)
    expect(age.onSaturn()).toBeCloseTo(3.23)
  })

  xit('age in uranus years', () => {
    const age = new SpaceAge(3210123456)
    expect(age.onEarth()).toBeCloseTo(101.72)
    expect(age.onUranus()).toBeCloseTo(1.21)
  })

  xit('age in neptune year', () => {
    const age = new SpaceAge(8210123456)
    expect(age.onEarth()).toBeCloseTo(260.16)
    expect(age.onNeptune()).toBeCloseTo(1.58)
  })
})
