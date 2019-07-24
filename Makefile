# assignments
ASSIGNMENT ?= ""
IGNOREDIRS := "^(\.git|bin|node_modules|docs|.idea|build)$$"
ASSIGNMENTS = $(shell find ./exercises -maxdepth 1 -mindepth 1 -type d | cut -d'/' -f3 | sort | grep -Ev $(IGNOREDIRS))

#intermediate directories
TMPDIR ?= "/tmp"
INTDIR := $(shell mktemp -d "$(TMPDIR)/$(ASSIGNMENT).XXXXXXXXXX")

# language specific config (tweakable per language)
FILEEXT := "ts"
EXAMPLE := "$(ASSIGNMENT).example.$(FILEEXT)"
TSTFILE := "$(ASSIGNMENT).test.$(FILEEXT)"

all: test sync-configurations check-configurations

##
# Test a single assignment
#
# ASSIGNMENT=bob make test-assignment
#
test-assignment: prepare-test
	@printf "\e[4mRunning tests for $(ASSIGNMENT) assignment\e[0m\n"

# Copy special maintainers configuration
	@cp ./maintaining/.eslint.track.rc "$(INTDIR)/.eslintrc"

# Copy all the configuration from common to temp/<dir>/node_modules
	@cp ./common/.eslintignore "$(INTDIR)"
	@cp ./common/jest.config.js "$(INTDIR)"
	@cp ./common/package.json "$(INTDIR)"
	@cp ./common/tsconfig.json "$(INTDIR)"
	@cp ./common/yarn.lock "$(INTDIR)"

# Create a symlink from node_modules to temp/<dir>/node_modules
	@cp ./common/node_modules -rl "$(INTDIR)/node_modules"

# Copy the tests and enable all of them
	@sed 's/\bxit\b/it/g; s/\bxdescribe\b/describe/g' "exercises/$(ASSIGNMENT)/$(TSTFILE)" > "$(INTDIR)/$(TSTFILE)"

# Copy the example code as if it was the assignment submission
	@cp "exercises/$(ASSIGNMENT)/$(EXAMPLE)" "$(INTDIR)/$(ASSIGNMENT).$(FILEEXT)"

# Move into the directory, run the tests and run the linter
	cd "$(INTDIR)" && yarn test && yarn lint:ci

prepare-test:
	@printf "\e[4mPreparing tests\e[0m\n"
# Make sure node_modules exists so it can be symlinked
	cd ./common && yarn install

##
# Test all the assignments. Tis is meant for maintainers of the repository. Runs
# through all the different assignments and calls "make test-assignment" on it.
#
# make test
#
test: check-configurations check-stubs report
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment "$(MAKE)" test-assignment || exit 1; done

##
# Generate a lint report for all .ts(x) files of all exercises. It does so by
# temporarily installing the maintaining configuration in the exercises folder,
# installing the dependencies and running eslint.
#
# make report
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
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment "$(MAKE)" sync-assignment-configuration || exit 1; done

check-assignment-configuration:
	@cmp --silent ./common/.eslintrc "exercises/$(ASSIGNMENT)/.eslintrc" || exit 1;
	@cmp --silent ./common/.eslintignore "exercises/$(ASSIGNMENT)/.eslintignore" || exit 1;
	@cmp --silent ./common/jest.config.js "exercises/$(ASSIGNMENT)/jest.config.js" || exit 1;
	@cmp --silent ./common/yarn.lock "exercises/$(ASSIGNMENT)/yarn.lock" || exit 1;
	@cmp --silent ./common/package.json "exercises/$(ASSIGNMENT)/package.json" || exit 1;
	@cmp --silent ./common/tsconfig.json "exercises/$(ASSIGNMENT)/tsconfig.json" || exit 1;
	@cmp --silent ./common/yarn.lock "exercises/$(ASSIGNMENT)/yarn.lock" || exit 1;

check-configurations:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment "$(MAKE)" check-assignment-configuration || ASSIGNMENT=$$assignment "$(MAKE)" report-error || exit 1 ;done
	@echo "==All package configuration matches common configuration=="

check-assignment-stub:
	@[ -f ./exercises/$(ASSIGNMENT)/$(ASSIGNMENT).$(FILEEXT) ] || exit 1;

check-stubs:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment "$(MAKE)" check-assignment-stub || ASSIGNMENT=$$assignment "$(MAKE)" report-no-stub || exit 1 ;done
	@echo "==All exercises contain a stub file (<exercise-name>.ts)"

report-error:
	@echo "**Package files in |$(ASSIGNMENT)| are not equal to the |common| folder**" ;
	@exit 1

report-no-stub:
	@echo "**Exercise |$(ASSIGNMENT)| does contain a stub file**" ;
	@exit 1

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
