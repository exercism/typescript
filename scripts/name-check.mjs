#!/usr/bin/env node

/**
 * Run this script (from root directory): yarn babel-node scripts/name-check
 *
 * This will run following checks:
 *
 * 1. Package name is of the format "@exercism/typescript-<exercise>"
 *
 * This script also allows fixing these names: yarn babel-node scripts/name-check --fix
 */

import shell from 'shelljs'
import path from 'node:path'
import { packageFiles, registerExitHandler } from './helpers.mjs'

registerExitHandler()

let exitCode = 0

// First 2 arguments are node and script name skip them
// Check if rest has --fix
const fix = process.argv.slice(2).includes('--fix')

const envAssignment = shell.env['ASSIGNMENT']
const finalPackageFiles = envAssignment
  ? [path.join('exercises', envAssignment, 'package.json')]
  : packageFiles

// Check if package name in each exercises' package.json is of the format "@exercism/javascript-<exercise>"
finalPackageFiles.forEach((filePath) => {
  const file = JSON.parse(shell.cat(filePath).toString())

  const givenName = file['name']
  const exerciseName = filePath.split(/[/\\]/g)[2]
  const expectedName = `@exercism/typescript-${exerciseName}`

  if (givenName === expectedName) {
    shell.echo(`[Success]: Package name ${givenName} is in correct format`)
    return
  }

  if (fix) {
    file['name'] = expectedName
    const fileWithFixedName = new shell.ShellString(
      JSON.stringify(file, undefined, 2) + '\n'
    )
    fileWithFixedName.to(filePath)
    shell.echo(`[Success]: Fixed package name in ${filePath}`)
  } else {
    exitCode = 1
    shell.echo(
      `[Failure]: Package name in ${filePath} must be ${expectedName}"`
    )
  }
})

shell.exit(exitCode)
