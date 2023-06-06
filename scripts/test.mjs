#!/usr/bin/env node

/**
 * Run this script (from root directory): yarn test
 *
 * This runs `jest` tests for all sample solutions
 */

import shell from 'shelljs'
import * as helpers from './helpers.mjs'

const assignment = shell.env['ASSIGNMENT']

const infoStr = assignment
  ? '\nRunning tests for ' + assignment + '...'
  : '\nRunning tests for all exercises...'
const failureStr = '[Failure] Tests failed!'

// Copies the necessary files
shell.env['PREPARE'] = true

// Cleans up after
shell.env['CLEANUP'] = true

helpers.prepareAndRun('yarn jest --bail tmp_exercises', infoStr, failureStr)
