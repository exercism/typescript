import ReverseString from "./reverse-string"

describe("Reverse String", () => {
  it("an empty string", () => {
    const expected = ""
    expect(ReverseString.reverse("")).toEqual(expected)
  })

  xit("a word", () => {
    const expected = "tobor"
    expect(ReverseString.reverse("robot")).toEqual(expected)
  })

  xit("a capitalized word", () => {
    const expected = "nemaR"
    expect(ReverseString.reverse("Ramen")).toEqual(expected)
  })

  xit("a sentence with punctuation", () => {
    const expected = `!yrgnuh m'I`
    expect(ReverseString.reverse(`I'm hungry!`)).toEqual(expected)
  })

  xit("a palindrome", () => {
    const expected = "racecar"
    expect(ReverseString.reverse("racecar")).toEqual(expected)
  })
})
