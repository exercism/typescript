import { ResistorColor } from "./resistor-color-duo"

describe("Resistor Colors", () => {
  it("Brown and black", () => {
    const resistorColor = new ResistorColor(["brown", "black"])
    expect(resistorColor.value()).toEqual(10)
  })

  xit("Blue and grey", () => {
    const resistorColor = new ResistorColor(["blue", "grey"])
    expect(resistorColor.value()).toEqual(68)
  })

  xit("Yellow and violet", () => {
    const resistorColor = new ResistorColor(["yellow", "violet"])
    expect(resistorColor.value()).toEqual(47)
  })

  xit("Orange and orange", () => {
    const resistorColor = new ResistorColor(["orange", "orange"])
    expect(resistorColor.value()).toEqual(33)
  })

  xit("Ignore additional colors", () => {
    const resistorColor = new ResistorColor(["green", "brown", "orange"])
    expect(resistorColor.value()).toEqual(51)
  })

  xit("Throws error when not enough colors", () => {
    expect(() => new ResistorColor(["green"])).toThrowError(
      "At least two colors need to be present"
    )
  })
})
