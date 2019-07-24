import Diamond from './diamond'

describe('Make diamond function', () => {
  const diamond = new Diamond()

  test('test letter A', () => {
    const result = 'A\n'
    expect(diamond.makeDiamond('A')).toEqual(result)
  })

  test('test letter C', () => {
    const result = `  A
 B B
C   C
 B B
  A
`
    expect(diamond.makeDiamond('C')).toEqual(result)
  })

  test('test letter E', () => {
    const result = `    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A
`
    expect(diamond.makeDiamond('E')).toEqual(result)
  })
})
