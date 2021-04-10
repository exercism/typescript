function pluralize(input: number): string {
  if (input === 0) {
    return 'o more bottles '
  }

  return input === 1 ? '1 bottle ' : `${input} bottles `
}

export function verse(input: number): string {
  const wall = 'of beer on the wall'
  if (input === 0) {
    return `N${pluralize(0)}${wall}, n${pluralize(0)}of beer.
Go to the store and buy some more, ${pluralize(99)}${wall}.
`
  }
  if (input === 1) {
    return `${pluralize(1)}${wall}, ${pluralize(1)}of beer.
Take it down and pass it around, n${pluralize(0)}${wall}.
`
  }
  return `${pluralize(input)}${wall}, ${pluralize(input)}of beer.
Take one down and pass it around, ${pluralize(input - 1)}${wall}.
`
}

export function sing(end: number = 99, start: number = 0): string {
  let temp = ``
  for (let i: number = end; i >= start; i -= 1) {
    temp += verse(i)
    if (i !== start) {
      temp += '\n'
    }
  }
  return temp
}
