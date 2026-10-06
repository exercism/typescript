import { describe, expect, it, xit } from '@jest/globals'
import { treeFromTraversals } from './satellite.ts'

describe('Satellite', () => {
  it('Empty tree', () => {
    const preorder: string[] = []
    const inorder: string[] = []
    expect(treeFromTraversals(preorder, inorder)).toEqual({})
  })

  xit('Tree with one item', () => {
    const preorder = ['a']
    const inorder = ['a']
    const expected = { v: 'a', l: {}, r: {} }
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected)
  })

  xit('Tree with many items', () => {
    const preorder = ['a', 'i', 'x', 'f', 'r']
    const inorder = ['i', 'a', 'f', 'x', 'r']
    const expected = {
      v: 'a',
      l: { v: 'i', l: {}, r: {} },
      r: {
        v: 'x',
        l: { v: 'f', l: {}, r: {} },
        r: { v: 'r', l: {}, r: {} },
      },
    }
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected)
  })

  xit('Reject traversals of different length', () => {
    const preorder = ['a', 'b']
    const inorder = ['b', 'a', 'r']
    expect(() => treeFromTraversals(preorder, inorder)).toThrow(
      'traversals must have the same length'
    )
  })

  xit('Reject inconsistent traversals of same length', () => {
    const preorder = ['x', 'y', 'z']
    const inorder = ['a', 'b', 'c']
    expect(() => treeFromTraversals(preorder, inorder)).toThrow(
      'traversals must have the same elements'
    )
  })

  xit('Reject traversals with repeated items', () => {
    const preorder = ['a', 'b', 'a']
    const inorder = ['b', 'a', 'a']
    expect(() => treeFromTraversals(preorder, inorder)).toThrow(
      'traversals must contain unique items'
    )
  })

  xit('A degenerate binary tree', () => {
    const preorder = ['a', 'b', 'c', 'd']
    const inorder = ['d', 'c', 'b', 'a']
    const expected = {
      v: 'a',
      l: {
        v: 'b',
        l: {
          v: 'c',
          l: { v: 'd', l: {}, r: {} },
          r: {},
        },
        r: {},
      },
      r: {},
    }
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected)
  })

  xit('Another degenerate binary tree', () => {
    const preorder = ['a', 'b', 'c', 'd']
    const inorder = ['a', 'b', 'c', 'd']
    const expected = {
      v: 'a',
      l: {},
      r: {
        v: 'b',
        l: {},
        r: {
          v: 'c',
          l: {},
          r: { v: 'd', l: {}, r: {} },
        },
      },
    }
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected)
  })

  xit('Tree with many more items', () => {
    const preorder = ['a', 'b', 'd', 'g', 'h', 'c', 'e', 'f', 'i']
    const inorder = ['g', 'd', 'h', 'b', 'a', 'e', 'c', 'i', 'f']
    const expected = {
      v: 'a',
      l: {
        v: 'b',
        l: {
          v: 'd',
          l: { v: 'g', l: {}, r: {} },
          r: { v: 'h', l: {}, r: {} },
        },
        r: {},
      },
      r: {
        v: 'c',
        l: { v: 'e', l: {}, r: {} },
        r: {
          v: 'f',
          l: { v: 'i', l: {}, r: {} },
          r: {},
        },
      },
    }
    expect(treeFromTraversals(preorder, inorder)).toEqual(expected)
  })
})
