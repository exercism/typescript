# Tests

Before trying to execute the tests, ensure the assignment folder is set-up correctly by following the installation steps, namely `corepack yarn install` and the Editor SDK setup.

Execute the tests with:

```bash
$ corepack yarn test
```

## Skipped tests

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xit` to `it`.
Additionally tests may be grouped using `xdescribe`.
Enable the group by changing that to `describe`.
Finally, some exercises may have optional tests `it.skip`.
Remove `.skip` to execute the optional test.
