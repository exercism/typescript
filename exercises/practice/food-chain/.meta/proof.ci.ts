const animals = [
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse',
] as const

export function verses(start = 1, end = 8): string {
  if (end < start) {
    throw new Error('end should be smaller than the start')
  }
  let verses = ''

  for (; start <= end; start += 1) {
    verses += verse(start)
    if (start !== end) {
      verses += '\n'
    }
  }
  return verses
}

export function verse(num: number): string {
  let result = ''

  let index = num - 1
  result += `I know an old lady who swallowed a ${animals[index]}.\n`

  switch (num) {
    case 2:
      result += 'It wriggled and jiggled and tickled inside her.\n'
      break
    case 3:
      result += 'How absurd to swallow a bird!\n'
      break
    case 4:
      result += 'Imagine that, to swallow a cat!\n'
      break
    case 5:
      result += 'What a hog, to swallow a dog!\n'
      break
    case 6:
      result += 'Just opened her throat and swallowed a goat!\n'
      break
    case 7:
      result += "I don't know how she swallowed a cow!\n"
      break
    case 8:
      result += "She's dead, of course!\n"
      return result
    default:
      break
  }

  while (index >= 1) {
    result += `She swallowed the ${animals[index]} to catch the ${
      animals[index - 1]
    }`
    if (index === 2) {
      result += ' that wriggled and jiggled and tickled inside her'
    }
    result += '.\n'
    index -= 1
  }
  result += "I don't know why she swallowed the fly. Perhaps she'll die."

  return result + '\n'
}
