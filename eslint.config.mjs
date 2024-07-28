  // @ts-check

import tsEslint from 'typescript-eslint'
import config from '@exercism/eslint-config-typescript'
import maintainersConfig from '@exercism/eslint-config-typescript/maintainers.mjs'

export default [
  ...tsEslint.config(...config, {
    files: ['.meta/proof.ci.ts', '.meta/exemplar.ts', '*.test.ts'],
    extends: maintainersConfig,
  }),
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
      '/babel.config.cjs'
    ]
  }
]
