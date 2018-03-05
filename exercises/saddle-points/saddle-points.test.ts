import SaddlePoints from './saddle-points'

describe('Saddle Points', () => {
    it('Can identify single saddle point', () => {
        const expected = [
            {row: 1, column: 0}
        ]
        expect(SaddlePoints.saddlePoints([
            [9, 8, 7],
            [5, 3, 2],
            [6, 6, 7]
        ])).toEqual(expected)
    })

    xit('Can identify that empty matrix has no saddle points', () => {
        const expected: number[] = []
        expect(SaddlePoints.saddlePoints([
            []
        ])).toEqual(expected)
    })

    xit('Can identify lack of saddle points when there are none', () => {
        const expected: number[] = []
        expect(SaddlePoints.saddlePoints([
            [1, 2, 3],
            [3, 1, 2],
            [2, 3, 1]
          ])).toEqual(expected)
    })

    xit('Can identify multiple saddle points', () => {
        const expected = [
            {row: 0, column: 1},
            {row: 1, column: 1},
            {row: 2, column: 1}
          ]
        expect(SaddlePoints.saddlePoints([
            [4, 5, 4],
            [3, 5, 5],
            [1, 5, 4]
          ])).toEqual(expected)
    })

    xit('Can identify saddle point in bottom right corner', () => {
        const expected = [
            {row: 2, column: 2}
        ]
        expect(SaddlePoints.saddlePoints([
            [8, 7, 9],
            [6, 7, 6],
            [3, 2, 5]
        ])).toEqual(expected)
    })
})
