import { describe, it, expect } from '@jest/globals'
import { hello } from './hello-world.ts'

describe('Hello World', () => {
  it('says hello world', () => {
    expect(hello()).toEqual('Hello, World!')
  })
})
