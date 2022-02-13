import { DiffieHellman } from './diffie-hellman'

describe('diffie-hellman', () => {
  it('throws an error if the constructor arguments are out of range', () => {
    expect(() => {
      new DiffieHellman(0, 9999)
    }).toThrow()
  })

  xit('throws an error if the constructor arguments are not prime', () => {
    expect(() => {
      new DiffieHellman(10, 13)
    }).toThrow()
  })

  describe('input validation', () => {
    const p = 23
    const g = 5
    const diffieHellman = new DiffieHellman(p, g)

    xit('throws an error if private key is negative', () => {
      expect(() => {
        diffieHellman.getPublicKey(-1)
      }).toThrow()
    })

    xit('throws an error if private key is zero', () => {
      expect(() => {
        diffieHellman.getPublicKey(0)
      }).toThrow()
    })

    xit('throws an error if private key is one', () => {
      expect(() => {
        diffieHellman.getPublicKey(1)
      }).toThrow()
    })

    xit('throws an error if private key equals the modulus parameter p', () => {
      expect(() => {
        diffieHellman.getPublicKey(p)
      }).toThrow()
    })

    xit('throws an error if private key is greater than the modulus parameter p', () => {
      expect(() => {
        diffieHellman.getPublicKey(p + 1)
      }).toThrow()
    })
  })

  describe('stateless calculation', () => {
    const diffieHellman = new DiffieHellman(23, 5)

    const alicePrivateKey = 6
    const alicePublicKey = 8

    const bobPrivateKey = 15
    const bobPublicKey = 19

    xit('can calculate public key using private key', () => {
      expect(diffieHellman.getPublicKey(alicePrivateKey)).toEqual(
        alicePublicKey
      )
    })

    xit('can calculate public key when given a different private key', () => {
      expect(diffieHellman.getPublicKey(bobPrivateKey)).toEqual(bobPublicKey)
    })
  })

  xit("can calculate secret using other party's public key", () => {
    expect(new DiffieHellman(23, 5).getSecret(19, 6)).toEqual(2)
  })

  xit('key exchange', () => {
    const diffieHellman = new DiffieHellman(23, 5)

    const alicePrivateKey = 6
    const bobPrivateKey = 15
    const alicePublicKey = diffieHellman.getPublicKey(alicePrivateKey)
    const bobPublicKey = diffieHellman.getPublicKey(bobPrivateKey)

    const secretA = diffieHellman.getSecret(bobPublicKey, alicePrivateKey)
    const secretB = diffieHellman.getSecret(alicePublicKey, bobPrivateKey)

    expect(secretA).toEqual(secretB)
  })
})
