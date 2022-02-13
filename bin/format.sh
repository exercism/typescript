#!/usr/bin/env bash

if [ -z "$EXERCISM_PRETTIER_VERSION" ]; then
  echo "Pulling prettier version from package.json"
  EXERCISM_PRETTIER_VERSION=$(yarn list --pattern prettier | grep -Po '.*\sprettier@\K.*')
fi

if [ -z "$EXERCISM_PRETTIER_VERSION" ]; then
  echo "---------------------------------------------------"
  echo "This script requires the EXERCISM_PRETTIER_VERSION variable to work."
  echo "Please see https://exercism.org/docs/building/markdown/style-guide for guidance."
  echo "---------------------------------------------------"
  echo "This is what yarn list reports:"
  echo "$(yarn list --pattern prettier)"
  echo ""
  echo "This is the version that can be extracted:"
  echo "$(yarn list --pattern prettier | grep -Po '.*\sprettier@\K.*')"
  echo ""
  echo "These files are found in the repo root:"
  echo "$(ls -p | grep -v /)"
  echo "---------------------------------------------------"
  exit 1
else
 echo "Running format with prettier@$EXERCISM_PRETTIER_VERSION"
fi

npx "prettier@$EXERCISM_PRETTIER_VERSION" --write "**/*.{js,jsx,ts,tsx,css,sass,scss,html,json,md,yml}"
