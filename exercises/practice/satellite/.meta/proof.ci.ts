export type Tree = {
  v?: string
  l?: Tree
  r?: Tree
}

const hasUniqueItems = (items: string[]): boolean =>
  new Set(items).size === items.length

const hasSameItems = (left: string[], right: string[]): boolean => {
  const rightItems = new Set(right)
  return left.every((item) => rightItems.has(item))
}

const validateTraversals = (preorder: string[], inorder: string[]): void => {
  if (preorder.length !== inorder.length) {
    throw new Error('traversals must have the same length')
  }

  if (!hasUniqueItems(preorder) || !hasUniqueItems(inorder)) {
    throw new Error('traversals must contain unique items')
  }

  if (!hasSameItems(preorder, inorder)) {
    throw new Error('traversals must have the same elements')
  }
}

const buildTree = (preorder: string[], inorder: string[]): Tree => {
  if (preorder.length === 0) {
    return {}
  }

  const [root, ...remainingPreorder] = preorder
  const rootIndex = inorder.indexOf(root)
  const leftInorder = inorder.slice(0, rootIndex)
  const rightInorder = inorder.slice(rootIndex + 1)
  const leftSize = leftInorder.length
  const leftPreorder = remainingPreorder.slice(0, leftSize)
  const rightPreorder = remainingPreorder.slice(leftSize)

  return {
    v: root,
    l: buildTree(leftPreorder, leftInorder),
    r: buildTree(rightPreorder, rightInorder),
  }
}

export const treeFromTraversals = (
  preorder: string[],
  inorder: string[]
): Tree => {
  validateTraversals(preorder, inorder)

  return buildTree(preorder, inorder)
}
