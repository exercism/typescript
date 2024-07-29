import { describe, it, expect, xit } from '@jest/globals'
import { Rational } from './rational-numbers.ts'

function assertRational(
  actual: Rational,
  expectedNumerator: number,
  expectedDenominator: number
): void {
  expect(actual.numerator).toEqual(expectedNumerator)
  expect(actual.denominator).toEqual(expectedDenominator)
}

describe('Addition', () => {
  it('Add two positive rational numbers', () => {
    const actual = new Rational(1, 2).add(new Rational(2, 3))
    assertRational(actual, 7, 6)
  })

  xit('Add a positive rational number and a negative rational number', () => {
    const actual = new Rational(1, 2).add(new Rational(-2, 3))
    assertRational(actual, -1, 6)
  })

  xit('Add two negative rational numbers', () => {
    const actual = new Rational(-1, 2).add(new Rational(-2, 3))
    assertRational(actual, -7, 6)
  })

  xit('Add a rational number to its additive inverse', () => {
    const actual = new Rational(1, 2).add(new Rational(-1, 2))
    assertRational(actual, 0, 1)
  })
})

describe('Subtraction', () => {
  xit('Subtract two positive rational numbers', () => {
    const actual = new Rational(1, 2).sub(new Rational(2, 3))
    assertRational(actual, -1, 6)
  })

  xit('Subtract a positive rational number and a negative rational number', () => {
    const actual = new Rational(1, 2).sub(new Rational(-2, 3))
    assertRational(actual, 7, 6)
  })

  xit('Subtract two negative rational numbers', () => {
    const actual = new Rational(-1, 2).sub(new Rational(-2, 3))
    assertRational(actual, 1, 6)
  })

  xit('Subtract a rational number from itself', () => {
    const actual = new Rational(1, 2).sub(new Rational(1, 2))
    assertRational(actual, 0, 1)
  })
})

describe('Multiplication', () => {
  xit('Multiply two positive rational numbers', () => {
    const actual = new Rational(1, 2).mul(new Rational(2, 3))
    assertRational(actual, 1, 3)
  })

  xit('Multiply a negative rational number by a positive rational number', () => {
    const actual = new Rational(-1, 2).mul(new Rational(2, 3))
    assertRational(actual, -1, 3)
  })

  xit('Multiply two negative rational numbers', () => {
    const actual = new Rational(-1, 2).mul(new Rational(-2, 3))
    assertRational(actual, 1, 3)
  })

  xit('Multiply a rational number by its reciprocal', () => {
    const actual = new Rational(1, 2).mul(new Rational(2, 1))
    assertRational(actual, 1, 1)
  })

  xit('Multiply a rational number by 1', () => {
    const actual = new Rational(1, 2).mul(new Rational(1, 1))
    assertRational(actual, 1, 2)
  })

  xit('Multiply a rational number by 0', () => {
    const actual = new Rational(1, 2).mul(new Rational(0, 1))
    assertRational(actual, 0, 1)
  })
})

describe('Division', () => {
  xit('Divide two positive rational numbers', () => {
    const actual = new Rational(1, 2).div(new Rational(2, 3))
    assertRational(actual, 3, 4)
  })

  xit('Divide a positive rational number by a negative rational number', () => {
    const actual = new Rational(1, 2).div(new Rational(-2, 3))
    assertRational(actual, -3, 4)
  })

  xit('Divide two negative rational numbers', () => {
    const actual = new Rational(-1, 2).div(new Rational(-2, 3))
    assertRational(actual, 3, 4)
  })

  xit('Divide a rational number by 1', () => {
    const actual = new Rational(1, 2).div(new Rational(1, 1))
    assertRational(actual, 1, 2)
  })
})

describe('Absolute value', () => {
  xit('Absolute value of a positive rational number', () => {
    const actual = new Rational(1, 2).abs()
    assertRational(actual, 1, 2)
  })

  xit('Absolute value of a positive rational number with negative numerator and denominator', () => {
    const actual = new Rational(-1, -2).abs()
    assertRational(actual, 1, 2)
  })

  xit('Absolute value of a negative rational number', () => {
    const actual = new Rational(-1, 2).abs()
    assertRational(actual, 1, 2)
  })

  xit('Absolute value of a negative rational number with negative denominator', () => {
    const actual = new Rational(1, -2).abs()
    assertRational(actual, 1, 2)
  })

  xit('Absolute value of zero', () => {
    const actual = new Rational(0, 1).abs()
    assertRational(actual, 0, 1)
  })

  xit('Absolute value of a rational number is reduced to lowest terms', () => {
    const actual = new Rational(2, 4).abs()
    assertRational(actual, 1, 2)
  })
})

describe('Exponentiation of a rational number', () => {
  xit('Raise a positive rational number to a positive integer power', () => {
    const actual = new Rational(1, 2).exprational(3)
    assertRational(actual, 1, 8)
  })

  xit('Raise a negative rational number to a positive integer power', () => {
    const actual = new Rational(-1, 2).exprational(3)
    assertRational(actual, -1, 8)
  })

  xit('Raise a positive rational number to a negative integer power', () => {
    const actual = new Rational(3, 5).exprational(-2)
    assertRational(actual, 25, 9)
  })

  xit('Raise a negative rational number to an even negative integer power', () => {
    const actual = new Rational(-3, 5).exprational(-2)
    assertRational(actual, 25, 9)
  })

  xit('Raise a negative rational number to an odd negative integer power', () => {
    const actual = new Rational(-3, 5).exprational(-3)
    assertRational(actual, -125, 27)
  })

  xit('Raise zero to an integer power', () => {
    const actual = new Rational(0, 1).exprational(5)
    assertRational(actual, 0, 1)
  })

  xit('Raise one to an integer power', () => {
    const actual = new Rational(1, 1).exprational(4)
    assertRational(actual, 1, 1)
  })

  xit('Raise a positive rational number to the power of zero', () => {
    const actual = new Rational(1, 2).exprational(0)
    assertRational(actual, 1, 1)
  })

  xit('Raise a negative rational number to the power of zero', () => {
    const actual = new Rational(-1, 2).exprational(0)
    assertRational(actual, 1, 1)
  })
})

describe('Exponentiation of a real number to a rational number', () => {
  xit('Raise a real number to a positive rational number', () => {
    const actual = new Rational(4, 3).expreal(8)
    expect(actual).toBeCloseTo(16.0, 10)
  })

  xit('Raise a real number to a negative rational number', () => {
    const actual = new Rational(-1, 2).expreal(9)
    expect(actual).toBeCloseTo(1.0 / 3.0, 10)
  })

  xit('Raise a real number to a zero rational number', () => {
    const actual = new Rational(0, 1).expreal(2)
    expect(actual).toBeCloseTo(1.0, 10)
  })
})

describe('Reduction to lowest terms', () => {
  xit('Reduce a positive rational number to lowest terms', () => {
    const actual = new Rational(2, 4).reduce()
    assertRational(actual, 1, 2)
  })

  xit('Reduce places the minus sign on the numerator', () => {
    const actual = new Rational(3, -4).reduce()
    assertRational(actual, -3, 4)
  })

  xit('Reduce a negative rational number to lowest terms', () => {
    const actual = new Rational(-4, 6).reduce()
    assertRational(actual, -2, 3)
  })

  xit('Reduce a rational number with a negative denominator to lowest terms', () => {
    const actual = new Rational(3, -9).reduce()
    assertRational(actual, -1, 3)
  })

  xit('Reduce zero to lowest terms', () => {
    const actual = new Rational(0, 6).reduce()
    assertRational(actual, 0, 1)
  })

  xit('Reduce an integer to lowest terms', () => {
    const actual = new Rational(-14, 7).reduce()
    assertRational(actual, -2, 1)
  })

  xit('Reduce one to lowest terms', () => {
    const actual = new Rational(13, 13).reduce()
    assertRational(actual, 1, 1)
  })
})
