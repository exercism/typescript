# CLI

## Setup

Go through the setup [instructions for TypeScript][docs-exercism-typescript] to install the necessary dependencies.

## Requirements

Install assignment dependencies:

```shell
# Using yarn
yarn

# Alternatively using npm
npm install
```

## Making the test suite pass

Execute the tests with:

```shell
# Using yarn
yarn test

# Alternatively using npm
npm test
```

In the test suites of concept exercises, all tests are enabled.
In the test suites of practice exercises, all tests but the first have been skipped.
This is to encourage you to solve the exercise one step at a time.

Once you get a test passing, you can enable the next one by changing `xit` to `it`, `xtest` to `test`, and `xdescribe` to `describe`.


## Submitting the solution

Once none of the tests are skipped and they are all passing, you can submit your solution using `exercism submit numbers.ts`.

## Writing custom tests

If you wish to write additional, custom, tests, create a new file `custom.test.ts`, and submit it with your solution together with the new file:

```shell
exercism submit numbers.ts custom.test.ts
```

## Links

- [exercism CLI documentation][docs-exercism-cli]

[docs-exercism-cli]: https://exercism.io/cli
[docs-exercism-typescript]: https://exercism.io/tracks/typescript/installation
