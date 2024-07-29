// @ts-check

import tsEslint from 'typescript-eslint'
import config from '@exercism/eslint-config-typescript'
import maintainersConfig from '@exercism/eslint-config-typescript/maintainers.mjs'

import globals from 'globals'

export default [
  ...tsEslint.config(
    ...config,
    {
      files: ['.meta/proof.ci.ts', '.meta/exemplar.ts', '*.test.ts'],
      extends: maintainersConfig,
    },
    {
      files: ['scripts/**/*.mjs'],
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
    }
  ),
  {
    ignores: [
      // # Protected or generated
      '/.appends/**/*',
      '/.github/**/*',
      '/.vscode/**/*',
      '/.yarn/**/*',
      '/common/.vscode/**/*',
      '/common/.yarn/**/*',

      // # Binaries
      '/bin/*',

      // # Configuration
      '/config',
      '/babel.config.cjs',
    ],
  },
]
