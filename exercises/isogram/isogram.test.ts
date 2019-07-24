import Isogram from "./isogram"

describe("Check if the given string is an isogram", () => {
  it("empty string", () => {
    const expected = true
    expect(Isogram.isIsogram("")).toEqual(expected)
  })

  xit("isogram with only lower case characters", () => {
    const expected = true
    expect(Isogram.isIsogram("isogram")).toEqual(expected)
  })

  xit("word with one duplicated character", () => {
    const expected = false
    expect(Isogram.isIsogram("eleven")).toEqual(expected)
  })

  xit("longest reported english isogram", () => {
    const expected = true
    expect(Isogram.isIsogram("subdermatoglyphic")).toEqual(expected)
  })

  xit("word with duplicated character in mixed case", () => {
    const expected = false
    expect(Isogram.isIsogram("Alphabet")).toEqual(expected)
  })

  xit("hypothetical isogrammic word with hyphen", () => {
    const expected = true
    expect(Isogram.isIsogram("thumbscrew-japingly")).toEqual(expected)
  })

  xit("isogram with duplicated hyphen", () => {
    const expected = true
    expect(Isogram.isIsogram("six-year-old")).toEqual(expected)
  })

  xit("made-up name that is an isogram", () => {
    const expected = true
    expect(Isogram.isIsogram("Emily Jung Schwartzkopf")).toEqual(expected)
  })

  xit("duplicated character in the middle", () => {
    const expected = false
    expect(Isogram.isIsogram("accentor")).toEqual(expected)
  })
})
