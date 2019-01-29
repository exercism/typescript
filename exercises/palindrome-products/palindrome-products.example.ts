interface Input { maxFactor: number, minFactor?: number }
interface Palindrome { value: number, factors: Array<[number, number]> }
interface Output { largest: Palindrome, smallest: Palindrome }

function generate({ maxFactor, minFactor = 1 }: Input): Output {
  const factors = Array.from({ length: (maxFactor - minFactor + 1) }, (_, k) => k + minFactor)
  const products: Map<number, Array<[number, number]>> = new Map<number, Array<[number, number]>>()

  let min: number = Infinity
  let max: number = 0

  factors.forEach((x: number, index: number) => {
    factors.slice(index).forEach((y) => {
      const product = x * y
      if (isPalidrome(product)) {
        const factorPair: [number, number] = [x, y]
        const newFactors = products.get(product) || []
        newFactors.push(factorPair)
        products.set(product, newFactors)

        min = Math.min(min, product)
        max = Math.max(max, product)
      }
    })
  })

  const largest: Palindrome = { value: max, factors: products.get(max) || [] }
  const smallest: Palindrome = { value: min, factors: products.get(min) || [] }

  return { largest, smallest }
}

function isPalidrome(x: number): boolean {
  const a = x.toString()
  const b = [...a].reverse().join('')

  return a === b
}

export default generate