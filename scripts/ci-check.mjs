#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ yarn ci:check
 *
 * This will run following checks:
 *
 * 1. Check config in all exercises matches
 * 2. Run eslint to check code-style
 * 3. Run tests against sample solutions
 */

import shell from 'shelljs'
import {
  assignments,
  assertAssignment,
  registerExitHandler,
  envIsThruthy,
  hasStub,
  cleanUp,
  prepare,
} from './helpers.mjs'
import path from 'node:path'

const exercises = assignments
if (exercises.length === 0) {
  shell.echo('[Skip] None of the files are inside an exercise directory.')
  shell.exit(0)
}

if (exercises.length === 1) {
  if (!assertAssignment(exercises[0], true)) {
    shell.exit(1)
  }
}

registerExitHandler()

if (!envIsThruthy('SKIP_STUB', false)) {
  shell.echo('\n==========\nEnsure stubs are present\n')

  // Inline the stub check instead of running scripts/stub-check, to save a
  // few seconds.
  const noStubs = exercises.filter((assignment) => !hasStub(assignment))

  if (noStubs.length > 0) {
    shell.echo(`[FAILURE] ${noStubs.length} missing a stub`)
    noStubs.forEach((stub) => shell.echo(`${stub} is missing a stub file`))
    shell.exit(-1)
  } else {
    shell.echo('[SUCCES] All stubs are present')
  }
}

if (!envIsThruthy('SKIP_INTEGRITY', false)) {
  shell.echo('\n==========\nCheck configuration and packages integrity\n')

  // If > 8 exercises, checksum everything as its faster than subprocessing
  // TODO: be able to pass in any amount of exercises at once
  if (exercises.length >= 8) {
    const checkResult = shell.exec(
      `yarn dlx -q -p @babel/core -p @babel/node babel-node ${path.join('scripts', 'checksum')}`
    ).code

    if (checkResult !== 0) {
      shell.exit(checkResult)
    }

    const nameCheckResult = shell.exec(
      `yarn dlx -q -p @babel/core -p @babel/node babel-node ${path.join('scripts', 'name-check')}`
    ).code

    if (nameCheckResult !== 0) {
      shell.exit(nameCheckResult)
    }
  } else {
    exercises.forEach((exercise) => {
      shell.env['ASSIGNMENT'] = exercise

      const checkResult = shell.exec(
        `yarn dlx -q -p @babel/core -p @babel/node babel-node ${path.join('scripts', 'checksum')}`
      ).code

      if (checkResult !== 0) {
        shell.exit(checkResult)
      }

      const nameCheckResult = shell.exec(
        `yarn dlx -q -p @babel/core -p @babel/node babel-node ${path.join('scripts', 'name-check')}`
      ).code

      if (nameCheckResult !== 0) {
        shell.exit(nameCheckResult)
      }
    })
  }

  const nameUniqResult = shell.exec(
    `yarn dlx -q -p @babel/core -p @babel/node babel-node ${path.join('scripts', 'name-uniq')}`
  ).code

  if (nameUniqResult !== 0) {
    shell.exit(nameUniqResult)
  }
}

// Cleanup tmp directory if any exists
cleanUp()

/**
 * Moves all example and test files to single directory - tmp_exercises
 * This allows running the test command together for all files
 * which is way faster than running once for each exercise
 */

shell.echo('\n==========\nLint all the files\n')

shell.env['PREPARE'] = false
shell.env['CLEANUP'] = false

exercises.forEach(prepare)

shell.env['CLEANUP'] = true

const checkResult = shell.exec(`yarn lint`).code
if (checkResult !== 0) {
  shell.exit(checkResult)
}
