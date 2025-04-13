export function squareRoot(radicand: number): number {
  if (radicand === 1) {
    return 1
  }

  let guess = Math.floor(radicand / 2)
  for (let i = 0; i < 10; i++) {
    guess = Math.floor((guess + radicand / guess) / 2)
  }

  return guess
}
