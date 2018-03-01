import TwoFer from './two-fer'

describe('TwoFer', () => {
  it('no name given', () => {
    const expected = 'One for you, one for me.'
    expect(TwoFer.twoFer()).toEqual(expected)
  })

  it('a name given', () => {
    const expected = 'One for Alice, one for me.'
    expect(TwoFer.twoFer('Alice')).toEqual(expected)
  })

  it('another name given', () => {
    const expected = 'One for Bob, one for me.'
    expect(TwoFer.twoFer('Bob')).toEqual(expected)
  })
})
