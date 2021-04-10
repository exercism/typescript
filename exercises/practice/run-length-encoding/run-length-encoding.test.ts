import { encode, decode } from './run-length-encoding'

describe('run-length encode a string', () => {
  it('empty string', () => {
    const expected = ''
    expect(encode('')).toEqual(expected)
  })

  it('single characters only are encoded without count', () => {
    const expected = 'XYZ'
    expect(encode('XYZ')).toEqual(expected)
  })

  it('string with no single characters', () => {
    const expected = '2A3B4C'
    expect(encode('AABBBCCCC')).toEqual(expected)
  })

  it('single characters mixed with repeated characters', () => {
    const expected = '12WB12W3B24WB'
    expect(
      encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')
    ).toEqual(expected)
  })

  it('multiple whitespace mixed in string', () => {
    const expected = '2 hs2q q2w2 '
    expect(encode('  hsqq qww  ')).toEqual(expected)
  })

  it('lowercase characters', () => {
    const expected = '2a3b4c'
    expect(encode('aabbbcccc')).toEqual(expected)
  })
})

describe('run-length decode a string', () => {
  it('empty string', () => {
    const expected = ''
    expect(decode('')).toEqual(expected)
  })

  it('single characters only', () => {
    const expected = 'XYZ'
    expect(decode('XYZ')).toEqual(expected)
  })

  it('string with no single characters', () => {
    const expected = 'AABBBCCCC'
    expect(decode('2A3B4C')).toEqual(expected)
  })

  it('single characters with repeated characters', () => {
    const expected = 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB'
    expect(decode('12WB12W3B24WB')).toEqual(expected)
  })

  it('multiple whitespace mixed in string', () => {
    const expected = '  hsqq qww  '
    expect(decode('2 hs2q q2w2 ')).toEqual(expected)
  })

  it('lower case string', () => {
    const expected = 'aabbbcccc'
    expect(decode('2a3b4c')).toEqual(expected)
  })
})

describe('encode and then decode', () => {
  it('encode followed by decode gives original string', () => {
    expect(decode(encode('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ')
  })
})
