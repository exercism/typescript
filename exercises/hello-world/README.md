# Hello World

The classical introductory exercise. Just say "Hello, World!".

["Hello, World!"](http://en.wikipedia.org/wiki/%22Hello,_world!%22_program) is
the traditional first program for beginning programming in a new language
or environment.

The objectives are simple:

- Write a function that returns the string "Hello, World!".
- Run the test suite and make sure that it succeeds.
- Submit your solution and check it at the website.

If everything goes well, you will be ready to fetch your first real exercise.

## Setup

Go through the setup instructions for TypeScript to
install the necessary dependencies:

http://exercism.io/languages/typescript

## Requirements

Install assignment dependencies:

```bash
$ yarn install
```

## Making the test suite pass

Execute the tests with:

```bash
$ yarn test
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.

## Tutorial

This section is a step-by-step guide to solving this exercise.

This exercise has two files:

- hello-world.ts
- hello-world.test.ts

The first file is where you will write your code.
The second is where the tests are defined.

The tests will check whether your code is doing the right thing.
You don't need to be able to write a test suite from scratch,
but it helps to understand what a test looks like, and what
it is doing.

Open up the test file, hello-world.test.ts.
There are three tests inside:

```typescript
  it('says hello world with no name', () => {
    expect(HelloWorld.hello()).toEqual('Hello, World!')
  })

  xit('says hello to bob', () => {
    expect(HelloWorld.hello('Bob')).toEqual('Hello, Bob!')
  })

  xit('says hello to sally', () => {
    expect(HelloWorld.hello('Sally')).toEqual('Hello, Sally!')
  })
```


Run the tests now, with the following command on the command-line:

```bash
$ yarn test
```

The test fails, which makes sense since you've not written any code yet.

The failure looks like this:

```
$ tsc --noEmit -p . && jest --no-cache
hello-world.test.ts(11,12): error TS2554: Expected 0 arguments, but got 1.
hello-world.test.ts(15,12): error TS2554: Expected 0 arguments, but got 1.
```

The failures go after the `$ tsc ...` line where the `tsc` command triggers typescript compiler to compile the code. Following lines
```
hello-world.test.ts(11,12): error TS2554: Expected 0 arguments, but got 1.
hello-world.test.ts(15,12): error TS2554: Expected 0 arguments, but got 1.
```
tell us that the compiler failed to compile the code in the files:
```
hello-world.test.ts
hello-world.test.ts
```
at lines:
```
                   (11,
                   (15,
```
starting from symbols:
```
                      ,12)
                      ,12)
```
with errors:
```
                                          Expected 0 arguments, but got 1.
                                          Expected 0 arguments, but got 1.
```

And these are those code lines with probable defects in the `hello-world.test.ts` file:

the 11th line:
```
    expect(HelloWorld.hello('Bob')).toEqual('Hello, Bob!')
           ^
           12
```

and the 15th line:
```
    expect(HelloWorld.hello('Sally')).toEqual('Hello, Sally!')
           ^
           12
```

Hence the problem is with the `HelloWorld.hello(...)` call where we are calling the `hello` static method from the `HelloWorld` class. While calling the method we pass one argument to it – in the 11th line we path `'Bob'` and in the 15th line we pass `'Sally'`.

Recalling the failure messages:
```
                                          Expected 0 arguments, but got 1.
                                          Expected 0 arguments, but got 1.
```

We can guess that while we pass 1 argument to the method, the method expected 0.

So let's check now this method in the `hello-worlds.ts` file:

```typescript
class HelloWorld {
    static hello( /* Parameters go here */ ) {
        // Your code here
    }
}

export default HelloWorld
```

Now we see that the method has no any parameter defined. This is the reason for our failure. Let's fix this by adding a parameter to the method:

```typescript
class HelloWorld {
    static hello(message:string) {
        // Your code here
    }
}

export default HelloWorld
```

Run tests again:
```bash
$ yarn test
yarn run v1.2.1
$ tsc --noEmit -p . && jest --no-cache
hello-world.test.ts(7,12): error TS2554: Expected 1 arguments, but got 0.
hello-world.ts(2,18): error TS6133: 'message' is declared but never used.
```

Ok, now we have problem with the 7th line of `hello-world.test.ts` – the method expects 1 argument but we pass 0:

```typescript
    expect(HelloWorld.hello()).toEqual('Hello, World!')
           ^
           12
```

Good, let's add a default value for the method parameter, so if we do not pass an argument explicitly the value will be still assigned to the method parameter:

```typescript
class HelloWorld {
    static hello(message:string="") {
        // Your code here
    }
}

export default HelloWorld
```

Next try:

```bash
$ yarn test
yarn run v1.2.1
$ tsc --noEmit -p . && jest --no-cache
hello-world.ts(2,18): error TS6133: 'message' is declared but never used.
```

Oh, we have to use the parameter somehow... Let's do the simplest thing possible:

```typescript
class HelloWorld {
    static hello(message:string="") {
        return message;
    }
}

export default HelloWorld
```

And one more try:

```bash
$ yarn test
yarn run v1.2.1
$ tsc --noEmit -p . && jest --no-cache
 FAIL  ./hello-world.test.ts
  ● Hello World › says hello world with no name

    expect(received).toEqual(expected)

    Expected value to equal:
      "Hello, World!"
    Received:
      ""
```

Now the compilation passed, but the `Hello World › says hello world with no name` test failed:

```typescript
describe('Hello World', () => {

  it('says hello world with no name', () => {
    expect(HelloWorld.hello()).toEqual('Hello, World!')
  })
}
```

Our `hello` method should actually return the `'Hello, World!'` string when received no argument. Let's fix this, again, with the simplest solution:

```typescript
class HelloWorld {
    static hello(message:string="Hello, World!") {
        return message;
    }
}

export default HelloWorld
```

Next try:

```bash
$ yarn test
yarn run v1.2.1
$ tsc --noEmit -p . && jest --no-cache
 PASS  ./hello-world.test.ts
  Hello World
    ✓ says hello world with no name (13ms)
    ○ skipped 2 tests

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 passed, 3 total
Snapshots:   0 total
Time:        3.441s
Ran all test suites.
✨  Done in 8.99s.
```

Finally succeeded:)

But why the other two tests

```typescript
  //...

  xit('says hello to bob', () => {
    expect(HelloWorld.hello('Bob')).toEqual('Hello, Bob!')
  })

  xit('says hello to sally', () => {
    expect(HelloWorld.hello('Sally')).toEqual('Hello, Sally!')
  })
```

... were skipped?

The answer is simple – they were defined with a `xit` "clause" instead of `it`. This was done by intention, so students at the start can focus on solving one problem, and then, step by step improve the solution according to the next tests.

So let's "unskip" the rest tests:

```typescript
  //...

  it('says hello to bob', () => {
    expect(HelloWorld.hello('Bob')).toEqual('Hello, Bob!')
  })

  it('says hello to sally', () => {
    expect(HelloWorld.hello('Sally')).toEqual('Hello, Sally!')
  })
```

and run tests again:

```bash
$ yarn test
yarn run v1.2.1
$ tsc --noEmit -p . && jest --no-cache
 FAIL  ./hello-world.test.ts
  ● Hello World › says hello to bob

    expect(received).toEqual(expected)

    Expected value to equal:
      "Hello, Bob!"
    Received:
      "Bob"

      ...

  ● Hello World › says hello to sally

    expect(received).toEqual(expected)

    Expected value to equal:
      "Hello, Sally!"
    Received:
      "Sally"

      ...

  Hello World
    ✓ says hello world with no name (4ms)
    ✕ says hello to bob (113ms)
    ✕ says hello to sally (7ms)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 1 passed, 3 total
Snapshots:   0 total
Time:        4.381s
Ran all test suites.
```

Oh... So the argument that we pass to the method should be used as a name of the "person" to whom we say hello...
- Easy!

```typescript
class HelloWorld {
    static hello(name:string="World") {
        return `Hello, ${name}!`;
    }
}

export default HelloWorld
```

And finally:

```bash
$ yarn test
yarn run v1.2.1
$ tsc --noEmit -p . && jest --no-cache
 PASS  ./hello-world.test.ts
  Hello World
    ✓ says hello world with no name (4ms)
    ✓ says hello to bob (1ms)
    ✓ says hello to sally

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        5.028s
Ran all test suites.
✨  Done in 10.54s.
```


Now when we are done, let's submit our solution to exercism:

```bash
$ exercism submit hello-world.ts
```


## Setup

Go through the setup instructions for TypeScript to
install the necessary dependencies:

http://exercism.io/languages/typescript

## Requirements

Install assignment dependencies:

```bash
$ yarn install
```

## Making the test suite pass

Execute the tests with:

```bash
$ yarn test
```



## Source

This is an exercise to introduce users to using Exercism [http://en.wikipedia.org/wiki/%22Hello,_world!%22_program](http://en.wikipedia.org/wiki/%22Hello,_world!%22_program)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
