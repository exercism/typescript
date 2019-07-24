class Transpose {
  public static transpose(lines: string[]): string[] {
    return lines.reduce((result: string[], line, lineNo) => {
      line.split("").map((value, key) => {
        if (typeof result[key] === "undefined") {
          result[key] = new Array(lineNo + 1).join(" ")
        }

        result[key] += value
      })

      return result
    }, [])
  }
}

export default Transpose
