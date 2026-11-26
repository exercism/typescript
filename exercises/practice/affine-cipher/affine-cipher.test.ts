import { describe, expect, it, xit } from '@jest/globals'
import { encode, decode } from './affine-cipher.ts'

describe('Affine Cipher', () => {
  describe('encode', () => {
    it('encode yes', () => {
      const key = { a: 5, b: 7 }
      expect(encode('yes', key)).toEqual('xbt')
    })

    xit('encode no', () => {
      const key = { a: 15, b: 18 }
      expect(encode('no', key)).toEqual('fu')
    })

    xit('encode OMG', () => {
      const key = { a: 21, b: 3 }
      expect(encode('OMG', key)).toEqual('lvz')
    })

    xit('encode O M G', () => {
      const key = { a: 25, b: 47 }
      expect(encode('O M G', key)).toEqual('hjp')
    })

    xit('encode mindblowingly', () => {
      const key = { a: 11, b: 15 }
      expect(encode('mindblowingly', key)).toEqual('rzcwa gnxzc dgt')
    })

    xit('encode numbers', () => {
      const key = { a: 3, b: 4 }
      expect(encode('Testing,1 2 3, testing.', key)).toEqual(
        'jqgjc rw123 jqgjc rw'
      )
    })

    xit('encode deep thought', () => {
      const key = { a: 5, b: 17 }
      expect(encode('Truth is fiction.', key)).toEqual('iynia fdqfb ifje')
    })

    xit('encode all the letters', () => {
      const key = { a: 17, b: 33 }
      const phrase = 'The quick brown fox jumps over the lazy dog.'
      const expected = 'swxtj npvyk lruol iejdc blaxk swxmh qzglf'
      expect(encode(phrase, key)).toEqual(expected)
    })

    xit('encode with a not coprime to m', () => {
      const key = { a: 6, b: 17 }
      expect(() => encode('This is a test.', key)).toThrow(
        'a and m must be coprime.'
      )
    })
  })

  describe('decode', () => {
    xit('decode exercism', () => {
      const key = { a: 3, b: 7 }
      expect(decode('tytgn fjr', key)).toEqual('exercism')
    })

    xit('decode a sentence', () => {
      const key = { a: 19, b: 16 }
      const phrase = 'qdwju nqcro muwhn odqun oppmd aunwd o'
      const expected = 'anobstacleisoftenasteppingstone'
      expect(decode(phrase, key)).toEqual(expected)
    })

    xit('decode numbers', () => {
      const key = { a: 25, b: 7 }
      expect(decode('odpoz ub123 odpoz ub', key)).toEqual('testing123testing')
    })

    xit('decode all the letters', () => {
      const key = { a: 17, b: 33 }
      const phrase = 'swxtj npvyk lruol iejdc blaxk swxmh qzglf'
      const expected = 'thequickbrownfoxjumpsoverthelazydog'
      expect(decode(phrase, key)).toEqual(expected)
    })

    xit('decode with no spaces in input', () => {
      const key = { a: 17, b: 33 }
      const phrase = 'swxtjnpvyklruoliejdcblaxkswxmhqzglf'
      const expected = 'thequickbrownfoxjumpsoverthelazydog'
      expect(decode(phrase, key)).toEqual(expected)
    })

    xit('decode with too many spaces', () => {
      const key = { a: 15, b: 16 }
      expect(decode('vszzm    cly   yd cg    qdp', key)).toEqual(
        'jollygreengiant'
      )
    })

    xit('decode with a not coprime to m', () => {
      const key = { a: 13, b: 5 }
      expect(() => decode('Test', key)).toThrow('a and m must be coprime.')
    })
  })
})
