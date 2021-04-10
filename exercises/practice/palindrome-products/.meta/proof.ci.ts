interface Input {
  maxFactor: number
  minFactor?: number
}

interface Palindrome {
  value: number
  factors: Array<[number, number]>
}

const reverseString = (str: string) => str.split('').reverse().join('')

export function generate(params: Input): Palindromes {
  if ((params.minFactor || 1) > params.maxFactor) {
    throw new Error('min must be <= max')
  }
  return new Palindromes(params.maxFactor, params.minFactor || 1)
}

class Palindrome {
  constructor(factor1: number, factor2: number) {
    this.value = factor1 * factor2
    this.factors = [[factor1, factor2].sort() as [number, number]]
  }

  withFactors(factors) {
    this.factors.push(factors.sort())
    this.factors = this.factors.sort()
    return this
  }

  valid() {
    const s = `${this.value}`
    return s === reverseString(s)
  }

  merge(other) {
    other.factors.forEach((f) => this.factors.push(f))
    this.factors = this.factors.sort()
    return this
  }
}

export class Palindromes {
  constructor(public maxFactor: number, public minFactor = 1) {}

  get largest() {
    let best = new Palindrome(this.minFactor, this.minFactor)
    for (let m = this.maxFactor; m >= this.minFactor; m -= 1) {
      let p = null
      for (let n = m; n >= this.minFactor && (!p || !p.valid()); n -= 1) {
        p = new Palindrome(m, n)
        if (p.valid()) {
          if (best.value < p.value) {
            best = p
          } else if (best.value === p.value) {
            best = p.merge(best)
          }
        }
      }
    }
    if (best.valid()) {
      return best
    }
    return { value: null, factors: [] }
  }

  get smallest() {
    for (let m = this.minFactor; m <= this.maxFactor; m += 1) {
      for (let n = this.minFactor; n <= this.maxFactor; n += 1) {
        const p = new Palindrome(m, n)
        if (p.valid()) {
          return p
        }
      }
    }
    return { value: null, factors: [] }
  }
}
