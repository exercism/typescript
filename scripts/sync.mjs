#!/usr/bin/env node

// @ts-check

/**
 * Run this script (from root directory):
 *
 * $ corepack yarn sync
 *
 * This script is used to copy the following files to all exercises and keep
 * them in sync:
 *
 * - .vscode/extensions.json
 * - .vscode/settings.json
 * - .yarnrc.yml
 * - babel.config.cjs
 * - eslint.config.mjs
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
    shell.mkdir('-p', copy)
  })

  // DELETE legacy
  ;['.eslintignore', '.eslintrc.cjs', '.meta/test-runner.mjs'].forEach(
    (file) => {
      const source = path.join(destination, file)
      shell.rm('-f', source)
    }
  )

  // Next copy over all the common files
  helpers.COMMON_FILES.forEach((file) => {
    if (file !== 'package.json') {
      const source = path.join('common', file)
      const copy = path.join(destination, file)

      shell.mkdir('-p', path.dirname(copy))
      shell.cp(source, copy)
    }
  })

  // Copy the common dir matching contents
  helpers.COMMON_DIR_COPY_CONTENTS.forEach((dir) => {
    const source = path.join('common', dir)
    const copy = path.join(destination, path.dirname(dir))

    shell.cp('-R', source, copy)
  })

  // Touch an empty `yarn.lock` file so you can install yarn in each folder.
  shell.rm(path.join(destination, 'yarn.lock'))
  shell.touch(path.join(destination, 'yarn.lock'))

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
