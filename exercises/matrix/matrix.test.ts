import Matrix from "./matrix"

describe("Matrix", () => {
  it("extract row from one number matrix", () => {
    const expected = [1]
    expect(new Matrix("1").rows[0]).toEqual(expected)
  })

  xit("can extract row", () => {
    const expected = [3, 4]
    expect(new Matrix("1 2\n3 4").rows[1]).toEqual(expected)
  })

  xit("extract row where numbers have different widths", () => {
    const expected = [10, 20]
    expect(new Matrix("1 2\n10 20").rows[1]).toEqual(expected)
  })

  xit("can extract row from non-square matrix", () => {
    const expected = [7, 8, 9]
    expect(new Matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6").rows[2]).toEqual(expected)
  })

  xit("extract column from one number matrix", () => {
    const expected = [1]
    expect(new Matrix("1").columns[0]).toEqual(expected)
  })

  xit("can extract column", () => {
    const expected = [3, 6, 9]
    expect(new Matrix("1 2 3\n4 5 6\n7 8 9").columns[2]).toEqual(expected)
  })

  xit("can extract column from non-square matrix", () => {
    const expected = [3, 6, 9, 6]
    expect(new Matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6").columns[2]).toEqual(
      expected
    )
  })

  xit("extract column where numbers have different widths", () => {
    const expected = [1903, 3, 4]
    expect(new Matrix("89 1903 3\n18 3 1\n9 4 800").columns[1]).toEqual(
      expected
    )
  })
})
