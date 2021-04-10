import { Rational } from './rational-numbers'

describe('Addition', () => {
  it('Add two positive rational numbers', () => {
    const expected = new Rational(7, 6)
    expect(new Rational(1, 2).add(new Rational(2, 3))).toEqual(expected)
  })

  xit('Add a positive rational number and a negative rational number', () => {
    const expected = new Rational(-1, 6)
    expect(new Rational(1, 2).add(new Rational(-2, 3))).toEqual(expected)
  })

  xit('Add two negative rational numbers', () => {
    const expected = new Rational(-7, 6)
    expect(new Rational(-1, 2).add(new Rational(-2, 3))).toEqual(expected)
  })

  xit('Add a rational number to its additive inverse', () => {
    const expected = new Rational(0, 1)
    expect(new Rational(1, 2).add(new Rational(-1, 2))).toEqual(expected)
  })
})

describe('Subtraction', () => {
  xit('Subtract two positive rational numbers', () => {
    const expected = new Rational(-1, 6)
    expect(new Rational(1, 2).sub(new Rational(2, 3))).toEqual(expected)
  })

  xit('Subtract a positive rational number and a negative rational number', () => {
    const expected = new Rational(7, 6)
    expect(new Rational(1, 2).sub(new Rational(-2, 3))).toEqual(expected)
  })

  xit('Subtract two negative rational numbers', () => {
    const expected = new Rational(1, 6)
    expect(new Rational(-1, 2).sub(new Rational(-2, 3))).toEqual(expected)
  })

  xit('Subtract a rational number from itself', () => {
    const expected = new Rational(0, 1)
    expect(new Rational(1, 2).sub(new Rational(1, 2))).toEqual(expected)
  })
})

describe('Multiplication', () => {
  xit('Multiply two positive rational numbers', () => {
    const expected = new Rational(1, 3)
    expect(new Rational(1, 2).mul(new Rational(2, 3))).toEqual(expected)
  })

  xit('Multiply a negative rational number by a positive rational number', () => {
    const expected = new Rational(-1, 3)
    expect(new Rational(-1, 2).mul(new Rational(2, 3))).toEqual(expected)
  })

  xit('Multiply two negative rational numbers', () => {
    const expected = new Rational(1, 3)
    expect(new Rational(-1, 2).mul(new Rational(-2, 3))).toEqual(expected)
  })

  xit('Multiply a rational number by its reciprocal', () => {
    const expected = new Rational(1, 1)
    expect(new Rational(1, 2).mul(new Rational(2, 1))).toEqual(expected)
  })

  xit('Multiply a rational number by 1', () => {
    const expected = new Rational(1, 2)
    expect(new Rational(1, 2).mul(new Rational(1, 1))).toEqual(expected)
  })

  xit('Multiply a rational number by 0', () => {
    const expected = new Rational(0, 1)
    expect(new Rational(1, 2).mul(new Rational(0, 1))).toEqual(expected)
  })
})

describe('Division', () => {
  xit('Divide two positive rational numbers', () => {
    const expected = new Rational(3, 4)
    expect(new Rational(1, 2).div(new Rational(2, 3))).toEqual(expected)
  })

  xit('Divide a positive rational number by a negative rational number', () => {
    const expected = new Rational(-3, 4)
    expect(new Rational(1, 2).div(new Rational(-2, 3))).toEqual(expected)
  })

  xit('Divide two negative rational numbers', () => {
    const expected = new Rational(3, 4)
    expect(new Rational(-1, 2).div(new Rational(-2, 3))).toEqual(expected)
  })

  xit('Divide a rational number by 1', () => {
    const expected = new Rational(1, 2)
    expect(new Rational(1, 2).div(new Rational(1, 1))).toEqual(expected)
  })
})

describe('Absolute value', () => {
  xit('Absolute value of a positive rational number', () => {
    const expected = new Rational(1, 2)
    expect(new Rational(1, 2).abs()).toEqual(expected)
  })

  xit('Absolute value of a negative rational number', () => {
    const expected = new Rational(1, 2)
    expect(new Rational(-1, 2).abs()).toEqual(expected)
  })

  xit('Absolute value of zero', () => {
    const expected = new Rational(0, 1)
    expect(new Rational(0, 1).abs()).toEqual(expected)
  })
})

describe('Exponentiation of a rational number', () => {
  xit('Raise a positive rational number to a positive integer power', () => {
    const expected = new Rational(1, 8)
    expect(new Rational(1, 2).exprational(3)).toEqual(expected)
  })

  xit('Raise a negative rational number to a positive integer power', () => {
    const expected = new Rational(-1, 8)
    expect(new Rational(-1, 2).exprational(3)).toEqual(expected)
  })

  xit('Raise zero to an integer power', () => {
    const expected = new Rational(0, 1)
    expect(new Rational(0, 1).exprational(5)).toEqual(expected)
  })

  xit('Raise one to an integer power', () => {
    const expected = new Rational(1, 1)
    expect(new Rational(1, 1).exprational(4)).toEqual(expected)
  })

  xit('Raise a positive rational number to the power of zero', () => {
    const expected = new Rational(1, 1)
    expect(new Rational(1, 2).exprational(0)).toEqual(expected)
  })

  xit('Raise a negative rational number to the power of zero', () => {
    const expected = new Rational(1, 1)
    expect(new Rational(-1, 2).exprational(0)).toEqual(expected)
  })
})

describe('Exponentiation of a real number to a rational number', () => {
  xit('Raise a real number to a positive rational number', () => {
    const expected = 16.0
    expect(new Rational(4, 3).expreal(8)).toEqual(expected)
  })

  xit('Raise a real number to a negative rational number', () => {
    const expected = 1.0 / 3.0
    expect(new Rational(-1, 2).expreal(9)).toBeCloseTo(expected, 15)
  })

  xit('Raise a real number to a zero rational number', () => {
    const expected = 1.0
    expect(new Rational(0, 1).expreal(2)).toEqual(expected)
  })
})

describe('Reduction to lowest terms', () => {
  xit('Reduce a positive rational number to lowest terms', () => {
    const expected = new Rational(1, 2)
    expect(new Rational(2, 4).reduce()).toEqual(expected)
  })

  xit('Reduce a negative rational number to lowest terms', () => {
    const expected = new Rational(-2, 3)
    expect(new Rational(-4, 6).reduce()).toEqual(expected)
  })

  xit('Reduce a rational number with a negative denominator to lowest terms', () => {
    const expected = new Rational(-1, 3)
    expect(new Rational(3, -9).reduce()).toEqual(expected)
  })

  xit('Reduce zero to lowest terms', () => {
    const expected = new Rational(0, 1)
    expect(new Rational(0, 6).reduce()).toEqual(expected)
  })

  xit('Reduce an integer to lowest terms', () => {
    const expected = new Rational(-2, 1)
    expect(new Rational(-14, 7).reduce()).toEqual(expected)
  })

  xit('Reduce one to lowest terms', () => {
    const expected = new Rational(1, 1)
    expect(new Rational(13, 13).reduce()).toEqual(expected)
  })
})
