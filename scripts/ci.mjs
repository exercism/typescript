#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * yarn babel-node scripts/ci
 *
 * This will run following checks:
 *
 * 1. Find the exercises
 * 2. Run tests against sample solutions
 */

import shell from 'shelljs'
import {
  prepareAndRun,
  prepare,
  cleanUp,
  registerExitHandler,
  assignments,
} from './helpers.mjs'

const exercises = assignments

if (exercises.length === 0) {
  shell.echo('[Skip] None of the files are inside an exercise directory.')
  shell.exit(0)
}

registerExitHandler()

shell.env['PREPARE'] = false
shell.env['CLEANUP'] = false

const infoStr = `Running tests for ${
  exercises.length === 1 ? exercises[0] : `${exercises.length} exercises\n`
}`
const failureStr = '[Failure] Tests failed!'

// Prepare exercises
exercises.forEach(prepare)

// Run tests
prepareAndRun('yarn jest --bail tmp_exercises', infoStr, failureStr)

shell.echo(
  exercises.length === 1
    ? `[Success] Tests passed for ${exercises[0]}`
    : `[Success] Tests passed for all ${exercises.length} exercises`
)

// Cleanup
cleanUp()
