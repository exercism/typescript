# Exercism TypeScript Track

[![configlet](https://github.com/exercism/typescript/actions/workflows/configlet.yml/badge.svg)](https://github.com/exercism/typescript/actions/workflows/configlet.yml) [![typescript / ci](https://github.com/exercism/typescript/workflows/typescript%20/%20main/badge.svg)](https://github.com/exercism/typescript/actions?query=workflow%3A%22typescript+%2F+main%22)

**Exercism exercises in TypeScript**

This is the TypeScript track, one of the many tracks on [exercism][web-exercism].
It holds all the _exercises_ that are currently implemented and available for students to complete.
The track consists of various **core** exercises - the ones a student _must_ complete - and each **core** exercise may unlock various _side_ exercises.
You can find this in the [`config.json`][file-config].

> In version 3 of exercism, the above no longer holds. See the [`exercism/v3`][git-v3] repository for more information.

## Tools

See [CONTRIBUTING.md][file-contributing] for a list of requirements to contribute to this track.
It also has a list of tools you can use, of which the `test` tool is one of them.

## Running the test suite

This runs `jest` tests for all sample solutions.
This _does not_ use the regular way to run `jest`, because the example solution files must be renamed to be imported correctly into the test files.

```shell
yarn test
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested.
For example, if you only want to test the `two-fer.example.ts` for `two-fer`, you may, depending on your environment, use:

```shell
ASSIGNMENT=practice/two-fer yarn test
```

> Running on Windows? Depending on your shell, environment variables are set differently.
> You can use `cross-env` to normalize this. The following should work across environments:
>
> ```bash
> cross-env ASSIGNMENT=practice/two-fer babel-node scripts/test
> ```

## Related repositories

- [Website Copy][git-website-copy] (Mentor Notes)
- [The TypeScript Analyzer][git-typescript-analyzer]
- [The TypeScript Representer][git-typescript-representer]
- [The TypeScript Test Runner][git-typescript-test-runner]

### Related JavaScript repositories

A lot of the improvements made to this track and tooling, is also made to the JavaScript track and tooling and vice-versa.

- [The JavaScript track][git-javascript]
- [The JavaScript Analyzer][git-javascript-analyzer] (Automated Code Analysis)
- [The JavaScript Representer][git-javascript-representer]
- [The JavaScript Test Runner][git-javascript-test-runner]

[web-exercism]: https://exercism.org
[file-config]: https://github.com/exercism/typescript/blob/master/config.json
[file-contributing]: https://github.com/exercism/typescript/blob/master/CONTRIBUTING.md
[git-javascript]: https://github.com/exercism/javascript
[git-javascript-analyzer]: https://github.com/exercism/javascript-analyzer
[git-javascript-representer]: https://github.com/exercism/javascript-representer
[git-javascript-test-runner]: https://github.com/exercism/javascript-test-runner
[git-typescript]: https://github.com/exercism/typescript/
[git-typescript-analyzer]: https://github.com/exercism/typescript-analyzer
[git-typescript-representer]: https://github.com/exercism/typescript-representer
[git-typescript-test-runner]: https://github.com/exercism/typescript-test-runner
[git-v3]: https://github.com/exercism/v3
[git-website-copy]: https://github.com/exercism/website-copy
