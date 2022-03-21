import { Tournament } from './tournament'

describe('Tournament', () => {
  it('just the header if no input', () => {
    expect(new Tournament().tally('')).toBe(
      'Team                           | MP |  W |  D |  L |  P'
    )
  })

  it('a win is three points, a loss is zero points', () => {
    expect(
      new Tournament().tally('Allegoric Alaskans;Blithering Badgers;win')
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3',
        'Blithering Badgers             |  1 |  0 |  0 |  1 |  0',
      ].join('\n')
    )
  })

  it('a win can also be expressed as a loss', () => {
    expect(
      new Tournament().tally('Blithering Badgers;Allegoric Alaskans;loss')
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3',
        'Blithering Badgers             |  1 |  0 |  0 |  1 |  0',
      ].join('\n')
    )
  })

  it('a different team can win', () => {
    expect(
      new Tournament().tally('Blithering Badgers;Allegoric Alaskans;win')
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Blithering Badgers             |  1 |  1 |  0 |  0 |  3',
        'Allegoric Alaskans             |  1 |  0 |  0 |  1 |  0',
      ].join('\n')
    )
  })

  it('a draw is one point each', () => {
    expect(
      new Tournament().tally('Allegoric Alaskans;Blithering Badgers;draw')
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1',
        'Blithering Badgers             |  1 |  0 |  1 |  0 |  1',
      ].join('\n')
    )
  })

  it('There can be more than one match', () => {
    expect(
      new Tournament().tally(
        [
          'Allegoric Alaskans;Blithering Badgers;win',
          'Allegoric Alaskans;Blithering Badgers;win',
        ].join('\n')
      )
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  2 |  2 |  0 |  0 |  6',
        'Blithering Badgers             |  2 |  0 |  0 |  2 |  0',
      ].join('\n')
    )
  })

  it('There can be more than one winner', () => {
    expect(
      new Tournament().tally(
        [
          'Allegoric Alaskans;Blithering Badgers;loss',
          'Allegoric Alaskans;Blithering Badgers;win',
        ].join('\n')
      )
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  2 |  1 |  0 |  1 |  3',
        'Blithering Badgers             |  2 |  1 |  0 |  1 |  3',
      ].join('\n')
    )
  })

  it('There can be more than two teams', () => {
    expect(
      new Tournament().tally(
        [
          'Allegoric Alaskans;Blithering Badgers;win',
          'Blithering Badgers;Courageous Californians;win',
          'Courageous Californians;Allegoric Alaskans;loss',
        ].join('\n')
      )
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  2 |  2 |  0 |  0 |  6',
        'Blithering Badgers             |  2 |  1 |  0 |  1 |  3',
        'Courageous Californians        |  2 |  0 |  0 |  2 |  0',
      ].join('\n')
    )
  })

  it('typical input', () => {
    expect(
      new Tournament().tally(
        [
          'Allegoric Alaskans;Blithering Badgers;win',
          'Devastating Donkeys;Courageous Californians;draw',
          'Devastating Donkeys;Allegoric Alaskans;win',
          'Courageous Californians;Blithering Badgers;loss',
          'Blithering Badgers;Devastating Donkeys;loss',
          'Allegoric Alaskans;Courageous Californians;win',
        ].join('\n')
      )
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Devastating Donkeys            |  3 |  2 |  1 |  0 |  7',
        'Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6',
        'Blithering Badgers             |  3 |  1 |  0 |  2 |  3',
        'Courageous Californians        |  3 |  0 |  1 |  2 |  1',
      ].join('\n')
    )
  })

  it('incomplete competition (not all pairs have played)', () => {
    expect(
      new Tournament().tally(
        [
          'Allegoric Alaskans;Blithering Badgers;loss',
          'Devastating Donkeys;Allegoric Alaskans;loss',
          'Courageous Californians;Blithering Badgers;draw',
          'Allegoric Alaskans;Courageous Californians;win',
        ].join('\n')
      )
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6',
        'Blithering Badgers             |  2 |  1 |  1 |  0 |  4',
        'Courageous Californians        |  2 |  0 |  1 |  1 |  1',
        'Devastating Donkeys            |  1 |  0 |  0 |  1 |  0',
      ].join('\n')
    )
  })

  it('ties broken alphabetically', () => {
    expect(
      new Tournament().tally(
        [
          'Courageous Californians;Devastating Donkeys;win',
          'Allegoric Alaskans;Blithering Badgers;win',
          'Devastating Donkeys;Allegoric Alaskans;loss',
          'Courageous Californians;Blithering Badgers;win',
          'Blithering Badgers;Devastating Donkeys;draw',
          'Allegoric Alaskans;Courageous Californians;draw',
        ].join('\n')
      )
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Allegoric Alaskans             |  3 |  2 |  1 |  0 |  7',
        'Courageous Californians        |  3 |  2 |  1 |  0 |  7',
        'Blithering Badgers             |  3 |  0 |  1 |  2 |  1',
        'Devastating Donkeys            |  3 |  0 |  1 |  2 |  1',
      ].join('\n')
    )
  })

  it('ensure points sorted numerically', () => {
    expect(
      new Tournament().tally(
        [
          'Devastating Donkeys;Blithering Badgers;win',
          'Devastating Donkeys;Blithering Badgers;win',
          'Devastating Donkeys;Blithering Badgers;win',
          'Devastating Donkeys;Blithering Badgers;win',
          'Blithering Badgers;Devastating Donkeys;win',
        ].join('\n')
      )
    ).toBe(
      [
        'Team                           | MP |  W |  D |  L |  P',
        'Devastating Donkeys            |  5 |  4 |  0 |  1 | 12',
        'Blithering Badgers             |  5 |  1 |  0 |  4 |  3',
      ].join('\n')
    )
  })
})
