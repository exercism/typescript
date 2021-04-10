const fillColumn: (t: string[], l: string, r: number) => void = (
  transposed,
  fromSource,
  toColumn
) => {
  for (let row = 0; row < fromSource.length; row++) {
    transposed[row] =
      (row in transposed ? transposed[row] : '').padEnd(toColumn) +
      fromSource.charAt(row)
  }
}

export function transpose(lines: string[]): string[] {
  const transposed: string[] = []
  for (let toColumn = 0; toColumn < lines.length; toColumn++)
    fillColumn(transposed, lines[toColumn], toColumn)

  return transposed
}
