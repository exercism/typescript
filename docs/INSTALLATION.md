# Installation

You need [NodeJS LTS](https://nodejs.org/en).

> 💡 This track likely works with older stable versions, as well as the "current" version.
> However, [by design](https://github.com/nodejs/release#release-schedule), odd versions are never stable.
> Always make sure you install an even version of NodeJS.

Install [Yarn 2+](https://yarnpkg.com/getting-started/install).

For Node > 16, this is:

```shell
corepack enable
```

## Checking your installation

You generally need to open a new terminal in order to use binaries just installed.

```shell
$ node -v
v18.16.0

$ yarn -v
v3.3.1
```

_Note: your versions will likely differ from this._

## Assignment installation

Each assignment needs some tools to run the tests:

They can be installed running this command within each assignment directory:

```bash
$ yarn install
```

You must run install _inside the exercise directory_ before you are able to run the tests.
As we are moving towards [Yarn 3 PnP](https://yarnpkg.com/features/pnp/), installing the dependencies in each exercise directory does NOT install a complete copy of all the dependencies.
