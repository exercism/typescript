import { isPaired } from './matching-brackets'

describe('Matching Brackets', () => {
  it('paired square brackets', () => {
    expect(isPaired('[]')).toEqual(true)
  })

  xit('empty string', () => {
    expect(isPaired('')).toEqual(true)
  })

  xit('unpaired brackets', () => {
    expect(isPaired('[[')).toEqual(false)
  })

  xit('wrong ordered brackets', () => {
    expect(isPaired('}{')).toEqual(false)
  })

  xit('wrong closing bracket', () => {
    expect(isPaired('{]')).toEqual(false)
  })

  xit('paired with whitespace', () => {
    expect(isPaired('{ }')).toEqual(true)
  })

  xit('partially paired brackets', () => {
    expect(isPaired('{[])')).toEqual(false)
  })

  xit('simple nested brackets', () => {
    expect(isPaired('{[]}')).toEqual(true)
  })

  xit('several paired brackets', () => {
    expect(isPaired('{}[]')).toEqual(true)
  })

  xit('paired and nested brackets', () => {
    expect(isPaired('([{}({}[])])')).toEqual(true)
  })

  xit('unopened closing brackets', () => {
    expect(isPaired('{[)][]}')).toEqual(false)
  })

  xit('unpaired and nested brackets', () => {
    expect(isPaired('([{])')).toEqual(false)
  })

  xit('paired and wrong nested brackets', () => {
    expect(isPaired('[({]})')).toEqual(false)
  })

  xit('paired and incomplete brackets', () => {
    expect(isPaired('{}[')).toEqual(false)
  })

  xit('too many closing brackets', () => {
    expect(isPaired('[]]')).toEqual(false)
  })

  xit('math expression', () => {
    expect(isPaired('(((185 + 223.85) * 15) - 543)/2')).toEqual(true)
  })

  xit('complex latex expression', () => {
    expect(
      isPaired(
        '\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'
      )
    ).toEqual(true)
  })
})
