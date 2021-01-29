import { createInput, createComputed, createCallback } from './react'

describe('React module', () => {
  // c51ee736-d001-4f30-88d1-0c8e8b43cd07
  xit('input cells have a value', () => {
    const initialValue = 10
    const [input, _setInput] = createInput(initialValue)
    expect(input()).toEqual(initialValue)
  })

  // dedf0fe0-da0c-4d5d-a582-ffaf5f4d0851
  xit("an input cell's value can be set", () => {
    const newValue = 20
    const [input, setInput] = createInput(4)
    setInput(newValue)
    expect(input()).toEqual(newValue)
  })

  // 5854b975-f545-4f93-8968-cc324cde746e
  xit('compute cells calculate initial value', () => {
    const [input] = createInput(1)
    const output = createComputed(() => input() + 1)
    expect(output()).toEqual(2)
  })

  // 25795a3d-b86c-4e91-abe7-1c340e71560c
  xit('compute cell takes inputs in correct order', () => {
    const [[one], [two]] = [createInput(1), createInput(2)]
    const output = createComputed(() => one() + two() * 10)
    expect(output()).toEqual(21)
  })

  // c62689bf-7be5-41bb-b9f8-65178ef3e8ba
  it('compute cells update value when inputs are changed', () => {
    const [input, setInput] = createInput(1)
    const output = createComputed(() => input() + 1)
    setInput(3)
    expect(output()).toEqual(4)
  })

  // 5ff36b09-0a88-48d4-b7f8-69dcf3feea40
  xit('compute cells can depend on other compute cells', () => {
    const [input, setInput] = createInput(1)
    const timesTwo = createComputed(() => input() * 2)
    const timesThirty = createComputed(() => input() * 30)
    const sum = createComputed(() => timesTwo() + timesThirty())
    expect(sum()).toEqual(32)
    setInput(3)
    expect(sum()).toEqual(96)
  })

  // abe33eaf-68ad-42a5-b728-05519ca88d2d
  xit('compute cells fire callbacks', () => {
    const [input, setInput] = createInput(1)
    const output = createComputed(() => input() + 1)
    let value = 0
    createCallback(() => (value = output()))
    setInput(3)
    expect(value).toEqual(4)
  })

  // 9e5cb3a4-78e5-4290-80f8-a78612c52db2
  xit('callbacks fire only when output values change', () => {
    const [input, setInput] = createInput(1)
    const output = createComputed(
      () => (input() < 3 ? 111 : 222),
      undefined,
      true // i.e. equality check - don't propagate if value doesn't change
    )
    let value: number | undefined
    createCallback(() => (value = output()))
    value = undefined // discard initial value from registration
    setInput(2)
    expect(value).toBeUndefined()
    setInput(4)
    expect(value).toEqual(222)
  })

  // ada17cb6-7332-448a-b934-e3d7495c13d
  xit('callbacks do not report already reported values', () => {
    const [input, setInput] = createInput(1)
    const output = createComputed(() => input() + 1)

    let value: number | undefined
    createCallback(() => (value = output()))

    setInput(2)
    expect(value).toEqual(3)

    setInput(3)
    expect(value).toEqual(4)
  })

  // ac271900-ea5c-461c-9add-eeebcb8c03e5
  xit('callbacks can fire from multiple cells', () => {
    const [input, setInput] = createInput(1)
    const plus_one = createComputed(() => input() + 1)
    const minus_one = createComputed(() => input() - 1)

    let value1 = 0
    createCallback(() => (value1 = plus_one()))
    let value2 = 0
    createCallback(() => (value2 = minus_one()))

    setInput(10)
    expect(value1).toEqual(11)
    expect(value2).toEqual(9)
  })

  // From JavaScript track
  xit('static callbacks fire even if their own value has not changed', () => {
    const [input, setInput] = createInput(1)
    const output = createComputed(
      () => (input() < 3 ? 111 : 222),
      undefined,
      true // i.e. equality check - don't propagate if value doesn't change
    )
    const values: string[] = []
    createCallback(() => {
      const _dontCare = output()
      values.push('cell changed')
    })
    values.pop() // discard initial value from registration
    setInput(2)
    expect(values).toEqual([])
    setInput(4)
    setInput(2)
    setInput(4)
    expect(values).toEqual(['cell changed', 'cell changed', 'cell changed'])
  })

  // 95a82dcc-8280-4de3-a4cd-4f19a84e3d6f
  xit('callbacks can be added and removed', () => {
    const [input, setInput] = createInput(11)
    const output = createComputed(() => input() + 1)

    const values1: number[] = []
    const unsubscribe1 = createCallback(() => values1.push(output()))
    values1.pop() // discard initial value from registration
    const values2: number[] = []
    createCallback(() => values2.push(output()))
    values2.pop() // discard initial value ...

    setInput(31)

    unsubscribe1()

    const values3: number[] = []
    createCallback(() => values3.push(output()))
    values3.pop() // discard initial value ...

    setInput(41)

    expect(values1).toEqual([32])
    expect(values2).toEqual([32, 42])
    expect(values3).toEqual([42])
  })

  // f2a7b445-f783-4e0e-8393-469ab4915f2a
  xit("removing a callback multiple times doesn't interfere with other callbacks", () => {
    const [input, setInput] = createInput(1)
    const output = createComputed(() => input() + 1)

    const values1: number[] = []
    const unsubscribe1 = createCallback(() => values1.push(output()))
    values1.pop() // discard initial value from registration
    const values2: number[] = []
    createCallback(() => values2.push(output()))
    values2.pop() // discard initial value ...

    unsubscribe1()
    unsubscribe1()
    unsubscribe1()

    setInput(2)

    expect(values1).toEqual([])
    expect(values2).toEqual([3])
  })

  // daf6feca-09e0-4ce5-801d-770ddfe1c268
  xit('callbacks should only be called once, even if multiple dependencies change', () => {
    const [input, setInput] = createInput(1)
    const plusOne = createComputed(() => input() + 1)
    const minusOne1 = createComputed(() => input() - 1)
    const minusOne2 = createComputed(() => minusOne1() - 1)
    const output = createComputed(() => plusOne() * minusOne2())

    const values: number[] = []
    createCallback(() => values.push(output()))
    values.pop() // discard initial value from registration

    setInput(4)

    expect(values).toEqual([10])
  })

  // 9a5b159f-b7aa-4729-807e-f1c38a46d377
  xit("callbacks should not be called if dependencies change but output value doesn't change", () => {
    const [input, setInput] = createInput(1)
    const plusOne = createComputed(() => input() + 1)
    const minusOne = createComputed(() => input() - 1)
    const alwaysTwo = createComputed(
      () => plusOne() - minusOne(),
      undefined,
      true // i.e. equality check - don't propagate if value doesn't change
    )

    const values: number[] = []
    createCallback(() => values.push(alwaysTwo()))
    values.pop() // discard initial value from registration

    setInput(2)
    setInput(3)
    setInput(4)
    setInput(5)

    expect(values).toEqual([])
  })
})
