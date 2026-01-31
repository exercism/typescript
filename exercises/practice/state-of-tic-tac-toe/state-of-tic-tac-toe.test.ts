import { describe, expect, it, xit } from '@jest/globals'
import { gamestate } from './state-of-tic-tac-toe.ts'

describe('state-of-tic-tac-toe', () => {
  describe('Won games', () => {
    it('Finished game where X won via left column victory', () => {
      const board = ['XOO', 'X  ', 'X  ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via middle column victory', () => {
      const board = ['OXO', ' X ', ' X ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via right column victory', () => {
      const board = ['OOX', '  X', '  X']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via left column victory', () => {
      const board = ['OXX', 'OX ', 'O  ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via middle column victory', () => {
      const board = ['XOX', ' OX', ' O ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via right column victory', () => {
      const board = ['XXO', ' XO', '  O']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via top row victory', () => {
      const board = ['XXX', 'XOO', 'O  ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via middle row victory', () => {
      const board = ['O  ', 'XXX', ' O ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via bottom row victory', () => {
      const board = [' OO', 'O X', 'XXX']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via top row victory', () => {
      const board = ['OOO', 'XXO', 'XX ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via middle row victory', () => {
      const board = ['XX ', 'OOO', 'X  ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via bottom row victory', () => {
      const board = ['XOX', ' XX', 'OOO']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via falling diagonal victory', () => {
      const board = ['XOO', ' X ', '  X']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via rising diagonal victory', () => {
      const board = ['O X', 'OX ', 'X  ']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via falling diagonal victory', () => {
      const board = ['OXX', 'OOX', 'X O']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where O won via rising diagonal victory', () => {
      const board = ['  O', ' OX', 'OXX']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via a row and a column victory', () => {
      const board = ['XXX', 'XOO', 'XOO']
      expect(gamestate(board)).toEqual('win')
    })

    xit('Finished game where X won via two diagonal victories', () => {
      const board = ['XOX', 'OXO', 'XOX']
      expect(gamestate(board)).toEqual('win')
    })
  })

  describe('Draw games', () => {
    xit('Draw', () => {
      const board = ['XOX', 'XXO', 'OXO']
      expect(gamestate(board)).toEqual('draw')
    })

    xit('Another draw', () => {
      const board = ['XXO', 'OXX', 'XOO']
      expect(gamestate(board)).toEqual('draw')
    })
  })

  describe('Ongoing games', () => {
    xit('Ongoing game: one move in', () => {
      const board = ['   ', 'X  ', '   ']
      expect(gamestate(board)).toEqual('ongoing')
    })

    xit('Ongoing game: two moves in', () => {
      const board = ['O  ', ' X ', '   ']
      expect(gamestate(board)).toEqual('ongoing')
    })

    xit('Ongoing game: five moves in', () => {
      const board = ['X  ', ' XO', 'OX ']
      expect(gamestate(board)).toEqual('ongoing')
    })
  })

  describe('Invalid boards', () => {
    xit('Invalid board: X went twice', () => {
      const board = ['XX ', '   ', '   ']
      expect(() => {
        gamestate(board)
      }).toThrow('Wrong turn order: X went twice')
    })

    xit('Invalid board: O started', () => {
      const board = ['OOX', '   ', '   ']
      expect(() => {
        gamestate(board)
      }).toThrow('Wrong turn order: O started')
    })

    xit('Invalid board: X won and O kept playing', () => {
      const board = ['XXX', 'OOO', '   ']
      expect(() => {
        gamestate(board)
      }).toThrow(
        'Impossible board: game should have ended after the game was won'
      )
    })

    xit('Invalid board: players kept playing after a win', () => {
      const board = ['XXX', 'OOO', 'XOX']
      expect(() => {
        gamestate(board)
      }).toThrow(
        'Impossible board: game should have ended after the game was won'
      )
    })
  })
})
