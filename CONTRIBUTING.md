# Contributing

This is the TypeScript track, one of the many tracks on [exercism][web-exercism]. It holds all the _exercises_ that are currently implemented and available for students to complete. The track consists of various **core** exercises, the ones a student _must_ complete, and each **core** exercise may unlock various _side_ exercises. You can find this in the [`config.json`][file-config]. It's not uncommon that people discover incorrect implementations of certain tests, have a suggestion for a track specific hint to aid the student on the _JavaScript specifics_, see optimisations in terms of the configurations of `jest`, `eslint` or other dependencies, report missing edge cases, factual errors, logical errors, and, implement exercises or develop new exercises.

We welcome contributions of all sorts and sizes, from reporting issues to submitting patches, as well as joining the current [discussions 💬][issue-discussion].

---

## Table of Contents

- [Contributing](#contributing)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Exercises](#exercises)
    - [New exercise](#new-exercise)
      - [Implementing existing exercise](#implementing-existing-exercise)
      - [Creating a track-specific exercise](#creating-a-track-specific-exercise)
    - [Existing exercises](#existing-exercises)
      - [Improving the README.md](#improving-the-readmemd)
      - [Syncing the exercise](#syncing-the-exercise)
      - [Improving or adding mentor notes](#improving-or-adding-mentor-notes)
      - [Improving or adding automated test analyzers](#improving-or-adding-automated-test-analyzers)
  - [Documentation](#documentation)
  - [Tools](#tools)
    - [Fetch configlet](#fetch-configlet)
    - [Fetch canonical data syncer](#fetch-canonical-data-syncer)
    - [Scripts](#scripts)
      - [`format`](#format)
      - [`lint`](#lint)
      - [`test`](#test)
      - [`sync`](#sync)
      - [`checksum`](#checksum)
      - [`ci-check`](#ci-check)
      - [`ci`](#ci)
      - [`name-check`](#name-check)
      - [`name-uniq`](#name-uniq)

---

This guide covers several common scenarios pertaining to **improving the TypeScript track**. There are several other guides about contributing to other parts of the Exercism ecosystem, that are similar to this repository.

- [Generic information about track-contributing][contributing-generic]
- [The JavaScript track][contributing-javascript]
- [The JavaScript Analyzer][contributing-javascript-analyzer]
- [The JavaScript Test Runner][contributing-javascript-test-runner]
- [The TypeScript Analyzer][contributing-typescript-analyzer]
- [The TypeScript Test Runner][contributing-typescript-test-runner]

## Code of Conduct

Help us keep Exercism welcoming. Please read and abide by the [Code of Conduct][coc].

## Exercises

Before contributing code to any existing exercise or any new exercise, please have a thorough look at the current exercises and dive into [open issues][issue-open].

### New exercise

There are two ways to implement new exercises (exercises that don't exist in this track).

1. Pick one from [the list of exercises][list-of-exercises] (implemented in other tracks).
2. Create a new, track-specific exercise from scratch.

#### Implementing existing exercise

Let's say you want to implement a new exercise, from the list of (practice) exercises, because you've noticed that this track could benefit from this exercise, really liked it in another track, or just because you find this interesting; the first step is to [check for an open issue][issue-new-exercise]. If it's there, make sure no one is working on it, and most of all that there is not an open Pull Request towards this exercise.

If there is no such issue, you may open one. The baseline of work is as follows:

1. Open a new issue, we'll label it with `new exercise ✨`
1. We'll assign the issue to you, so you get to work on this exercise
1. Create a new folder in `/exercises`
1. You'll need to sync this folder with the matching config files. You can use `sync` to do this: `ASSIGNMENT=slug yarn babel-node scripts/sync`.
1. Create a `<slug>.ts` stub file.
1. Create a `<slug>.test.ts` test file. Here add the tests, per canonical data if possible (more on canonical data below).
1. Create a `.meta/proof.ci.ts` file. Place a working implementation, assuming it's renamed to `<slug>.ts`
1. Create `.meta/tests.toml`. If the exercise that is being implemented has test data in the [problem specifications repository][problem-specifications], the contents of this file **must** be a list of UUIDs of the tests that are implemented or not implemented. Scroll down to [tools](#tools) to find the canonical data syncer which aids generating this file _interactively_.
1. Create a `.meta/config.json`. Copy the structure from any other `.meta/config.json`. Fill the `blurb`, `source` and `source_url` according
   to the `metadata.yml` in the [problem specifications repository]. Add yourself as author.
1. Create a `.docs/instructions.md` file. Copy the instructions from the [problem specifications repository]
1. Run the tests locally, using `scripts/test`: `ASSIGNMENT=slug yarn babel-node scripts/test`.
1. Run the linter locally, using `scripts/lint`: `ASSIGNMENT=slug yarn babel-node scripts/lint`.
1. Create an entry in `config.json`: a unique _new_ UUID (you can use the `configlet uuid` tool to generate one, scroll down to [tools](#tools) to see how you can get it), give it a difficulty (should be similar to similar exercises), and make sure the _order_ of the file is sane. Currently the file is ordered first on core - non core, then on difficulty low to high, and finally lexographically.
1. Format the files, using `scripts/format`: `yarn babel-node scripts/format`.

The final step is opening a Pull Request, with these items all checked off. Make sure the tests run and the linter is happy. It will run automatically on your PR.

#### Creating a track-specific exercise

The steps for a track-specific exercise are similar to those of implementing an established, existing exercise. The differences are:

- You'll have to write a README.md and test-suite from scratch
- You'll have to come up with a unique _slug_.
- We need to require an icon for it.
- Generate a UUID, for example using [configlet][configlet].

Open a new issue with your proposal, and we'll make sure all these steps are correctly taken. Don't worry! You're not alone in this.

### Existing exercises

There are always improvements possible on existing exercises.

#### Improving the README.md

`README.md`: the description that shows up on the student's exercise page, when they are ready to start. It's also downloaded as part of the exercise's data. The `README.md`, together with the `<slug>.test.ts` file form the contract for the implementation of the exercise. No test should _force_ a specific implementation, no `README.md` explanation should _give away_ a certain implementation. The `README.md` files are [generated][doc-readme], which is explains [here][doc-readme].

- This file may need to be _regenerated_ in order to sync with the latest canonical data.
- You may contribute track specific `hints.md`, as listed in that [document][doc-readme]
- You may improve the track specific `exercise-readme-insert.md`, and regenerate all the READMEs.

> **Note**: In v3, this will no longer be exactly the same. We'll update this section of the guide when V3 is live.

#### Syncing the exercise

Syncing an exercise with _canonical data_: There is a [problem-specifications][problem-specifications] repository that holds test data in a standardised format. These tests are occasionally fixed, improved, added, removed or otherwise changed. Syncing an exercise consists of:

- updating `tests.toml`;
- updating the `<slug>.test.ts` file;
- updating the `.meta/tests.toml` file, if the exercise that is being updated has test data in the [problem specifications repository][problem-specifications]. The contents of this file can be updated using the canonical data syncer, interactively;
- match the `proof.ci.ts` file to still work with the new tests; and
- regenerate the [`README.md`][doc-readme], should there be any changes.

#### Improving or adding mentor notes

[Mentor notes][mentor-notes] are the notes that are given to the mentors to guide them with mentoring. These notes _do not live in this repository_, but instead in the `website-copy` repository. Find their [contributing guidelines][contributing-website-copy] [here][contributing-website-copy].

#### Improving or adding automated test analyzers

Some exercises already have automated mentoring support. These automations don't live in this repository, but instead in the `typescript-analyzer` repository. Find their [contributing guidelines][contributing-typescript-analyzer] [here][contributing-typescript-analyzer].

## Documentation

There is quite a bit of student-facing documentation, which can be found in the [`docs`][file-docs] folder. You may improve these files by making the required changes and opening a new Pull Request.

## Tools

You'll need LTS or higher NodeJS in order to contribute to the _code_ in this respository. Run `yarn` in the root in order to be able to run the scripts as listed below. We use the following dependencies:

- `shelljs` in order to provide shell interface to scripts
- `eslint` for linting all code in the stub, test file and example file
- `jest` to run all the test files on all example implementations
- `babel` to transpile everything so it works _regardless of your version of NodeJS_.

We also use `prettier` to format the files. **Prettier is _NOT_ installed when using `yarn install`**, because the CI will enforce a certain version. Instead use `npx babel-node scripts/format` to run prettier. If you want to auto-format using your editor, match the version in the GitHub Workflow `verify-code-formatting.yml`.

### Fetch configlet

If you'd like to download [configlet][configlet], you can use the [`fetch-configlet`][bin-fetch-configlet] binary. It will run on Linux, Mac OSX and Windows, and download `configlet` to your local drive. Find more information about [configlet][configlet] [here][configlet].

### Fetch canonical data syncer

> If a track implements an exercise for which test data exists, the exercise _must_ contain a `.meta/tests.toml` file. The goal of the `tests.toml` file is to keep track of which tests are implemented by the exercise. Tests in this file are identified by their UUID and each test has a boolean value that indicates if it is implemented by that exercise.

A `tests.toml` file for a track's `two-fer` exercise looks like this:

```toml
[canonical-tests]

[19709124-b82e-4e86-a722-9e5c5ebf3952]
description = "no name given"
include = true

[3451eebd-123f-4256-b667-7b109affce32]
description = "a name given"
include = true

[653611c6-be9f-4935-ab42-978e25fe9a10]
description = "another name given"
include = false
```

To make it easy to keep the tests.toml up to date, contributors can use the `canonical_data_syncer` application. This application is a small, standalone binary that will compare the tests specified in the tests.toml files against the tests that are defined in the exercise's canonical data. It then interactively gives the maintainer the option to include or exclude test cases that are currently missing, updating the tests.toml file accordingly.

If you'd like to download [`canonical_data_syncer`][canonical-data-syncer], you can use the [`fetch-canonical_data_syncer`][bin-fetch-canonical-data-syncer] binary. It will run on Linux, Mac OSX and Windows, and download `canonical_data_syncer` to your local drive. Find more information about [`canonical_data_syncer`][canonical-data-syncer] [here][canonical-data-syncer].

### Scripts

We have various `scripts` for you in order to aid with maintaining and contributing to this repository.

#### `format`

> This has been aliased as a top-level package.json `scripts` script:
>
> ```shell
> yarn format
> ```

```ts
/*
 * Run this script (from root directory): yarn babel-node scripts/format
 *
 * This runs `prettier` on all applicable files, FORCES using the same version
 * as the CI uses to check if the files have been formatted.
 */
```

Use this action to format all the files using the correct version of prettier. If you want your editor to do this automatically, make sure you install `prettier` (e.g. `npm install prettier@2.2.1`), where the version matches `.github/workflows/verify-code-formatting.yml`.

#### `lint`

> This has been aliased as a top-level package.json `scripts` script:
>
> ```shell
> yarn lint
> ```

```ts
/*
 * Run this script (from root directory): yarn babel-node scripts/lint
 *
 * This runs `eslint` on all sample solutions (and test) files
 */
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested. For example, if you only want to lint `two-fer`, you may, depending on your environment use:

```shell
ASSIGNMENT=two-fer yarn babel-node scripts/lint
```

#### `test`

> This has been aliased as a top-level package.json `scripts` script:
>
> ```shell
> yarn test
> ```

```ts
/**
 * Run this script (from root directory): yarn babel-node scripts/test
 *
 * This runs `jest` tests for all sample solutions
 */
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested. For example, if you only want to test the `example.js` for `two-fer`, you may, depending on your environment, use:

```shell
ASSIGNMENT=two-fer yarn babel-node scripts/test
```

#### `sync`

> This has been aliased as a top-level package.json `scripts` script:
>
> ```shell
> yarn sync
> ```

```ts
/**
 * Run this script (from root directory): yarn babel-node scripts/sync
 *
 * This script is used to propagate any change to root package.json to
 * all exercises and keep them in sync.
 * There is a CI step which checks that package.json in root & exercises match
 * (see checksum script for more info).
 */
```

If the `ASSIGNMENT` environment variable is set, only _that_ exercise is tested. For example, if you only want to sync the files for `two-fer`, you may, depending on your environment, use:

```shell
ASSIGNMENT=two-fer yarn babel-node scripts/sync
```

#### `checksum`

```ts
/*
 * Run this script (from root directory): yarn babel-node scripts/checksum
 *
 * This will check root `package.json` matches each exercise's `package.json`.
 * But the catch is there are some dependencies used for build but not served to end users
 * We skip those dependencies while performing checksum.
 * See `SKIP_PACKAGES_FOR_CHECKSUM` in helpers.js for list of skipped packages.
 */
```

#### `ci-check`

> This has been aliased as a top-level package.json `scripts` script:
>
> ```shell
> yarn ci:check
> ```

```ts
/**
 * Run this script (from root directory): yarn babel-node scripts/ci-check
 *
 * This will run following checks:
 *
 * 1. Check config in all exercises matches
 * 2. Checks stubs exist
 * 3. Run eslint to check code-style
 */
```

Run this script to check stubs, configuration integrity and lint the code.

#### `ci`

> This has been aliased as a top-level package.json `scripts` script:
>
> ```shell
> yarn ci
> ```

This script is _almost_ the same as `test`. You may use them interchangeably at moment of writing

```ts
/**
 * Run this script (from root directory): yarn babel-node scripts/ci
 *
 * This will run following checks:
 *
 * 1. Find the exercises
 * 2. Run tests against sample solutions
 */
```

Run this script to test all exercises.

#### `name-check`

```ts
/**
 * Run this script (from root directory): yarn babel-node scripts/name-check
 *
 * This will run following checks:
 *
 * 1. Package name is of the format "@exercism/typescript-<exercise>"
 *
 * This script also allows fixing these names: yarn babel-node scripts/name-check --fix
 */
```

Run this script to check if package name in package.json of exercises is in expected format.
Run this script with the `--fix` flag to automatically fix the names.

#### `name-uniq`

```ts
/**
 * Run this script (from root directory): yarn babel-node scripts/name-uniq
 *
 * This will run following checks:
 *
 * 1. All exercises have unique package names in their package.json files.
 */
```

Run this script to check if there is any duplicate package name.

[configlet]: https://github.com/exercism/docs/blob/master/language-tracks/configuration/configlet.md
[canonical-data-syncer]: https://github.com/exercism/canonical-data-syncer
[bin-fetch-configlet]: https://github.com/exercism/javascript/blob/master/bin/fetch-configlet
[bin-fetch-canonical-data-syncer]: https://github.com/exercism/javascript/blob/master/bin/fetch-canonical_data_syncer
[web-exercism]: https://exercism.io
[file-config]: https://github.com/exercism/javascript/blob/master/config.json
[file-docs]: https://github.com/exercism/javascript/blob/master/docs
[issue-open]: https://github.com/exercism/javascript/issues
[issue-discussion]: https://github.com/exercism/javascript/labels/discussion%20%3Aspeech_balloon%3A
[issue-new-exercise]: https://github.com/exercism/javascript/issues?q=is%3Aopen+is%3Aissue+label%3A%22%3Asparkles%3A+new+exercise%22
[list-of-exercises]: https://tracks.exercism.io/typescript/master/unimplemented
[contributing-generic]: https://github.com/exercism/docs/tree/master/contributing-to-language-tracks
[contributing-javascript]: https://github.com/exercism/javascript/blob/master/CONTRIBUTING.md
[contributing-javascript-analyzer]: https://github.com/exercism/javascript-analyzer/blob/master/CONTRIBUTING.md
[contributing-javascript-test-runner]: https://github.com/exercism/javascript-test-runner
[contributing-typescript]: https://github.com/exercism/typescript/blob/master/CONTRIBUTING.md
[contributing-typescript-analyzer]: https://github.com/exercism/typescript-analyzer/blob/master/CONTRIBUTING.md
[contributing-typescript-test-runner]: https://github.com/exercism/typescript-test-runner
[contributing-website-copy]: https://github.com/exercism/website-copy#contributing
[doc-readme]: https://github.com/exercism/docs/blob/master/language-tracks/exercises/anatomy/readmes.md
[problem-specifications]: https://github.com/exercism/problem-specifications
[coc]: https://exercism.io/code-of-conduct
[mentor-notes]: https://github.com/exercism/website-copy/tree/master/tracks/javascript/exercises
