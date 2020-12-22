class Beer {
  private static pluralize(input: number): string {
    if (input === 0) {
      return 'o more bottles '
    }

    return input === 1 ? '1 bottle ' : `${input} bottles `
  }

  public static verse(input: number): string {
    const wall = 'of beer on the wall'
    if (input === 0) {
      return `N${Beer.pluralize(0)}${wall}, n${Beer.pluralize(0)}of beer.
Go to the store and buy some more, ${Beer.pluralize(99)}${wall}.
`
    }
    if (input === 1) {
      return `${Beer.pluralize(1)}${wall}, ${Beer.pluralize(1)}of beer.
Take it down and pass it around, n${Beer.pluralize(0)}${wall}.
`
    }
    return `${Beer.pluralize(input)}${wall}, ${Beer.pluralize(input)}of beer.
Take one down and pass it around, ${Beer.pluralize(input - 1)}${wall}.
`
  }

  public static sing(end: number = 99, start: number = 0): string {
    let temp = ``
    for (let i: number = end; i >= start; i -= 1) {
      temp += Beer.verse(i)
      if (i !== start) {
        temp += '\n'
      }
    }
    return temp
  }
}

export default Beer
