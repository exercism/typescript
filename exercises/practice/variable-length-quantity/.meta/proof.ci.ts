const LENGTH = 7
const CONT_BITS = 1 << LENGTH
const DATA_BITS = CONT_BITS - 1

function encodeOne(val: number): number[] {
  const buf: number[] = []
  let left = val

  while (left) {
    const bits = (left & DATA_BITS) | CONT_BITS // set continuation everywhere
    left = left >>> LENGTH
    buf.push(bits)
  }
  buf[0] = buf[0] & DATA_BITS // cancel the last continuation
  return buf.reverse()
}

function decodeOne(buf: number[]): number {
  let val = 0

  for (let i = 0; i <= buf.length - 1; i++) {
    val = (val << LENGTH) | (buf[i] & DATA_BITS)
  }
  return val >>> 0 // convert to unsigned 32-bit
}

export function encode(data: number[]): number[] {
  let buf: number[] = []

  for (let i = 0; i <= data.length - 1; i++) {
    buf = buf.concat(encodeOne(data[i]))
  }
  return buf
}

export function decode(data: number[]): number[] {
  let start = 0
  const vals = []

  for (let i = 0; i < data.length; i++) {
    if (~data[i] & CONT_BITS) {
      vals.push(decodeOne(data.slice(start, i + 1)))
      start = i + 1
    }
  }
  if (start < data.length) {
    throw new Error('Incomplete sequence')
  }
  return vals
}
