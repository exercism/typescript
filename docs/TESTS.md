Execute the tests with:

```bash
$ yarn test
```

Be sure your code follows best practices and coding styles, as other users do, with
TSLint, a tool to perform static analysis to your code. Sometimes, tools like this
save you some time detecting typos or silly mistakes in your code:

```bash
$ yarn lint
```

Or do both at the same time:

```bash
$ yarn test && yarn lint

```

## Making Your First Module

Usually, tests on this track will load your implementation importing it as a module: `import Bob from './bob';`. To make it work, you just
needs to export your implementation from the file the tests are looking for
your module, `bob.ts`:

```javascript
export default class Bob {
  hey(message: string) {
	//
	// Your solution to the exercise goes here
	//
  }
}
```
