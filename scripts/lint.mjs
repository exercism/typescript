#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ corepack yarn lint
 *
 * This runs `eslint` on all sample solutions (and test) files
 */

import shell from 'shelljs'
import path from 'node:path'
import {
  registerExitHandler,
  prepareAndRun,
  assignments as exercises,
  shouldPrepare,
} from './helpers.mjs'

registerExitHandler()

const assignment = exercises.length === 0 ? exercises[0] : undefined

// Prepare exercises and cleanup afterwards
shell.env['PREPARE'] =
  shell.env['PREPARE'] === undefined || shell.env['PREPARE']
shell.env['CLEANUP'] =
  shell.env['CLEANUP'] === undefined || shell.env['CLEANUP']

const count = shouldPrepare() ? exercises.length : 'all'

const infoStr = assignment
  ? `Running lint for ${assignment}...`
  : `Running lint for ${count} exercises...`
const failureStr = '[Failure] Lint check failed!'

shell.mkdir('-p', 'tmp_exercises')
shell.cp('eslint.config.mjs', path.join('tmp_exercises', 'eslint.config.mjs'))

// Run lint all at once
prepareAndRun(
  'corepack yarn eslint tmp_exercises -c tmp_exercises/eslint.config.mjs',
  infoStr,
  failureStr
)

shell.echo(
  assignment
    ? `[Success] Lint passed for ${assignment}`
    : `[Success] Lint passed for ${count} exercises`
)
