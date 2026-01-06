const NUMBERS = [
  'no',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
]

export const recite = (
  initialBottleCount: number,
  takeDownCount = 1
): string[] => {
  const out: string[] = []

  for (
    let i = initialBottleCount;
    i > initialBottleCount - takeDownCount;
    i--
  ) {
    const currentBottles = i === 1 ? 'bottle' : 'bottles'
    const nextBottles = i - 1 === 1 ? 'bottle' : 'bottles'

    out.push(
      ...[
        ...Array(2).fill(
          `${NUMBERS[i]} green ${currentBottles} hanging on the wall,`
        ),
        `And if one green bottle should accidentally fall,`,
        `There'll be ${NUMBERS[i - 1].toLowerCase()} green ${nextBottles} hanging on the wall.`,
      ]
    )

    if (initialBottleCount - takeDownCount !== i - 1) {
      out.push('')
    }
  }

  return out
}
