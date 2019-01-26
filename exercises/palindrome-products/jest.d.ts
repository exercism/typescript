declare namespace jest {
  interface Matchers<R> {
    toContainArray(value: number[]): { message(): string, pass: boolean };
  }
}
