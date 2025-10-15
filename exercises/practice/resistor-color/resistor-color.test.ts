import { describe, it, expect } from '@jest/globals'
import { colorCode, COLORS } from './resistor-color.ts'

describe('color code', () => {
  it('Black', () => {
    expect(colorCode('black')).toEqual(0)
  })
  
  it('White', () => {
    expect(colorCode('white')).toEqual(9)
  })
  
  it('Orange', () => {
    expect(colorCode('orange')).toEqual(3)
  })
  
  it('Brown', () => {
    expect(colorCode('brown')).toEqual(1)
  })
  
  it('Red', () => {
    expect(colorCode('red')).toEqual(2)
  })
  
  it('Yellow', () => {
    expect(colorCode('yellow')).toEqual(4)
  })
  
  it('Green', () => {
    expect(colorCode('green')).toEqual(5)
  })
  
  it('Blue', () => {
    expect(colorCode('blue')).toEqual(6)
  })
  
  it('Violet', () => {
    expect(colorCode('violet')).toEqual(7)
  })
  
  it('Grey', () => {
    expect(colorCode('grey')).toEqual(8)
  })
})
