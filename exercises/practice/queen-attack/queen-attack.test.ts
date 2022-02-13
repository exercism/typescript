import { QueenAttack } from './queen-attack'

describe('Queens', () => {
  describe('Test creation of Queens with valid and invalid positions', () => {
    it('queen with a valid position', () => {
      const queens = new QueenAttack({ white: [2, 2] })
      expect(queens.white).toEqual([2, 2])
    })

    xit('queen must have positive row', () => {
      const positioning = { white: [-2, 2] } as const
      const expectedError = 'Queen must be placed on the board'
      expect(() => new QueenAttack(positioning)).toThrow(expectedError)
    })

    xit('queen must have row on board', () => {
      const positioning = { white: [8, 4] } as const
      const expectedError = 'Queen must be placed on the board'
      expect(() => new QueenAttack(positioning)).toThrow(expectedError)
    })

    xit('queen must have positive column', () => {
      const positioning = { white: [2, -2] } as const
      const expectedError = 'Queen must be placed on the board'
      expect(() => new QueenAttack(positioning)).toThrow(expectedError)
    })

    xit('queen must have column on board', () => {
      const positioning = { white: [4, 8] } as const
      const expectedError = 'Queen must be placed on the board'
      expect(() => new QueenAttack(positioning)).toThrow(expectedError)
    })

    xit('two queens cannot occupy the same space', () => {
      const positioning = { white: [2, 4], black: [2, 4] } as const
      const expectedError = 'Queens cannot share the same space'
      expect(() => new QueenAttack(positioning)).toThrow(expectedError)
    })
  })

  describe('Test the ability of one queen to attack another', () => {
    xit('queens cannot attack', () => {
      const queens = new QueenAttack({ white: [2, 4], black: [6, 6] })
      expect(queens.canAttack).toEqual(false)
    })

    xit('queens can attack when they are on the same row', () => {
      const queens = new QueenAttack({ white: [2, 4], black: [2, 6] })
      expect(queens.canAttack).toEqual(true)
    })

    xit('queens can attack when they are on the same column', () => {
      const queens = new QueenAttack({ white: [4, 5], black: [2, 5] })
      expect(queens.canAttack).toEqual(true)
    })

    xit('queens can attack diagonally', () => {
      const queens = new QueenAttack({ white: [2, 2], black: [0, 4] })
      expect(queens.canAttack).toEqual(true)
    })

    xit('queens can attack another diagonally', () => {
      const queens = new QueenAttack({ white: [2, 2], black: [3, 1] })
      expect(queens.canAttack).toEqual(true)
    })

    xit('queens can attack yet another diagonally', () => {
      const queens = new QueenAttack({ white: [2, 2], black: [1, 1] })
      expect(queens.canAttack).toEqual(true)
    })

    xit('queens can attack diagonally, really', () => {
      const queens = new QueenAttack({ white: [1, 7], black: [0, 6] })
      expect(queens.canAttack).toEqual(true)
    })

    xit('queens can attack on a north-east/south-west diagonal', () => {
      const queens = new QueenAttack({ white: [7, 0], black: [0, 7] })
      expect(queens.canAttack).toEqual(true)
    })

    xit('queens can attack on another ne/sw diagonal', () => {
      const queens = new QueenAttack({ white: [2, 6], black: [5, 3] })
      expect(queens.canAttack).toEqual(true)
    })
  })

  describe('Test the board visualisation', () => {
    xit('board', () => {
      const positioning = { white: [3, 2], black: [6, 5] } as const
      const queens = new QueenAttack(positioning)
      const board = [
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ W _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ B _ _',
        '_ _ _ _ _ _ _ _',
      ].join('\n')
      expect(queens.toString()).toEqual(board)
    })

    xit('board with queens at their starting positions', () => {
      const queens = new QueenAttack()
      const board = [
        '_ _ _ B _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ W _ _ _ _',
      ].join('\n')
      expect(queens.toString()).toEqual(board)
    })

    xit('board with the black queen at her starting positions', () => {
      const queens = new QueenAttack({ white: [1, 6] })
      const board = [
        '_ _ _ B _ _ _ _',
        '_ _ _ _ _ _ W _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
      ].join('\n')
      expect(queens.toString()).toEqual(board)
    })

    xit('board with queens at the edges', () => {
      const positioning = { white: [0, 0], black: [7, 7] } as const
      const queens = new QueenAttack(positioning)
      const board = [
        'W _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ B',
      ].join('\n')
      expect(queens.toString()).toEqual(board)
    })
  })
})
