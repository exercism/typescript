class Diamond {
  public makeDiamond(input: string): string {
    // A = 0, Z = 25
    const inputIx = input.charCodeAt(0) - 65
    const lines = []
    for (let i = 0; i <= inputIx; i++) {
      lines.push(this.getLine(inputIx, i))
    }
    for (let i = inputIx - 1; i >= 0; i--) {
      lines.push(lines[i])
    }
    return lines.join('\n') + '\n'
  }

  private getAlphaString(index: number): string {
    if (index === 0) {
      return `A`
    }
    const char = String.fromCharCode(index + 65)
    const padding = ' '.repeat((index - 1) * 2 + 1)
    return `${char}${padding}${char}`
  }

  private getLine(inputIx: number, index: number): string {
    const difference = inputIx - index
    const alphaStr = this.getAlphaString(index)
    return `${this.padString(alphaStr, difference)}`
  }

  private padString(str: string, times: number): string {
    const spaces = ' '.repeat(times)
    return `${spaces}${str}${spaces}`
  }
}

/*
ex: D ->
loop:
  A: D=3, A=0 -> 3 spaces, A, 3 spaces (special case)
  B: D=3, B=1 -> 2 spaces, B, 1 space, B, 2 spaces
  C: D=3, C=2 -> 1 space, C, 3 spaces, C, 1 space
  D: D=3, D=3 -> 0 spaces, D, 5 spaces, D, 0 spaces
   A
  B B
 C   C
D     D
 C   C
  B B
   A
*/
export default Diamond
