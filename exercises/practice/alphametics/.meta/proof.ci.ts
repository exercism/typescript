export function solve(puzzle: string): undefined | { [key: string]: number } {
  const parts: string[] = puzzle
    .split(/[+|==]/g)
    .map((o) => o.trim())
    .filter((o) => o !== '')

  if (parts.length < 3) {
    return undefined
  }

  const uniqueLetters = new Set(parts.join('').split(''))
  const firstLetters = new Set(parts.map((p) => p[0]))

  const numberCombinations: number[][] = getNumberCombinations(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    uniqueLetters.size
  )

  while (numberCombinations.length) {
    const permutations = generate(
      Array(uniqueLetters.size)
        .fill(Array<number>())
        .map((_, i) => i)
    )
    const numberCombination: number[] = numberCombinations.pop() || []
    for (const permutation of permutations) {
      const newNumbers = assignNumbers(
        numberCombination,
        uniqueLetters,
        permutation
      )
      if (testNumbers(newNumbers, parts, firstLetters)) {
        return newNumbers
      }
    }
  }
  return undefined
}

function assignNumbers(
  numberCombination: number[],
  uniqueLetters: Set<string>,
  permutation: number[]
): { [key: string]: number } {
  const output: { [key: string]: number } = {}
  let i = 0
  for (const letter of uniqueLetters.values()) {
    output[letter] = numberCombination[permutation[i++]]
  }
  return output
}

function testNumbers(
  numbers: { [key: string]: number },
  puzzleParts: string[],
  firstLetters: Set<string>
): boolean {
  const keys: string[] = Object.keys(numbers)
  for (const key of keys) {
    if (numbers[key] === 0 && firstLetters.has(key)) {
      return false
    }
  }
  const replaceRegex = new RegExp(`[${keys.join('')}]`, 'g')

  const puzzlePartsNumbers: number[] = puzzleParts
    .join(',')
    .replace(replaceRegex, (input) => numbers[input].toString())
    .split(',')
    .map((t) => parseInt(t, 10))

  const total = puzzlePartsNumbers.slice(puzzlePartsNumbers.length - 1)[0]
  return (
    total ===
    puzzlePartsNumbers
      .slice(0, puzzleParts.length - 1)
      .reduce((acc: number, val: number) => acc + val, 0)
  )
}

function* generate(A: number[]): IterableIterator<number[]> {
  const c = []
  const n = A.length
  yield A
  for (let i = 0; i < n; i++) {
    c[i] = 0
  }
  let i = 0
  while (i < n) {
    if (c[i] < i) {
      if (i % 2 === 0) {
        swap(A, 0, i)
      } else {
        swap(A, c[i], i)
      }
      yield A
      c[i] += 1
      i = 0
    } else {
      c[i] = 0
      i += 1
    }
  }
}

function swap(list: number[], x: number, y: number): number[] {
  const tmp = list[x]
  list[x] = list[y]
  list[y] = tmp
  return list
}

function getNumberCombinations(arr: number[], size: number): number[][] {
  const len = arr.length

  if (size === len) {
    return [arr]
  }

  return arr.reduce((acc: number[][], val: number, i: number) => {
    const res: number[][] = getNumberCombinations(
      arr.slice(i + 1),
      size - 1
    ).map((comb) => [val].concat(comb))

    return acc.concat(res)
  }, [])
}
