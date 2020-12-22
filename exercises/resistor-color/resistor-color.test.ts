import { colorCode, COLORS } from './resistor-color'

describe('color code', () => {
  it('Black', () => {
    expect(colorCode('black')).toEqual(0)
  })

  xit('White', () => {
    expect(colorCode('white')).toEqual(9)
  })

  xit('Orange', () => {
    expect(colorCode('orange')).toEqual(3)
  })
})

describe('Colors', () => {
  xit('returns all colors', () => {
    expect(COLORS).toEqual([
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ])
  })
})
