import { encode, decode } from './variable-length-quantity'

describe('VariableLengthQuantity', () => {
  describe('Encode a series of integers, producing a series of bytes.', () => {
    it('zero', () => {
      expect(encode([0])).toEqual([0])
    })

    xit('arbitrary single byte', () => {
      expect(encode([0x40])).toEqual([0x40])
    })

    xit('largest single byte', () => {
      expect(encode([0x7f])).toEqual([0x7f])
    })

    xit('smallest double byte', () => {
      expect(encode([0x80])).toEqual([0x81, 0])
    })

    xit('arbitrary double byte', () => {
      expect(encode([0x2000])).toEqual([0xc0, 0])
    })

    xit('largest double byte', () => {
      expect(encode([0x3fff])).toEqual([0xff, 0x7f])
    })

    xit('smallest triple byte', () => {
      expect(encode([0x4000])).toEqual([0x81, 0x80, 0])
    })

    xit('arbitrary triple byte', () => {
      expect(encode([0x100000])).toEqual([0xc0, 0x80, 0])
    })

    xit('largest triple byte', () => {
      expect(encode([0x1fffff])).toEqual([0xff, 0xff, 0x7f])
    })

    xit('smallest quadruple byte', () => {
      expect(encode([0x200000])).toEqual([0x81, 0x80, 0x80, 0])
    })

    xit('arbitrary quadruple byte', () => {
      expect(encode([0x8000000])).toEqual([0xc0, 0x80, 0x80, 0])
    })

    xit('largest quadruple byte', () => {
      expect(encode([0xfffffff])).toEqual([0xff, 0xff, 0xff, 0x7f])
    })

    xit('smallest quintuple byte', () => {
      expect(encode([0x10000000])).toEqual([0x81, 0x80, 0x80, 0x80, 0])
    })

    xit('arbitrary quintuple byte', () => {
      expect(encode([0xff000000])).toEqual([0x8f, 0xf8, 0x80, 0x80, 0])
    })

    xit('maximum 32-bit integer input', () => {
      expect(encode([0xffffffff])).toEqual([0x8f, 0xff, 0xff, 0xff, 0x7f])
    })

    xit('two single-byte values', () => {
      expect(encode([0x40, 0x7f])).toEqual([0x40, 0x7f])
    })

    xit('two multi-byte values', () => {
      expect(encode([0x4000, 0x123456])).toEqual([
        0x81, 0x80, 0, 0xc8, 0xe8, 0x56,
      ])
    })

    xit('many multi-byte values', () => {
      const input = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000]
      const expected = [
        0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81,
        0x80, 0,
      ]
      expect(encode(input)).toEqual(expected)
    })
  })

  describe('Decode a series of bytes, producing a series of integers.', () => {
    xit('one byte', () => {
      expect(decode([0x7f])).toEqual([0x7f])
    })

    xit('two bytes', () => {
      expect(decode([0xc0, 0])).toEqual([0x2000])
    })

    xit('three bytes', () => {
      expect(decode([0xff, 0xff, 0x7f])).toEqual([0x1fffff])
    })

    xit('four bytes', () => {
      expect(decode([0x81, 0x80, 0x80, 0])).toEqual([0x200000])
    })

    xit('maximum 32-bit integer', () => {
      expect(decode([0x8f, 0xff, 0xff, 0xff, 0x7f])).toEqual([0xffffffff])
    })

    xit('incomplete sequence causes error', () => {
      expect(() => {
        decode([0xff])
      }).toThrowError('Incomplete sequence')
    })

    xit('incomplete sequence causes error, even if value is zero', () => {
      expect(() => {
        decode([0x80])
      }).toThrowError('Incomplete sequence')
    })

    xit('multiple values', () => {
      const input = [
        0xc0, 0, 0xc8, 0xe8, 0x56, 0xff, 0xff, 0xff, 0x7f, 0, 0xff, 0x7f, 0x81,
        0x80, 0,
      ]
      const expected = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000]
      expect(decode(input)).toEqual(expected)
    })
  })
})
