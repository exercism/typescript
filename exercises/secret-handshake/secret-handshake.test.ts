import HandShake from './secret-handshake'

describe('Create a handshake for a number', () => {
  it('wink for 1', () => {
    const handshake = new HandShake(1)
    const expected = ['wink']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('double blink for 10', () => {
    const handshake = new HandShake(2)
    const expected = ['double blink']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('close your eyes for 100', () => {
    const handshake = new HandShake(4)
    const expected = ['close your eyes']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('jump for 1000', () => {
    const handshake = new HandShake(8)
    const expected = ['jump']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('combine two actions', () => {
    const handshake = new HandShake(3)
    const expected = ['wink', 'double blink']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('reverse two actions', () => {
    const handshake = new HandShake(19)
    const expected = ['double blink', 'wink']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('reversing one action gives the same action', () => {
    const handshake = new HandShake(24)
    const expected = ['jump']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('reversing no actions still gives no actions', () => {
    const handshake = new HandShake(16)
    const expected: string[] = []
    expect(handshake.commands()).toEqual(expected)
  })

  xit('all possible actions', () => {
    const handshake = new HandShake(15)
    const expected = ['wink', 'double blink', 'close your eyes', 'jump']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('reverse all possible actions', () => {
    const handshake = new HandShake(31)
    const expected = ['jump', 'close your eyes', 'double blink', 'wink']
    expect(handshake.commands()).toEqual(expected)
  })

  xit('do nothing for zero', () => {
    const handshake = new HandShake(0)
    const expected: string[] = []
    expect(handshake.commands()).toEqual(expected)
  })
})
