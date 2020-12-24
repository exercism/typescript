const OBJECTS = [
  'house',
  'malt',
  'rat',
  'cat',
  'dog',
  'cow with the crumpled horn',
  'maiden all forlorn',
  'man all tattered and torn',
  'priest all shaven and shorn',
  'rooster that crowed in the morn',
  'farmer sowing his corn',
  'horse and the hound and the horn',
] as const

const ACTIONS = [
  'Jack built',
  'lay in',
  'ate',
  'killed',
  'worried',
  'tossed',
  'milked',
  'kissed',
  'married',
  'woke',
  'kept',
  'belonged to',
] as const

class House {
  public static verse(verseNumber: number): string[] {
    const lines = []
    const totalLines = verseNumber
    let itemIndex = verseNumber - 1
    for (let lineNumber = 1; lineNumber <= totalLines; lineNumber += 1) {
      let lineText = ''
      if (lineNumber === 1) {
        lineText += 'This is'
      } else {
        lineText += `that ${ACTIONS[itemIndex]}`
        itemIndex -= 1
      }

      lineText += ` the ${OBJECTS[itemIndex]}`
      if (lineNumber === totalLines) {
        lineText += ` that ${ACTIONS[itemIndex]}.`
      }
      lines.push(lineText)
    }

    return lines
  }

  public static verses(start: number, end: number): string[] {
    let lines: string[] = []
    for (let i = start; i <= end; i += 1) {
      const verseLines = House.verse(i)
      lines = lines.concat(verseLines)
      if (i < end) {
        lines.push('')
      }
    }
    return lines
  }
}

export default House
