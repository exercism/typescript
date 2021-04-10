const days = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth',
] as const

const gifts = [
  'a Partridge in a Pear Tree.',
  'two Turtle Doves, ',
  'three French Hens, ',
  'four Calling Birds, ',
  'five Gold Rings, ',
  'six Geese-a-Laying, ',
  'seven Swans-a-Swimming, ',
  'eight Maids-a-Milking, ',
  'nine Ladies Dancing, ',
  'ten Lords-a-Leaping, ',
  'eleven Pipers Piping, ',
  'twelve Drummers Drumming, ',
] as const

export function recite(startVerse: number, endVerse: number): string {
  let lyrics = reciteVerse(startVerse)
  for (let i = startVerse + 1; i <= endVerse; i++) {
    lyrics += reciteVerse(i)
  }
  return lyrics
}

function reciteVerse(verse: number): string {
  let result =
    'On the ' + days[verse - 1] + ' day of Christmas my true love gave to me: '
  for (let i = verse; i > 0; i--) {
    if (verse !== 1 && i === 1) {
      result += 'and '
    }
    result += gifts[i - 1]
  }
  result += '\n'
  return result
}
