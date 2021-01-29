class Hamming {
  public compute(left: string, right: string): number {
    if (left.length !== right.length) {
      throw new Error('DNA strands must be of equal length.')
    }
    const size = left.length
    const leftArray = left.split('')
    const rightArray = right.split('')
    let count = 0
    for (let i = 0; i < size; i += 1) {
      if (leftArray[i] !== rightArray[i]) {
        count += 1
      }
    }
    return count
  }
}

export default Hamming
