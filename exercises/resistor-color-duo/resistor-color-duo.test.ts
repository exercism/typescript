import { ResistorColor } from "./resistor-color-duo"

describe("Resistor Colors", () => {
  xtest("Brown and black", () => {
    const resistorColor = new ResistorColor(["brown", "black"])
    expect(resistorColor.value()).toEqual(10)
  })

  xtest("Blue and grey", () => {
    const resistorColor = new ResistorColor(["blue", "grey"])
    expect(resistorColor.value()).toEqual(68)
  })

  xtest("Yellow and violet", () => {
    const resistorColor = new ResistorColor(["yellow", "violet"])
    expect(resistorColor.value()).toEqual(47)
  })

  xtest("Orange and orange", () => {
    const resistorColor = new ResistorColor(["orange", "orange"])
    expect(resistorColor.value()).toEqual(33)
  })

  xtest("Ignore additional colors", () => {
    const resistorColor = new ResistorColor(["green", "brown", "orange"])
    expect(resistorColor.value()).toEqual(51)
  })
  xtest("Throws error when not enough colors", () => {
    expect(() => new ResistorColor(["green"])).toThrowError(
      "At least two colors need to be present"
    )
  })
})