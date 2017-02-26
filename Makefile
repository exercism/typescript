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

all: test

test-assignment:
	@printf "\e[4mRunning tests for $(ASSIGNMENT) assignment\e[0m\n"
	@cp -a common/. $(INTDIR)
	@sed 's/xit/it/g; s/xdescribe/describe/g' exercises/$(ASSIGNMENT)/$(TSTFILE) > $(INTDIR)/$(TSTFILE)
	@cp exercises/$(ASSIGNMENT)/$(EXAMPLE) $(INTDIR)/$(ASSIGNMENT).$(FILEEXT)
	@cd $(INTDIR) && yarn install && yarn lint && yarn test

test:
	$(MAKE) checkAllPackageFilesAreTheSame
	@npm install tslint typescript -g
	@tslint './**/*.ts?(x)' -c "./common/tslint.json" --format "json" >> lintreport.json ; exit 0
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) test-assignment || exit 1; done
	

all: moveAllIntoCommonDir
all: moveCommonIntoSubDir

moveAssigmentToSub:
	@mv ./common/$(ASSIGNMENT).$(FILEEXT) exercises/$(ASSIGNMENT)/$(EXAMPLE)
	@mv ./common/$(TSTFILE) exercises/$(ASSIGNMENT)/$(TSTFILE)

moveAssigmentToCommon:
	@mv ./exercises/$(ASSIGNMENT)/$(EXAMPLE) common/$(ASSIGNMENT).$(FILEEXT)
	@mv ./exercises/$(ASSIGNMENT)/$(TSTFILE) common/$(TSTFILE)

moveAllIntoCommonDir:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) moveAssigmentToCommon || exit 1; done

moveCommonIntoSubDir:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) moveAssigmentToSub || exit 1; done
	
all: replacePackageFilesFromCommonToSubFolders

copyPackageFilesToSubFolder:
	@cp ./common/package.json exercises/$(ASSIGNMENT)/package.json
	@cp ./common/tsconfig.json exercises/$(ASSIGNMENT)/tsconfig.json
	@cp ./common/tslint.json exercises/$(ASSIGNMENT)/tslint.json
	@cp ./common/yarn.lock exercises/$(ASSIGNMENT)/yarn.lock

replacePackageFilesFromCommonToSubFolders:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) copyPackageFilesToSubFolder || exit 1; done

all: checkAllPackageFilesAreTheSame

checkPackageFilesMach:
	@cmp --silent ./common/package.json exercises/$(ASSIGNMENT)/package.json || exit 1;
	@cmp --silent ./common/tsconfig.json exercises/$(ASSIGNMENT)/tsconfig.json || exit 1;
	@cmp --silent ./common/tslint.json exercises/$(ASSIGNMENT)/tslint.json ||  exit 1;
	@cmp --silent ./common/yarn.lock exercises/$(ASSIGNMENT)/yarn.lock  || exit 1;

reportError:
	@echo "**Package files in |$(ASSIGNMENT)| are not equal to the |common| folder**" ;
	@exit 1
	
checkAllPackageFilesAreTheSame:
	@for assignment in $(ASSIGNMENTS); do ASSIGNMENT=$$assignment $(MAKE) checkPackageFilesMach || ASSIGNMENT=$$assignment $(MAKE) reportError || exit 1 ;done 
	@echo "==All package support files look to be the same as the ones in common=="


