# Installation

You need [NodeJS LTS](https://nodejs.org/en).

> 💡 This track likely works with older stable versions, as well as the "current" version.
> However, [by design](https://github.com/nodejs/release#release-schedule), odd versions are never stable.
> Always make sure you install an even version of NodeJS.

Install [Yarn 4+](https://yarnpkg.com/getting-started/install) using Node.JS `corepack`:

```shell
corepack enable yarn
```

## Checking your installation

You generally need to open a new terminal in order to use binaries you've just installed.

```shell
$ node -v
v20.15.0

$ corepack -v
0.28.1

$ corepack yarn -v
v4.3.1
```

_Note: your versions will likely differ from this._

## Assignment installation

**Each assignment** needs some tools to run the tests:

They can be installed running this command within each assignment directory:

```bash
$ corepack yarn install
```

Depending on your editor, the [Editor SDK](https://yarnpkg.com/getting-started/editor-sdks) needs to be installed in each assignment, in order to work with Plug'n'Play installs.
At moment of writing the following are supported:

- [CoC nvim](https://yarnpkg.com/getting-started/editor-sdks#coc-nvim)
- [Emacs](https://yarnpkg.com/getting-started/editor-sdks#emacs)
- [Neovim Native LSP](https://yarnpkg.com/getting-started/editor-sdks#neovim-native-lsp)
- [VSCode](https://yarnpkg.com/getting-started/editor-sdks#vscode)

For example, if using VSCode, the commands you run are:

```shell
$ corepack yarn install

➤ YN0000: · Yarn 4.3.1
➤ YN0000: ┌ Resolution step
➤ YN0000: └ Completed
➤ YN0000: ┌ Post-resolution validation
➤ YN0060: │ # [...]
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0000: └ Completed in 0s 566ms
➤ YN0000: ┌ Link step
➤ YN0000: │ ESM support for PnP uses the experimental loader API and is therefore experimental
➤ YN0000: └ Completed
➤ YN0000: · Done with warnings in 0s 768ms

$ corepack yarn dlx @yarnpkg/sdks vscode

➤ YN0000: · Yarn 4.3.1
➤ YN0000: ┌ Resolution step
➤ YN0085: │ + @yarnpkg/sdks@npm:3.1.3, and 103 more.
➤ YN0000: └ Completed in 0s 509ms
➤ YN0000: ┌ Fetch step
➤ YN0013: │ 104 packages were added to the project (+ 2.87 MiB).
➤ YN0000: └ Completed
➤ YN0000: ┌ Link step
➤ YN0000: └ Completed in 0s 270ms
➤ YN0000: · Done in 0s 881ms

➤ YN0000: Cleaning up the existing SDK files...
➤ YN0000: ┌ Generating SDKs inside .yarn/sdks
➤ YN0000: │ ✓ Eslint
➤ YN0000: │ ✓ Prettier
➤ YN0000: │ ✓ Typescript
➤ YN0000: │ • 5 SDKs were skipped based on your root dependencies
➤ YN0000: └ Completed
➤ YN0000: ┌ Generating settings
➤ YN0000: │ ✓ Vscode (updated 🔼)
➤ YN0000: └ Completed
```

You must run install _inside the exercise directory_ before you are able to run the tests.
[Yarn 4 PnP](https://yarnpkg.com/features/pnp/) is enabled, installing the dependencies in each exercise directory does NOT install a complete copy of all the dependencies.

If your editor is showing errors for `eslint`, `prettier`, or `typescript` afterwards, reload the window or reopen the editor.
