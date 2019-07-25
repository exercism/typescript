# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|bin|node_modules|docs|.idea|build)$$"
ASSIGNMENTS = $(shell find ./exercises -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f3 | sort | grep -Ev $(IGNOREDIRS))

#intermediate directories
INTDIR  := $(or $(INTDIR), $(shell mktemp -d))

# language specific config (tweakable per language)
FILEEXT := "ts"
EXAMPLE := "$(ASSIGNMENT).example.$(FILEEXT)"
TSTFILE := "$(ASSIGNMENT).test.$(FILEEXT)"

##
# Default task, which runs all the tests, ensures all the configurations are the
# same and checks them. The last two rules are to ensure these make targets are
# actually correct.
#
# make
#
all: test sync-configurations

##
# Test a single assignment
#
# ASSIGNMENT=bob make test-assignment
#
test-assignment: prepare-test-dependencies prepare-test-configuration enable-test-example
	@printf "\E[34mRunning tests for '$(ASSIGNMENT)'\E[0;10m\n"
	cd "$(INTDIR)" && yarn test && yarn lint:ci
	@ASSIGNMENT="$(ASSIGNMENT)" INTDIR="$(INTDIR)" "$(MAKE)" --no-print-directory cleanup-test

##
# Test all the assignments. This is meant for maintainers of the repository.
# Runs through all the different assignments, copies their tests and finally
# runs the equivalent of "make test-assignment" on it.
#
# Note: this works because by definition of how this entire file is set-up, no
#       two exercises can have the same name, or colliding files.
#
# make test
#
test: check-stubs check-configurations prepare-test-dependencies prepare-test-configuration
	@printf "\E[34mEnabling all tests\E[0;10m\n"
	@for assignment in $(ASSIGNMENTS); \
		do ASSIGNMENT=$$assignment INTDIR="$(INTDIR)" "$(MAKE)" --no-print-directory enable-test-example || exit 1; \
	done
	@printf "\E[34mRunning all tests ($(ASSIGNMENTS))\E[0;10m\n"
	cd "$(INTDIR)" && yarn test && yarn lint:ci

##
# Generate a lint report for all .ts(x) files of all exercises. It does so by
# temporarily installing the maintaining configuration in the exercises folder,
# installing the dependencies and running eslint.
#
# make report
#
# If you want this in a human-friendly output, run the following target instead:
#
# make lint-track
#
report:
# Add all the track level configuration
	@cp ./maintaining/package.track.json ./exercises/package.json
	@cp ./maintaining/tsconfig.track.json ./exercises/tsconfig.json
	@cp ./maintaining/.eslint.track.rc ./exercises
	@cp ./maintaining/.eslintignore.track ./exercises/.eslintignore

# Create the report
	@cd ./exercises && yarn install && yarn lint:report >> /dev/null || exit 0;
	@mv ./exercises/lintreport.json ./

# Remove all the track level configuration
	@rm -f ./exercises/package.json
	@rm -f ./exercises/tsconfig.json
	@rm -f ./exercises/.eslint.track.rc
	@rm -f ./exercises/.eslintignore
	@rm -f ./exercises/yarn.lock
	@rm -rf ./exercises/node_modules

lint-track:
# Add all the track level configuration
	@cp ./maintaining/package.track.json ./exercises/package.jsonR
	@cp ./maintaining/tsconfig.track.json ./exercises/tsconfig.json
	@cp ./maintaining/.eslint.track.rc ./exercises
	@cp ./maintaining/.eslintignore.track ./exercises/.eslintignore

# Lint everything
	@cd ./exercises && yarn install && yarn lint;

# Remove all the track level configuration
	@rm -f ./exercises/package.json
	@rm -f ./exercises/tsconfig.json
	@rm -f ./exercises/.eslint.track.rc
	@rm -f ./exercises/.eslintignore
	@rm -f ./exercises/yarn.lock
	@rm -rf ./exercises/node_modules

##
# Copy the configuration files from the "common" folder to the <exercise> folder
#
# ASSIGNMENT=bob make sync-assignment-configuration
#
sync-assignment-configuration:
	@cp ./common/.eslintrc "exercises/$(ASSIGNMENT)/.eslintrc"
	@cp ./common/.eslintignore "exercises/$(ASSIGNMENT)/.eslintignore"
	@cp ./common/jest.config.js "exercises/$(ASSIGNMENT)/jest.config.js"
	@cp ./common/package.json "exercises/$(ASSIGNMENT)/package.json"
	@cp ./common/tsconfig.json "exercises/$(ASSIGNMENT)/tsconfig.json"
	@cp ./common/yarn.lock "exercises/$(ASSIGNMENT)/yarn.lock"

##
# Copy the configuration from the "common" folder to each exercise folder
#
# make sync-configurations
#
sync-configurations:
	@for assignment in $(ASSIGNMENTS); \
		do ASSIGNMENT=$$assignment "$(MAKE)" sync-assignment-configuration || exit 1; \
	done

##
# Syncs the maintaining configuration to the root folder. This may be necessary
# for some IDE's/plugins. For example: there are various eslint plugins that
# will look for the tsconfig relative to the root (interpretation of ./tsconfig)
# instead of relative to .eslintrc.
#
# make sync-maintaining-root
#
sync-maintaining-root:
	@cp maintaining/.eslintignore ./
	@cp maintaining/.eslint.track.rc ./.eslintrc
	@cp maintaining/tsconfig.track.json ./tsconfig.json

#===============================================================================
# HELPER TARGETS
#
# Everything below here are helper functions. You don't need to run these
# targets yourself. They won't do you any good without proper set-up or very
# specific use-cases.
#===============================================================================

##
# Copy the tests for an exericse and enable all the actual tests inside. Also
# copy the example code as if it was the assignment submission.
#
enable-test-example:
	@printf "\E[1K\r\E[36mEnabling tests for '$(ASSIGNMENT)' ($(INTDIR))\E[0;10m"
	@sed 's/\bxit\b/it/g; s/\bxdescribe\b/describe/g' "exercises/$(ASSIGNMENT)/$(TSTFILE)" > "$(INTDIR)/$(TSTFILE)"
	@cp "exercises/$(ASSIGNMENT)/$(EXAMPLE)" "$(INTDIR)/$(ASSIGNMENT).$(FILEEXT)"

##
# Install all the dependencies of "common", which will be used to run the tests.
#
# Note: Because the tests use the maintainers eslint, that eslint can NOT
#       contain _more_ dependencies than the common eslint.
#
prepare-test-dependencies:
	@printf "\E[34mPreparing test dependencies\E[0;10m\n"
	cd ./common && yarn install

##
# Copies the common configuration and maintaining eslint to the test directory.
#
prepare-test-configuration:
	@printf "\E[34mPreparing test configuration ($(INTDIR))\E[0;10m\n"
# Copy special maintainers configuration
	@cp ./maintaining/.eslint.track.rc "$(INTDIR)/.eslintrc"

# Copy all the configuration from common to temp/<dir>/node_modules
	@cp -n ./common/.eslintignore "$(INTDIR)"
	@cp -n ./common/jest.config.js "$(INTDIR)"
	@cp -n ./common/package.json "$(INTDIR)"
	@cp -n ./common/tsconfig.json "$(INTDIR)"
	@cp -n ./common/yarn.lock "$(INTDIR)"

# Create a symlink from node_modules to temp/<dir>/node_modules
	@cp -nrl ./common/node_modules "$(INTDIR)/node_modules"

##
# Remove the assignment files, leaving the testing directory configuration
# intact (so it may be re-used).
#
cleanup-test:
	@rm "$(INTDIR)/$(ASSIGNMENT).$(FILEEXT)"
	@rm "$(INTDIR)/$(TSTFILE)"

##
# Checks if all the package configuration matches common configuration
#
# Note: if this fails, use the following target to fix it:
#
#       ASSIGNMENT=failing make sync-assignment-configuration
#
check-assignment-configuration:
	@printf "\E[1K\r\E[36mCheck common configuration for '$(ASSIGNMENT)'\E[0;10m"
	@cmp --silent ./common/.eslintrc "exercises/$(ASSIGNMENT)/.eslintrc" || exit 1;
	@cmp --silent ./common/.eslintignore "exercises/$(ASSIGNMENT)/.eslintignore" || exit 1;
	@cmp --silent ./common/jest.config.js "exercises/$(ASSIGNMENT)/jest.config.js" || exit 1;
	@cmp --silent ./common/yarn.lock "exercises/$(ASSIGNMENT)/yarn.lock" || exit 1;
	@cmp --silent ./common/package.json "exercises/$(ASSIGNMENT)/package.json" || exit 1;
	@cmp --silent ./common/tsconfig.json "exercises/$(ASSIGNMENT)/tsconfig.json" || exit 1;
	@cmp --silent ./common/yarn.lock "exercises/$(ASSIGNMENT)/yarn.lock" || exit 1;

##
# Checks all the assignments their configuration
check-configurations:
	@printf "\E[34mChecking all asignments on their 'common' configuration\E[0;10m\n"
	@for assignment in $(ASSIGNMENTS); \
		do ASSIGNMENT=$$assignment "$(MAKE)" --no-print-directory check-assignment-configuration || ASSIGNMENT=$$assignment "$(MAKE)" --no-print-directory report-error || exit 1 ; \
	done
	@printf "\E[1K\r\E[32mAll package configuration matches common configuration\E[0;10m\n"

check-assignment-stub:
	@printf "\E[1K\r\E[36mCheck stub for '$(ASSIGNMENT)'\E[0;10m"
	@[ -f ./exercises/$(ASSIGNMENT)/$(ASSIGNMENT).$(FILEEXT) ] || exit 1;

check-stubs:
	@printf "\E[34mChecking all assignments on their stubs\E[0;10m\n"
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment "$(MAKE)" --no-print-directory check-assignment-stub || ASSIGNMENT=$$assignment "$(MAKE)" --no-print-directory report-no-stub || exit 1 ;done
	@printf "\E[1K\r\E[32mAll exercises contain a stub file (<exercise-name>.ts)\E[0;10m\n"

report-error:
	@printf "\E[1K\E[31mPackage files in '$(ASSIGNMENT)' are not equal to the 'common' folder\E[0;10m\n";
	@exit 1

report-no-stub:
	@printf "\E[1K\E[31mExercise '$(ASSIGNMENT)' does contain a stub file ($(ASSIGNMENT).ts)\E[0;10m\n";
	@exit 1
