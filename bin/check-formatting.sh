#!/usr/bin/env bash

set -uo pipefail

if [ -z "${EXERCISM_PRETTIER_VERSION:-}" ]; then
  echo "[format] pulling prettier version from yarn.lock using sed"
  EXERCISM_PRETTIER_VERSION="$(yarn info prettier --json --name-only | sed -n -e 's/^"prettier@npm://' -e 's/"//p')"
  echo "[format] expected version is now ${EXERCISM_PRETTIER_VERSION:-}"
fi

if [ -z "${EXERCISM_PRETTIER_VERSION:-}" ]; then
  echo "Version could not be pulled using sed" >&2
  echo "[format] pulling prettier version from yarn.lock using grep"
  EXERCISM_PRETTIER_VERSION="$(yarn info prettier --json --name-only | grep -Po '"prettier@npm:\K[^"]+')"
  echo "[format] expected version is now ${EXERCISM_PRETTIER_VERSION:-}"
fi

if [ -z "${EXERCISM_PRETTIER_VERSION:-}" ]; then
  echo "Version could not be pulled using grep or sed" >&2
  echo ""
  echo "---------------------------------------------------"
  echo "This script requires the EXERCISM_PRETTIER_VERSION variable to work."
  echo "Please see https://exercism.org/docs/building/markdown/style-guide for guidance."
  echo "---------------------------------------------------"
  echo "$(yarn -v)"
  echo ""
  echo "This is what yarn why reports:"
  echo "$ yarn why prettier"
  echo "$(yarn why prettier)"
  echo ""
  echo "And yarn info reports the following:"
  echo "$ yarn info prettier --name-only"
  echo "$(yarn info prettier --name-only)"
  echo ""
  echo "This is the version that can be extracted using grep:"
  echo "$ yarn info prettier --json --name-only | grep -Po '"prettier@npm:\K[^"]+'"
  echo "└─ $(yarn info prettier --json --name-only | grep -Po '"prettier@npm:\K[^"]+')"
  echo ""
  echo "This is the version that can be extracted using sed:"
  echo "$ yarn info prettier --json --name-only | sed -n -e 's/^"prettier@npm://' -e 's/"//p'"
  echo "└─ $(yarn info prettier --json --name-only | sed -n -e 's/^"prettier@npm://' -e 's/"//p')"
  echo ""
  echo "These files are found in the repo root:"
  echo "$(ls -p | grep -v /)"
  echo "---------------------------------------------------"
  exit 1
else
 echo "[format] running with prettier@$EXERCISM_PRETTIER_VERSION"
fi

yarn dlx "prettier@$EXERCISM_PRETTIER_VERSION" --check "**/*.{js,jsx,ts,tsx,css,sass,scss,html,json,md,yml}"
