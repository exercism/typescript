import { Rational } from './rational-numbers'

function assertSameRational(r1: Rational, r2: Rational): void {
  expect(r1.numerator).toEqual(r2.numerator)
  expect(r1.denominator).toEqual(r2.denominator)
}

describe('Constructor', () => {
  it('Assigns public fields numerator and denominator', () => {
    const rational = new Rational(5, 7)
    expect(rational.numerator).toEqual(5)
    expect(rational.denominator).toEqual(7)
  })
})

describe('Addition', () => {
  xit('Add two positive rational numbers', () => {
    const actual = new Rational(1, 2).add(new Rational(2, 3))
    const expected = new Rational(7, 6)
    assertSameRational(actual, expected)
  })

  xit('Add a positive rational number and a negative rational number', () => {
    const actual = new Rational(1, 2).add(new Rational(-2, 3))
    const expected = new Rational(-1, 6)
    assertSameRational(actual, expected)
  })

  xit('Add two negative rational numbers', () => {
    const actual = new Rational(-1, 2).add(new Rational(-2, 3))
    const expected = new Rational(-7, 6)
    assertSameRational(actual, expected)
  })

  xit('Add a rational number to its additive inverse', () => {
    const actual = new Rational(1, 2).add(new Rational(-1, 2))
    const expected = new Rational(0, 1)
    assertSameRational(actual, expected)
  })
})

describe('Subtraction', () => {
  xit('Subtract two positive rational numbers', () => {
    const actual = new Rational(1, 2).sub(new Rational(2, 3))
    const expected = new Rational(-1, 6)
    assertSameRational(actual, expected)
  })

  xit('Subtract a positive rational number and a negative rational number', () => {
    const actual = new Rational(1, 2).sub(new Rational(-2, 3))
    const expected = new Rational(7, 6)
    assertSameRational(actual, expected)
  })

  xit('Subtract two negative rational numbers', () => {
    const actual = new Rational(-1, 2).sub(new Rational(-2, 3))
    const expected = new Rational(1, 6)
    assertSameRational(actual, expected)
  })

  xit('Subtract a rational number from itself', () => {
    const actual = new Rational(1, 2).sub(new Rational(1, 2))
    const expected = new Rational(0, 1)
    assertSameRational(actual, expected)
  })
})

describe('Multiplication', () => {
  xit('Multiply two positive rational numbers', () => {
    const actual = new Rational(1, 2).mul(new Rational(2, 3))
    const expected = new Rational(1, 3)
    assertSameRational(actual, expected)
  })

  xit('Multiply a negative rational number by a positive rational number', () => {
    const actual = new Rational(-1, 2).mul(new Rational(2, 3))
    const expected = new Rational(-1, 3)
    assertSameRational(actual, expected)
  })

  xit('Multiply two negative rational numbers', () => {
    const actual = new Rational(-1, 2).mul(new Rational(-2, 3))
    const expected = new Rational(1, 3)
    assertSameRational(actual, expected)
  })

  xit('Multiply a rational number by its reciprocal', () => {
    const actual = new Rational(1, 2).mul(new Rational(2, 1))
    const expected = new Rational(1, 1)
    assertSameRational(actual, expected)
  })

  xit('Multiply a rational number by 1', () => {
    const actual = new Rational(1, 2).mul(new Rational(1, 1))
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })

  xit('Multiply a rational number by 0', () => {
    const actual = new Rational(1, 2).mul(new Rational(0, 1))
    const expected = new Rational(0, 1)
    assertSameRational(actual, expected)
  })
})

describe('Division', () => {
  xit('Divide two positive rational numbers', () => {
    const actual = new Rational(1, 2).div(new Rational(2, 3))
    const expected = new Rational(3, 4)
    assertSameRational(actual, expected)
  })

  xit('Divide a positive rational number by a negative rational number', () => {
    const actual = new Rational(1, 2).div(new Rational(-2, 3))
    const expected = new Rational(-3, 4)
    assertSameRational(actual, expected)
  })

  xit('Divide two negative rational numbers', () => {
    const actual = new Rational(-1, 2).div(new Rational(-2, 3))
    const expected = new Rational(3, 4)
    assertSameRational(actual, expected)
  })

  xit('Divide a rational number by 1', () => {
    const actual = new Rational(1, 2).div(new Rational(1, 1))
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })
})

describe('Absolute value', () => {
  xit('Absolute value of a positive rational number', () => {
    const actual = new Rational(1, 2).abs()
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })

  xit('Absolute value of a positive rational number with negative numerator and denominator', () => {
    const actual = new Rational(-1, -2).abs()
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })

  xit('Absolute value of a negative rational number', () => {
    const actual = new Rational(-1, 2).abs()
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })

  xit('Absolute value of a negative rational number with negative denominator', () => {
    const actual = new Rational(1, -2).abs()
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })

  xit('Absolute value of zero', () => {
    const actual = new Rational(0, 1).abs()
    const expected = new Rational(0, 1)
    assertSameRational(actual, expected)
  })

  xit('Absolute value of a rational number is reduced to lowest terms', () => {
    const actual = new Rational(2, 4).abs()
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })
})

describe('Exponentiation of a rational number', () => {
  xit('Raise a positive rational number to a positive integer power', () => {
    const actual = new Rational(1, 2).exprational(3)
    const expected = new Rational(1, 8)
    assertSameRational(actual, expected)
  })

  xit('Raise a negative rational number to a positive integer power', () => {
    const actual = new Rational(-1, 2).exprational(3)
    const expected = new Rational(-1, 8)
    assertSameRational(actual, expected)
  })

  xit('Raise a positive rational number to a negative integer power', () => {
    const actual = new Rational(3, 5).exprational(-2)
    const expected = new Rational(25, 9)
    assertSameRational(actual, expected)
  })

  xit('Raise a negative rational number to an even negative integer power', () => {
    const actual = new Rational(-3, 5).exprational(-2)
    const expected = new Rational(25, 9)
    assertSameRational(actual, expected)
  })

  xit('Raise a negative rational number to an odd negative integer power', () => {
    const actual = new Rational(-3, 5).exprational(-3)
    const expected = new Rational(-125, 27)
    assertSameRational(actual, expected)
  })

  xit('Raise zero to an integer power', () => {
    const actual = new Rational(0, 1).exprational(5)
    const expected = new Rational(0, 1)
    assertSameRational(actual, expected)
  })

  xit('Raise one to an integer power', () => {
    const actual = new Rational(1, 1).exprational(4)
    const expected = new Rational(1, 1)
    assertSameRational(actual, expected)
  })

  xit('Raise a positive rational number to the power of zero', () => {
    const actual = new Rational(1, 2).exprational(0)
    const expected = new Rational(1, 1)
    assertSameRational(actual, expected)
  })

  xit('Raise a negative rational number to the power of zero', () => {
    const actual = new Rational(-1, 2).exprational(0)
    const expected = new Rational(1, 1)
    assertSameRational(actual, expected)
  })
})

describe('Exponentiation of a real number to a rational number', () => {
  xit('Raise a real number to a positive rational number', () => {
    const actual = new Rational(4, 3).expreal(8)
    const expected = 16.0
    expect(actual).toBeCloseTo(expected, 10)
  })

  xit('Raise a real number to a negative rational number', () => {
    const actual = new Rational(-1, 2).expreal(9)
    const expected = 1.0 / 3.0
    expect(actual).toBeCloseTo(expected, 10)
  })

  xit('Raise a real number to a zero rational number', () => {
    const actual = new Rational(0, 1).expreal(2)
    const expected = 1.0
    expect(actual).toBeCloseTo(expected, 10)
  })
})

describe('Reduction to lowest terms', () => {
  xit('Reduce a positive rational number to lowest terms', () => {
    const actual = new Rational(2, 4).reduce()
    const expected = new Rational(1, 2)
    assertSameRational(actual, expected)
  })

  xit('Reduce places the minus sign on the numerator', () => {
    const actual = new Rational(3, -4).reduce()
    const expected = new Rational(-3, 4)
    assertSameRational(actual, expected)
  })

  xit('Reduce a negative rational number to lowest terms', () => {
    const actual = new Rational(-4, 6).reduce()
    const expected = new Rational(-2, 3)
    assertSameRational(actual, expected)
  })

  xit('Reduce a rational number with a negative denominator to lowest terms', () => {
    const actual = new Rational(3, -9).reduce()
    const expected = new Rational(-1, 3)
    assertSameRational(actual, expected)
  })

  xit('Reduce zero to lowest terms', () => {
    const actual = new Rational(0, 6).reduce()
    const expected = new Rational(0, 1)
    assertSameRational(actual, expected)
  })

  xit('Reduce an integer to lowest terms', () => {
    const actual = new Rational(-14, 7).reduce()
    const expected = new Rational(-2, 1)
    assertSameRational(actual, expected)
  })

  xit('Reduce one to lowest terms', () => {
    const actual = new Rational(13, 13).reduce()
    const expected = new Rational(1, 1)
    assertSameRational(actual, expected)
  })
})
