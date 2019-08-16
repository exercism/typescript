class VariableLengthQuantity {
    static LENGTH = 7
    static CONT_BITS = 1 << VariableLengthQuantity.LENGTH
    static DATA_BITS = VariableLengthQuantity.CONT_BITS - 1

    static buf: number[] = []

    static encodeOne(val: number) {
        this.buf = []
        let left = val

        while (left) {
            const bits = left & this.DATA_BITS | this.CONT_BITS // set continuation everywhere
            left = left >>> this.LENGTH
            this.buf.push(bits)
        }
        this.buf[0] = this.buf[0] & this.DATA_BITS // cancel the last continuation
        return this.buf.reverse()
    }

    static decodeOne(buf: number[]) {
        let val = 0

        for (let i = 0; i <= buf.length - 1; i++) {
            val = val << this.LENGTH | buf[i] & this.DATA_BITS
        }
        return val >>> 0 // convert to unsigned 32-bit
    }

    static encode(data: number[]): number[] {
        let buf: number[] = []

        for (let i = 0; i <= data.length - 1; i++) {
            buf = buf.concat(this.encodeOne(data[i]))
        }
        return buf
    }
    static decode(data: number[]): number[] {
        let start = 0
        const vals = []

        for (let i = 0; i < data.length; i++) {
            if (~data[i] & this.CONT_BITS) {
                vals.push(this.decodeOne(data.slice(start, i + 1)))
                start = i + 1
            }
        }
        if (start < data.length) {
            throw new Error('Incomplete sequence')
        }
        return vals
    }
}

export default VariableLengthQuantity
