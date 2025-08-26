# Tests

Before trying to execute the tests, ensure the assignment folder is set-up correctly by following the installation steps, namely `corepack yarn install` and the Editor SDK setup.

Execute the tests with:

```bash
$ corepack yarn test
```

Be sure your code follows best practices, as other users do, with eslint, a tool to perform static analysis to your code.
Tools like this save you some time detecting typos or silly mistakes in your code:

```bash
$ corepack yarn lint
```

Or do both at the same time:

```bash
$ corepack yarn test && corepack yarn lint
```

The TypeScript track on Exercism does not enforce code _style_, so you're free to choose between semicolons, tabs vs spaces, and everything in-between.

## Making Your First Module

Usually, tests on this track will load your implementation importing it as a module: `import Bob from './bob';`.
To make it work, you need to export your implementation from the file the tests are looking for your module, `bob.ts`:

```typescript
export class Bob {
  public hey(message: string) {
    // Your solution here
  }
}
```

We've provided stubs in each exercise and placed this `export` in there for you.
