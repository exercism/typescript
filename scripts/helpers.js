/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * This file provides helper functions
 * & is NOT intended to be run as a script.
 */

const shell = require('shelljs')
const path = require('path')

const exerciseDirs = shell.ls('-d', path.join('exercises', '*'))

export const COMMON_FILES = [
  '.eslintignore',
  '.eslintrc',
  'babel.config.js',
  'jest.config.js',
  'package.json',
  'tsconfig.json',
]

export const assignments = shell.env['ASSIGNMENT']
  ? [shell.env['ASSIGNMENT']]
  : exerciseDirs
      .map((dir) => path.basename(dir))
      .filter((dir) => !dir.includes('.'))

/**
 *
 * @param {string} input
 * @returns {string | undefined}
 */
export function findExerciseDirectory(input) {
  return exerciseDirs.find((exerciseDir) => {
    return input.indexOf(exerciseDir) !== -1
  })
}

/**
 *
 * @param {string} assignment
 * @returns {boolean}
 */
export function hasStub(assignment) {
  return shell.test(
    '-f',
    path.join('exercises', assignment, `${assignment}.ts`)
  )
}

/**
 *
 * @param {string} key
 * @param {true|false} unset
 * @returns {boolean}
 */
export function envIsThruthy(key, unset = false) {
  if (shell.env[key] === undefined) {
    return unset
  }

  return !['0', 0, 'false', false, null, 'null'].includes(shell.env[key])
}

/**
 * @returns {boolean}
 */
export function shouldPrepare() {
  return envIsThruthy('PREPARE')
}

/**
 * @returns {boolean}
 */
export function shouldCleanup() {
  return envIsThruthy('CLEANUP')
}

/**
 * Preapre all exercises (see above) & run a given command
 *
 * @param {string} command
 * @param {string} infoStr
 * @param {string} failureStr
 *
 * @returns {void}
 */
export function prepareAndRun(command, infoStr, failureStr) {
  if (shouldPrepare()) {
    const assignment = shell.env['ASSIGNMENT']

    shell.mkdir('-p', 'tmp_exercises')

    COMMON_FILES.forEach((file) => {
      shell.cp(path.join('common', file), path.join('tmp_exercises', file))
    })

    if (assignment) {
      prepare(assignment)
    } else {
      assignments.forEach(prepare)
    }
  }

  if (infoStr) {
    shell.echo(infoStr)
  }
  const result = shell.exec(command)

  if (shouldCleanup()) {
    cleanUp()
  }

  if (result.code !== 0) {
    if (failureStr) {
      shell.echo(failureStr)
    }
    shell.exit(1)
  }
}

/**
 * Delete tmp directory
 *
 * @returns {void}
 */
export function cleanUp() {
  shell.rm('-rf', 'tmp_exercises')
}

/**
 * Copy sample solution and specs for given assignment to tmp_exercises
 *
 * @param {string} assignment
 * @returns {void}
 */
export function prepare(assignment) {
  if (!assignment) {
    shell.echo('[Failure] Assignment not provided')
    shell.exit(1)
  }
  const exampleFile = path.join(
    'exercises',
    assignment,
    `${assignment}.example.ts`
  )
  const specFile = path.join('exercises', assignment, `${assignment}.test.ts`)
  const specFileDestination = path.join(
    'tmp_exercises',
    `${assignment}.test.ts`
  )

  shell.mkdir('-p', path.join('tmp_exercises', 'lib'))
  shell.cp(exampleFile, path.join('tmp_exercises', `${assignment}.ts`))
  shell.cp(specFile, specFileDestination)

  // Enable tests
  shell.sed('xit', 'it', specFileDestination).to(specFileDestination)
  shell
    .sed('xdescribe', 'describe', specFileDestination)
    .to(specFileDestination)

  const libDir = path.join('exercises', assignment, 'lib')
  if (shell.test('-d', libDir)) {
    shell.cp(path.join(libDir, '*.ts'), path.join('tmp_exercises', 'lib'))
  }

  shell.mkdir('-p', path.join('tmp_exercises', 'data'))
  const dataDir = path.join('exercises', assignment, 'data')

  if (shell.test('-d', dataDir)) {
    shell.cp(path.join(dataDir, '*'), path.join('tmp_exercises', 'data'))
  }
}

/**
 * @returns {void}
 */
export function registerExitHandler() {
  function exitHandler(options, exitCode) {
    cleanUp()

    if (options.clean) {
      /* clean exit */
    }
    if (exitCode || exitCode === 0) {
      /* exit code given */
    }
    if (options.exit) {
      /* should exit forcefully */
      process.exit()
    }
  }

  //do something when app is closing
  process.on('exit', exitHandler.bind(null, { clean: true }))

  //catches ctrl+c event
  process.on('SIGINT', exitHandler.bind(null, { exit: true }))

  // catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', exitHandler.bind(null, { exit: true }))
  process.on('SIGUSR2', exitHandler.bind(null, { exit: true }))

  //catches uncaught exceptions
  process.on('uncaughtException', exitHandler.bind(null, { exit: true }))
}
