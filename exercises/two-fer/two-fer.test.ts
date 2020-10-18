import { twoFer } from './two-fer'

describe('TwoFer', () => {
  it('no name given', () => {
    const expected = 'One for you, one for me.'
    expect(twoFer()).toEqual(expected)
  })

  xit('a name given', () => {
    const expected = 'One for Alice, one for me.'
    expect(twoFer('Alice')).toEqual(expected)
  })

  xit('another name given', () => {
    const expected = 'One for Bob, one for me.'
    expect(twoFer('Bob')).toEqual(expected)
  })
})
