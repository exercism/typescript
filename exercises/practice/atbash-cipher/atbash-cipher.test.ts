import { encode, decode } from './atbash-cipher'

describe('AtbashCipher', () => {
  describe('encoding', () => {
    it('encode yes', () => {
      const cipherText = encode('yes')
      expect(cipherText).toEqual('bvh')
    })

    xit('encode no', () => {
      const cipherText = encode('no')
      expect(cipherText).toEqual('ml')
    })

    xit('encode OMG', () => {
      const cipherText = encode('OMG')
      expect(cipherText).toEqual('lnt')
    })

    xit('encode spaces', () => {
      const cipherText = encode('O M G')
      expect(cipherText).toEqual('lnt')
    })

    xit('encode mindblowingly', () => {
      const cipherText = encode('mindblowingly')
      expect(cipherText).toEqual('nrmwy oldrm tob')
    })

    xit('encode numbers', () => {
      const cipherText = encode('Testing,1 2 3, testing.')
      expect(cipherText).toEqual('gvhgr mt123 gvhgr mt')
    })

    xit('encode deep thought', () => {
      const cipherText = encode('Truth is fiction.')
      expect(cipherText).toEqual('gifgs rhurx grlm')
    })

    xit('encode all the letters', () => {
      const cipherText = encode('thequickbrownfoxjumpsoverthelazydog')
      expect(cipherText).toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt')
    })
  })

  xdescribe('decode', () => {
    xit('decode exercism', () => {
      const plainText = decode('vcvix rhn')
      expect(plainText).toEqual('exercism')
    })

    xit('decode a sentence', () => {
      const cipherText = decode('zmlyh gzxov rhlug vmzhg vkkrm thglm v')
      expect(cipherText).toEqual('anobstacleisoftenasteppingstone')
    })

    xit('decode numbers', () => {
      const plainText = decode('gvhgr mt123 gvhgr mt')
      expect(plainText).toEqual('testing123testing')
    })

    xit('decode all the letters', () => {
      const cipherText = decode('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt')
      expect(cipherText).toEqual('thequickbrownfoxjumpsoverthelazydog')
    })
  })
})
