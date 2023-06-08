#!/usr/bin/env node

/**
 * Run this script (from root directory):
 *
 * $ yarn dlx -p @babel/core -p @babel/node babel-node scripts/checksum
 *
 * This will check root `package.json` matches each exercise's `package.json`.
 * But the catch is there are some dependencies used for build but not served to end users
 * We skip those dependencies while performing checksum.
 * See `SKIP_PACKAGES_FOR_CHECKSUM` in helpers.js for list of skipped packages.
 */

import shell from 'shelljs'
import * as helpers from './helpers.mjs'
import path from 'node:path'

/**
 * Compares the file of the assignment with some known value
 *
 * @param filename file to check (local to the assignment directory)
 * @param assignment slug with type, eg. practice/two-fer
 * @param baseFile the file path that {filename} must be compared against
 * @param expectedSha known value of {baseFile}
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function checksumAssignment(assignment, filename, baseFile, expectedSha) {
  if (!assignment) {
    return
  }

  const filePath = path.join('exercises', assignment, filename)

  let fileSha

  if (filename === 'package.json') {
    const packageJson = helpers.prepareExercisePackageJson(filePath, false)

    fileSha = helpers.shaPackageJson(packageJson)
  } else {
    const fileContents = shell.cat(filePath).toString()
    fileSha = helpers.sha(fileContents)
  }

  if (fileSha !== expectedSha) {
    const [chalk, diff] = await Promise.all([
      import('chalk').then((d) => d.default),
      import('diff'),
    ])

    // prettier-ignore
    shell.echo(
          `\n`,
          `[Failure] ${filename} did not match for ${assignment} (${chalk.red(expectedSha)} != ${chalk.green(fileSha)})\n`,
          `! Expected ${chalk.red(baseFile)} to match ${chalk.green(filePath)}\n`,
          `! Did you forget to run ${chalk.bold(`yarn sync`)}?\n`
        );

    if (filename === 'package.json') {
      shell.echo(helpers.prepareExercisePackageJson(filePath, false))
    }

    if (chalk.supportsColor) {
      const diffParts = diff.diffLines(
        shell.cat(filePath).toString(),
        shell.cat(baseFile).toString(),
        { newlineIsToken: false }
      )

      const output = diffParts
        .map((part) => {
          const color = part.added
            ? chalk.green
            : part.removed
            ? chalk.red
            : chalk.gray
          return color(part.value)
        })
        .join('')

      shell.echo(output)
    }

    shell.exit(1)
  }
}

/**
 * Check all the exercises, or given, {filename} against {rootFileName}
 *
 * @param filename filename in the exercise directory
 * @param rootFileName filename in the root directory
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function checkSumAll(filename, rootFileName = filename) {
  const assignments = [shell.env['ASSIGNMENT']].filter(Boolean)

  let expectedSha

  if (rootFileName === 'exercise-package.json') {
    expectedSha = shell.cat('exercise-package.json.sha').toString()
  } else {
    const fileContents = shell.cat(rootFileName).toString()
    expectedSha = helpers.sha(fileContents)
  }

  if (assignments.length > 0) {
    if (
      !assignments.every((assignment) => helpers.assertAssignment(assignment))
    ) {
      shell.exit()
    }

    return await Promise.all(
      assignments.map((assignment) => {
        shell.echo(`Checking integrity of ${assignment}/${filename}...`)
        return checksumAssignment(
          assignment,
          filename,
          rootFileName,
          expectedSha
        )
      })
    )
  }

  shell.echo(
    `Checking integrity of ${filename} in all ${helpers.assignments.length} exercises`
  )

  await Promise.all(
    helpers.assignments.map((assignment) =>
      checksumAssignment(assignment, filename, rootFileName, expectedSha)
    )
  )
}

helpers.registerExitHandler()
helpers.createExercisePackageJson(true)

checkSumAll('package.json', 'exercise-package.json')

Promise.all(
  helpers.COMMON_FILES.map((file) => {
    if (file !== 'package.json') {
      return checkSumAll(file, path.join('common', file))
    }

    return null
  })
).then(() => shell.echo('All files passed the checksum test'))
