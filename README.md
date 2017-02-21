# xTypeScript [![Build Status](https://travis-ci.org/exercism/xtypescript.png?branch=master)](https://travis-ci.org/exercism/xtypescript)

Exercism exercises in TypeScript

## Running Unit Test Suite

[Yarn](https://yarnpkg.com/en/docs/install) must be installed.    
If you have [node](https://nodejs.org) installed, you can install yarn via `npm`

    % npm install --global yarn

Then, `make` commands will install other dependencies as needed.

### All Assignments

    % make test

### Single Assignment

    % make test-assignment ASSIGNMENT=palindrome-products

## Shared Code

Please keep the `common` folder files synced across all the sub folders. These files should be the same across of problem. 

* package.json
* tsconfig.json
* tslint.json
* yarn.lock

There are some utility methods in the `Makefile` to help with development. The below will move the contents of the `common` to all the subfolders. 

	% make replacePackageFilesFromCommonToSubFolders
	
## Contributing Guide

Please see the [contributing guide](https://github.com/exercism/x-api/blob/master/CONTRIBUTING.md#the-exercise-data)

## License

The MIT License (MIT)

Copyright (c) 2017 Katrina Owen, _@kytrinyx.com

