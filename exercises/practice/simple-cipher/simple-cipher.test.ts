import SimpleCipher from './simple-cipher'

describe('Random key generation', () => {
  xit('generates keys at random', () => {
    // Strictly speaking, this is difficult to test with 100% certainty.
    // But, if you have a generator that generates 100-character-long
    // strings of lowercase letters at random, the odds of two consecutively
    // generated keys being identical are astronomically low.
    expect(new SimpleCipher().key).not.toEqual(new SimpleCipher().key)
  })
})

describe('Random key cipher', () => {
  const simpleCipher = new SimpleCipher()

  it('has a key made of letters', () => {
    expect(simpleCipher.key).toMatch(/^[a-z]+$/)
  })

  xit('has a key that is at least 100 characters long', () => {
    expect(simpleCipher.key.length).toBeGreaterThanOrEqual(100)
  })

  // Here we take advantage of the fact that plaintext of "aaa..."
  // outputs the key. This is a critical problem with shift ciphers, some
  // characters will always output the key verbatim.
  xit('can encode', () => {
    expect(simpleCipher.encode('aaaaaaaaaa')).toEqual(
      simpleCipher.key.substr(0, 10)
    )
  })

  xit('can decode', () => {
    expect(simpleCipher.decode(simpleCipher.key.substr(0, 10))).toEqual(
      'aaaaaaaaaa'
    )
  })

  xit('is reversible', () => {
    const plaintext = 'abcdefghij'
    expect(simpleCipher.decode(simpleCipher.encode(plaintext))).toEqual(
      plaintext
    )
  })
})

describe('Substitution cipher', () => {
  const key = 'abcdefghij'
  const simpleCipher = new SimpleCipher(key)

  xit('keeps the submitted key', () => {
    expect(simpleCipher.key).toEqual(key)
  })

  xit('can encode', () => {
    expect(simpleCipher.encode('aaaaaaaaaa')).toEqual('abcdefghij')
  })

  xit('can decode', () => {
    expect(simpleCipher.decode('abcdefghij')).toEqual('aaaaaaaaaa')
  })

  xit('is reversible', () => {
    expect(simpleCipher.decode(simpleCipher.encode('abcdefghij'))).toEqual(
      'abcdefghij'
    )
  })

  xit(': double shift encode', () => {
    expect(new SimpleCipher('iamapandabear').encode('iamapandabear')).toEqual(
      'qayaeaagaciai'
    )
  })

  xit('can wrap on encode', () => {
    expect(simpleCipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi')
  })

  xit('can wrap on decode', () => {
    expect(simpleCipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz')
  })

  xit('can encode messages longer than the key"', () => {
    expect(new SimpleCipher('abc').encode('iamapandabear')).toEqual(
      'iboaqcnecbfcr'
    )
  })

  xit('can decode messages longer than the key', () => {
    expect(new SimpleCipher('abc').decode('iboaqcnecbfcr')).toEqual(
      'iamapandabear'
    )
  })
})
