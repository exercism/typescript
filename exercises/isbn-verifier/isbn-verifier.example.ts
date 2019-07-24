class ISBN {
  private readonly isbn: string

  constructor(isbn: string) {
    this.isbn = isbn.replace(/-/g, "")
  }

  public isValid(): boolean {
    if (!this.isbn.match(/^(\d{9}[\dxX])$/)) {
      return false
    }

    const digits = [...this.isbn]
    if (digits[9].match(/[xX]/)) {
      digits[9] = "10"
    }

    const sum = digits.reduce(
      (acc, value, index) => acc + (10 - index) * parseInt(value, 10),
      0
    )

    return sum % 11 === 0
  }
}

export default ISBN
