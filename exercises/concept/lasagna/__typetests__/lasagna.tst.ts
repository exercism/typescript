import { describe, expect, test } from 'tstyche'
import {
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes,
} from '../lasagna.ts'

describe('EXPECTED_MINUTES_IN_OVEN', () => {
  test('constant is defined as a number or a constant number', () => {
    expect(EXPECTED_MINUTES_IN_OVEN).type.toBeAssignableTo<number>()
  })
})

describe('remainingMinutesInOven', () => {
  test('takes one number parameter', () => {
    expect<Parameters<typeof remainingMinutesInOven>>().type.toBe<[number]>()
  })

  test('returns a number', () => {
    expect<ReturnType<typeof remainingMinutesInOven>>().type.toBe<number>()
  })
})

describe('preparationTimeInMinutes', () => {
  test('takes one number parameter', () => {
    expect<Parameters<typeof preparationTimeInMinutes>>().type.toBe<[number]>()
  })

  test('returns a number', () => {
    expect<ReturnType<typeof preparationTimeInMinutes>>().type.toBe<number>()
  })
})

describe('totalTimeInMinutes', () => {
  test('takes two number parameters', () => {
    expect<Parameters<typeof totalTimeInMinutes>>().type.toBe<
      [number, number]
    >()
  })

  test('returns a number', () => {
    expect<ReturnType<typeof totalTimeInMinutes>>().type.toBe<number>()
  })
})
