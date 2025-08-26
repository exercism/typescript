import { describe, xdescribe, it, expect, xit } from '@jest/globals'
import { colorCode, COLORS } from './resistor-color.ts'

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

xdescribe('Colors', () => {
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
