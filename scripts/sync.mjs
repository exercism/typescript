#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ yarn sync
 *
 * This script is used to copy the following files to all exercises and keep
 * them in sync:
 *
 * - <local yarn installation>
 * - .eslintignore
 * - .eslintrc
 * - .yarnrc.yml
 * - babel.config.cjs
 * - jest.config.cjs
 * - package.json
 * - tsconfig.json
 *
 * There is a CI step which checks that package.json in root & exercises match
 * (see checksum script for more info).
 */

import shell from 'shelljs'
import * as helpers from './helpers.mjs'
import path from 'node:path'

const assignment = shell.env['ASSIGNMENT']

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function copyConfigForAssignment(name) {
  const destination = path.join('exercises', name)
  const assignmentPackageFilename = path.join(destination, 'package.json')

  // First delete any common directories (they'll be recreated when copying files)
  helpers.COMMON_DIRS.forEach((dir) => {
    const copy = path.join(destination, dir)

    shell.rm('-rf', copy)
  })

  // Next copy over all the common files
  helpers.COMMON_FILES.forEach((file) => {
    if (file !== 'package.json') {
      const source = path.join('common', file)
      const copy = path.join(destination, file)

      shell.mkdir('-p', path.dirname(copy))
      shell.cp(source, copy)
    }
  })

  // Now edit package.json and copy it over
  const packageJson = getCurrentPackageJson(assignmentPackageFilename)
  const basePackageJson = JSON.parse(
    shell.cat('exercise-package.json').toString()
  )

  const mergedPackageJson = helpers.mergePackageJsons(
    basePackageJson,
    packageJson
  )

  shell
    .ShellString(JSON.stringify(mergedPackageJson, undefined, 2) + '\n')
    .to(assignmentPackageFilename)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getCurrentPackageJson(assignmentPackageFilename) {
  const packageFile = shell.cat(assignmentPackageFilename).toString()
  if (!packageFile) {
    const packageJson = JSON.parse(
      shell.cat('exercise-package.json').toString()
    )

    const conceptName = path
      .dirname(assignmentPackageFilename)
      .split(/[/\\]/g)
      .slice(1)

    packageJson.name = `@exercism/typescript-${conceptName.join('-')}`
    packageJson.description = `Exercism ${conceptName[0]} exercise on ${conceptName[1]}`
    return packageJson
  }

  return JSON.parse(packageFile)
}

helpers.registerExitHandler()
helpers.createExercisePackageJson(false)

if (assignment) {
  if (!helpers.assertAssignment(assignment)) {
    shell.exit(1)
  }

  shell.echo('Syncing ' + assignment + '...')
  copyConfigForAssignment(assignment)
} else {
  shell.echo('Syncing all assignments...')

  helpers.assignments.forEach((a) => {
    shell.echo('Syncing ' + a + '...')
    copyConfigForAssignment(a)
  })
}
