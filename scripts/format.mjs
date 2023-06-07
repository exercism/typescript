#!/usr/bin/env node

/*
 * Run this script (from root directory):
 *
 * $ yarn format
 *
 * This runs `prettier` on all applicable files, FORCES using the same version
 * as the CI uses to check if the files have been formatted.
 */

import shell from 'shelljs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const basedir = path.resolve(
  path.basename(fileURLToPath(import.meta.url)),
  '..'
)

const workflow = path.join(
  basedir,
  '.github',
  'workflows',
  'verify-code-formatting.yml'
)

let EXERCISM_PRETTIER_VERSION

const versionLine = shell
  .cat(workflow)
  .stdout.split('\n')
  .map((line) => line.trim())
  .find((line) => line.startsWith('EXERCISM_PRETTIER_VERSION:'))

if (!versionLine) {
  const { stdout: versionFromPackage } = shell.exec(
    "yarn why prettier | sed -n -e 's/^.* prettier@npm://m' -e 's/ (via npm.*)//p'"
  )
  EXERCISM_PRETTIER_VERSION = versionFromPackage.trim()
} else {
  EXERCISM_PRETTIER_VERSION = versionLine.split(':')[1].trim().replace(/'/g, '')
}

const command = `yarn dlx prettier@${EXERCISM_PRETTIER_VERSION} --write "**/*.{js,jsx,ts,tsx,css,sass,scss,html,json,md,yml}"`
shell.echo(`[format] ${command}`)

const result = shell.exec(command)
shell.echo(`[format] ${result}`)
