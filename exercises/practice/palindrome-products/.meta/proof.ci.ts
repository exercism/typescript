interface Input {
  maxFactor: number
  minFactor?: number
}

type Factors = [number, number][]
interface PalindromeShape {
  value: number | null
  factors: Factors
}

const reverseString = (str: string): string => str.split('').reverse().join('')

class Palindrome implements PalindromeShape {
  public readonly value: number
  public readonly factors: Factors

  constructor(factor1: number, factor2: number) {
    this.value = factor1 * factor2
    this.factors = [[factor1, factor2].sort() as [number, number]]
  }

  public withFactors(factors: Factors[number]): this {
    this.factors.push(factors.sort())
    this.factors.sort()

    return this
  }

  public valid(): boolean {
    const s = `${this.value}`
    return s === reverseString(s)
  }

  public merge(other: Palindrome): this {
    other.factors.forEach((f) => {
      this.factors.push(f)
    })
    this.factors.sort()

    return this
  }
}
class Palindromes {
  constructor(public maxFactor: number, public minFactor = 1) {}

  public get largest(): PalindromeShape {
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

  public get smallest(): PalindromeShape {
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

export function generate(params: Input): Palindromes {
  if ((params.minFactor || 1) > params.maxFactor) {
    throw new Error('min must be <= max')
  }
  return new Palindromes(params.maxFactor, params.minFactor || 1)
}
