# Disable trimming in input fields

## Problem

You need the data from a textarea as it is on saving without the automatic trimming.


## Solution

AngularJS makes good assumptions as default. For example, automatic trimming. If you don't want it, you can disable it with:

    <textarea ng-model="bio" ng-trim="false"></textarea>