# Testing only a subset of tests

## Problem

You're testing and don't want to always run all of your tests.


## Solution

Jasmine has to really handy methods for this:

* ddescribe: Runs only the current describe block
* iit: Runs only the current test

If you want, you can have more than one ddescribe or iit. All tests with this special marker are run.


%% S94