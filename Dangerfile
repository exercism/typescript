require 'pathname';

# Ensure a clean commits history
if git.commits.any? { |c| c.message =~ /^Merge branch '#{github.branch_for_base}'/ }
  warn('Please rebase to get rid of the merge commits in this PR, otherwise, if this PR is small, this should be squash-merged so the merge commit is squashed.')
end
can_merge = github.pr_json["mergeable"]
is_merged = github.pr_json["merged"]

if is_merged
  warn("This PR was merged before CI was done.", sticky: false)
else
  warn("This PR cannot be merged yet.", sticky: false) unless can_merge
end

# Make it more obvious that a PR is a work in progress and shouldn't be merged yet
warn("PR is classed as Work in Progress") if github.pr_title.include? "[WIP]"

# Warn when there is a big PR
warn("Big PR") if git.lines_of_code > 500

# Ensure there is a summary
warn("Please provide a summary in the Pull Request description. See more info <a href=\"http\://tinyletter.com/exercism/letters/exercism-pull-requests\">here.</a>") if github.pr_body.length < 5

# LINT Comments in for each Line
jsonpath = "lintreport.json"
contents = File.read jsonpath
require "json"
if contents.to_s == ''
  contents = "[]"
end
json = JSON.parse contents

json.each do |object|
  source_file = Pathname.new(object["filePath"]).relative_path_from(Pathname.new(__dir__)).to_s

  (object["messages"] || []).each do |message|
    danger_message = "#{message["message"].to_s} (#{message["ruleId"].to_s})"
    source_line = message["line"]

    # only warn for files that were edited in this PR.
    if git.modified_files.include? source_file
      # get away from doing inline comments since they are buggy as of Sep-2016
      shortFile.prepend("/") unless source_file[0] == '/'

      warn(danger_message, file: source_file, line: source_line)
    else
      message(danger_message, file: source_file, line: source_line)
    end
  end
end
