interface Result {
  start: number[]
  end: number[]
}

export default class WordSearch {
  private grid: string[]
  constructor(grid: string[]) {
    this.grid = grid
  }
  private findCoordsWhereLetterMatch(currentLetter: string, board: string[]): number[][] {
    return board.reduce((accumulatedCoordinates: number[][], row: string, rowNumber: number) => [...accumulatedCoordinates,
      ...row.split('')
        .reduce((matchingLetterIndecies: number[], letter: string, index: number) => letter === currentLetter ? [...matchingLetterIndecies, index] : matchingLetterIndecies, [])
        .reduce((coordinates: number[][], col) => [...coordinates, [rowNumber, col]], [])
    ],
    [])
  }

  private getCoordsOfSurroundingLetters(initialCoord: number[], totalRows: number, totalColumns: number): number[][] {

    const top: number[] = [initialCoord[0] - 1, initialCoord[1]]
    const bottom: number[] = [initialCoord[0] + 1, initialCoord[1]]

    const right: number[] = [initialCoord[0], initialCoord[1] + 1]
    const left: number[] = [initialCoord[0], initialCoord[1] - 1]

    const topRight: number[] = [initialCoord[0] + 1, initialCoord[1] + 1]
    const topLeft: number[] = [initialCoord[0] + 1, initialCoord[1] - 1]

    const bottomRight: number[] = [initialCoord[0] - 1, initialCoord[1] + 1]
    const bottomLeft: number[] = [initialCoord[0] - 1, initialCoord[1] - 1]

    return [top, bottom, right, left, topRight, topLeft, bottomRight, bottomLeft]
      .filter((coordinates: number[]) =>
        coordinates[0] <= (totalRows - 1) &&
        coordinates[1] <= (totalColumns - 1) &&
        coordinates[0] >= 0 &&
        coordinates[1] >= 0)
  }

  private getValueFromCoordinate(board: string[], coordinates: number[]): string {
    return board[coordinates[0]] && board[coordinates[0]].split('')[coordinates[1]]
  }

  private matchingValues(board: string[], coordinates: number[], letter: string): boolean {
    return this.getValueFromCoordinate(board, coordinates) === letter
  }

  private getDirectionFunction(originCoords: number[], destinationCoords: number[]): (currentCoords: number[]) => number[] {
    return (nextCoord: number[]): number[] => [nextCoord[0] + (destinationCoords[0] - originCoords[0]), nextCoord[1] + (destinationCoords[1] - originCoords[1])]
  }

  private getValidNeighbouringCoordinates(initial: number[], board: string[], letter: string): number[][] {
    return this.getCoordsOfSurroundingLetters(initial, board.length, board[0].length)
      .filter(neighbouringCoordinate => this.matchingValues(board, neighbouringCoordinate, letter))
  }

  private findOne(word: string, board: string[]): Result {
    const allPossibleStartCoords: number[][] = this.findCoordsWhereLetterMatch(word[0], board)
    const allPossibleCoordsForFirstTwoLetters: number[][][] = allPossibleStartCoords.reduce((accum: number[][][], initial) => {
      return [...accum, ...this.getValidNeighbouringCoordinates(initial, board, word[1]).map(secondCoordinate => [initial, secondCoordinate])]
    }, [])

    const allPossiblePaths: number[][][] = allPossibleCoordsForFirstTwoLetters.map((coordsSoFar: number[][]) => {
      const incrementFunction = this.getDirectionFunction(coordsSoFar[0], coordsSoFar[1])
      return word.substr(2, word.length).split('').reduce((accum: number[][], _) => [...accum, incrementFunction(accum[accum.length - 1])], coordsSoFar)
    })

    const validPaths: number[][][] = allPossiblePaths.reduce((validPaths: number[][][], path: number[][]) =>
      word.split('')
        .map((letter, index) => this.matchingValues(board, path[index], letter))
        .includes(false) ? validPaths : [...validPaths, path], [] as number[][][])


    return validPaths.reduce((_: Result, path: number[][]) => ({
      start: path[0].map(c => c + 1),
      end: path[path.length - 1].map(c => c + 1)
    }), {} as Result)
  }

  public find(words: string[]): { [word: string]: Result } | { [word: string]: undefined } {
    return words.reduce((accum: { [word: string]: Result } | { [word: string]: undefined }, word) => {
      const result = this.findOne(word, this.grid)
      accum[word] = Object.keys(result).length == 0 ? undefined : result

      return accum
    }, {} as { [word: string]: Result } | { [word: string]: undefined })
  }
}
