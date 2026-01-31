export const gamestate = (board: string[]): string => {
  const gridSize = board.length
  const numberOfX = (board.join('').match(/X/g) || []).length
  const numberOfO = (board.join('').match(/O/g) || []).length
  const scoringArray = Array(gridSize * 2 + 2).fill(0)

  const boardAsNumbers = board.flatMap((row) =>
    row.split('').map((element) => {
      if (element === 'X') return 1
      if (element === 'O') return -1
      return 0
    })
  )

  boardAsNumbers.forEach((element, index) => {
    const row = Math.floor(index / gridSize)
    const col = index % gridSize

    scoringArray[row] += element
    scoringArray[gridSize + col] += element
    if (row === col) {
      scoringArray[2 * gridSize] += element
    }
    if (gridSize - 1 - col === row) {
      scoringArray[2 * gridSize + 1] += element
    }
  })

  if (numberOfX - numberOfO > 1) {
    throw new Error('Wrong turn order: X went twice')
  }
  if (numberOfX - numberOfO < 0) {
    throw new Error('Wrong turn order: O started')
  }

  const xWins = scoringArray.some((score) => score === gridSize)
  const oWins = scoringArray.some((score) => score === -gridSize)

  if (xWins && oWins) {
    throw new Error(
      'Impossible board: game should have ended after the game was won'
    )
  }
  if (xWins || oWins) {
    return 'win'
  }
  if (boardAsNumbers.includes(0)) {
    return 'ongoing'
  }
  return 'draw'
}
