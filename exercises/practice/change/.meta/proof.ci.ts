export const findFewestCoins = (coins: number[], target: number): number[] => {
  if (target < 0) throw new Error("target can't be negative")

  if (target === 0) return []

  const queue = [0]
  const visited: Record<number, number[]> = { 0: [] }

  while (queue.length > 0) {
    const initialBalance = queue.shift()!

    for (const coin of coins) {
      const updatedBalance = initialBalance + coin

      if (updatedBalance > target || updatedBalance in visited)
        continue

      const usedCoins = [...visited[initialBalance], coin]

      if (updatedBalance === target) {
        return usedCoins.sort((a, b) => a - b)
      }

      visited[updatedBalance] = usedCoins
      queue.push(updatedBalance)
    }
  }

  throw new Error("can't make target with given coins")
}
