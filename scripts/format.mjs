#!/usr/bin/env node

/*
 * Run this script (from root directory):
 *
 * $ corepack yarn format
 *
 * This runs `prettier` on all applicable files, FORCES using the same version
 * as the CI uses to check if the files have been formatted.
 */

import shell from 'shelljs'
import path, { join, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'

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
  const tempDir = mkdtempSync(`${tmpdir}${sep}`)
  const versionInfo = join(tempDir, 'info.txt')
  shell.touch(versionInfo)

  shell
    .exec('corepack yarn info prettier --json --name-only', { silent: true })
    .to(versionInfo)
  shell.sed(/^\"prettier@npm:/, '', versionInfo).to(versionInfo)
  shell.sed(/\"$/, '', versionInfo).to(versionInfo)

  const versionFromPackage = shell.cat(versionInfo)
  shell.rm('-fr', tempDir)

  if (versionFromPackage && !versionFromPackage.includes('Usage Error')) {
    EXERCISM_PRETTIER_VERSION = versionFromPackage.trim()
  } else {
    EXERCISM_PRETTIER_VERSION = process.env.EXERCISM_PRETTIER_VERSION
    if (!EXERCISM_PRETTIER_VERSION) {
      shell.error(
        'Could not find prettier version in corepack yarn info or ENV'
      )
      shell.exit(-1)
    }
  }
} else {
  EXERCISM_PRETTIER_VERSION = versionLine.split(':')[1].trim().replace(/'/g, '')
}

const command = `corepack yarn dlx prettier@${EXERCISM_PRETTIER_VERSION} --write "**/*.{js,jsx,ts,tsx,css,sass,scss,html,json,md,yml}"`
shell.echo(`[format] ${command}`)

// Will print to console
shell.exec(command, { silent: false })
