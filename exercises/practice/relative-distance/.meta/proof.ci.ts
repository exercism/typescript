export const degreesOfSeparation = (
  familyTree: Record<string, string[]>,
  personA: string,
  personB: string
) => {
  const neighbors = new Map<string, Set<string>>()

  // Build adjacency list
  for (const [parent, children] of Object.entries(familyTree)) {
    const parentNeighbors = neighbors.get(parent) ?? new Set()
    neighbors.set(parent, parentNeighbors)

    for (const child of children) {
      const childNeighbors = neighbors.get(child) ?? new Set()
      neighbors.set(child, childNeighbors)

      parentNeighbors.add(child)
      childNeighbors.add(parent)

      // Connect siblings
      for (const sibling of children) {
        if (child !== sibling) {
          childNeighbors.add(sibling)
        }
      }
    }
  }

  if (!neighbors.has(personA) || !neighbors.has(personB)) return -1

  // BFS setup
  const queue: [string, number][] = [[personA, 0]]
  const visited = new Set([personA])

  while (queue.length > 0) {
    const [current, degree] = queue.shift()!

    if (current === personB) return degree

    for (const neighbor of neighbors.get(current)!) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, degree + 1])
      }
    }
  }

  return -1
}
