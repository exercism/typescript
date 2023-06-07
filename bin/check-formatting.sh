#!/bin/bash

if [ -z "$EXERCISM_PRETTIER_VERSION" ]; then
  echo "Pulling prettier version from package.json"
  EXERCISM_PRETTIER_VERSION=$(yarn why prettier | grep -Po '.*\sprettier@npm:\K[^\s]+')
fi

if [ -z "$EXERCISM_PRETTIER_VERSION" ]; then
  echo "---------------------------------------------------"
  echo "This script requires the EXERCISM_PRETTIER_VERSION variable to work."
  echo "Please see https://exercism.org/docs/building/markdown/style-guide for guidance."
  echo "---------------------------------------------------"
  echo "$(yarn -v)"
  echo ""
  echo "This is what yarn why reports:"
  echo "$ yarn why prettier"
  echo "└─ $(yarn why prettier)"
  echo ""
  echo "This is the version that can be extracted using grep:"
  echo "$ yarn why prettier | grep -Po '.*\sprettier@npm:\K[^\s]+')"
  echo "└─ $(yarn why prettier | grep -Po '.*\sprettier@npm:\K[^\s]+')"
  echo ""
  echo "These files are found in the repo root:"
  echo "$(ls -p | grep -v /)"
  echo "---------------------------------------------------"
  exit 1
else
 echo "Running format with prettier@$EXERCISM_PRETTIER_VERSION"
fi

npx "prettier@$EXERCISM_PRETTIER_VERSION" --check "**/*.{js,jsx,ts,tsx,css,sass,scss,html,json,md,yml}"
