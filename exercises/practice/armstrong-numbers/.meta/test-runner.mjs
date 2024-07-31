import { execSync } from 'node:child_process'
// Experimental: import config from './config.json' with { type: 'json' }

import { readFileSync } from 'node:fs'
import { exit } from 'node:process'

/** @type {import('./config.json') } */
const config = JSON.parse(
  readFileSync(new URL('./config.json', import.meta.url))
)

const jest = !config.custom || config.custom['flag.tests.jest']
const tstyche = config.custom?.['flag.tests.tstyche']

console.log(
  `[tests] tsc: ✅, tstyche: ${tstyche ? '✅' : '❌'}, jest: ${jest ? '✅' : '❌'}, `
)

console.log('[tests] tsc (compile)')

try {
  execSync('corepack yarn lint:types', {
    stdio: 'inherit',
    cwd: process.cwd(),
  })
} catch {
  exit(-1)
}

if (tstyche) {
  console.log('[tests] tstyche (type tests)')

  try {
    execSync('corepack yarn test:types', {
      stdio: 'inherit',
      cwd: process.cwd(),
    })
  } catch {
    exit(-2)
  }
}

if (jest) {
  console.log('[tests] tstyche (implementation tests)')

  try {
    execSync('corepack yarn test:implementation', {
      stdio: 'inherit',
      cwd: process.cwd(),
    })
  } catch {
    exit(-3)
  }
}
