import { hello } from './hello-world'

describe('Hello World', () => {
  it('says hello world with no name', () => {
    expect(hello()).toEqual('Hello, World!')
  })
})
