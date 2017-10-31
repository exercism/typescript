
import AtbashCipher from "./atbash-cipher"

describe('encode', () => {

  it('encode yes', () => {
    expect(AtbashCipher.encode('yes')).toEqual('bvh')
  })

  xit('encode no', () => {
    expect(AtbashCipher.encode('no')).toEqual('ml')
  })

  xit('encode OMG', () => {
    expect(AtbashCipher.encode('OMG')).toEqual('lnt')
  })
  
  xit('encode spaces', () => {
    expect(AtbashCipher.encode('O M G')).toEqual('lnt')
  })
  
  xit('encode mindblowingly', () => {
    expect(AtbashCipher.encode('mindblowingly')).toEqual('nrmwy oldrm tob')
  })
  
  xit('encode numbers', () => {
    expect(AtbashCipher.encode('Testing,1 2 3, testing.')).toEqual('gvhgr mt123 gvhgr mt')
  })
  
  xit('encode deep thought', () => {
    expect(AtbashCipher.encode('Truth is fiction')).toEqual('gifgs rhurx grlm')
  })
  
  xit('encode all the letters', () => {
    expect(AtbashCipher.encode('The quick brown fox jumps over the lazy dog.')).toEqual('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt')
  })
})

describe('decode', () => {

  it('decode exercism', () => {
    expect(AtbashCipher.decode('vcvix rhn')).toEqual('exercism')
  })
  
  xit('decode a sentence', () => {
    expect(AtbashCipher.decode('zmlyh gzxov rhlug vmzhg vkkrm thglm v')).toEqual('anobstacleisoftenasteppingstone')
  })
  
  xit('decode numbers', () => {
    expect(AtbashCipher.decode('gvhgr mt123 gvhgr mt')).toEqual('testing123testing')
  })
  
  xit('decode all the letters', () => {
    expect(AtbashCipher.decode('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt')).toEqual('thequickbrownfoxjumpsoverthelazydog')
  })

})
