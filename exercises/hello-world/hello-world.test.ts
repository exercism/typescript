
import HelloWorld from "./hello-world"

describe('Hello World', () => {

  it('says hello world with no name', () => {
    expect(HelloWorld.hello()).toEqual('Hello, World!')
  })

  xit('says hello to bob', () => {
    expect(HelloWorld.hello('Bob')).toEqual('Hello, Bob!')
  })

  xit('says hello to sally', () => {
    expect(HelloWorld.hello('Sally')).toEqual('Hello, Sally!')
  })
})
