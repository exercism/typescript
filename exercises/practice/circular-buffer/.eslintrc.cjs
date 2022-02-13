module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  overrides: [
    // Student provided files
    {
      files: ['*.ts'],
      excludedFiles: ['.meta/proof.ci.ts', '.meta/exemplar.ts', '*.test.ts'],
      extends: '@exercism/eslint-config-typescript',
    },
    // Exercism given tests
    {
      files: ['*.test.ts'],
      excludedFiles: ['custom.test.ts'],
      env: {
        jest: true,
      },
      extends: '@exercism/eslint-config-typescript/maintainers',
    },
    // Student provided tests
    {
      files: ['custom.test.ts'],
      env: {
        jest: true,
      },
      extends: '@exercism/eslint-config-typescript',
    },
    // Exercism provided files
    {
      files: ['.meta/proof.ci.ts', '.meta/exemplar.ts', '*.test.ts'],
      excludedFiles: ['custom.test.ts'],
      extends: '@exercism/eslint-config-typescript/maintainers',
    },
  ],
}
