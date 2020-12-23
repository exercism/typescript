class ReverseString {
  public static reverse(value: string): string {
    return value.split('').reverse().join('')
  }
}

export default ReverseString
