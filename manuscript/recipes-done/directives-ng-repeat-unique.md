# Prevent duplicate warnings in ng-repeat

## Problem

If you use `ng-repeat` with duplicates in an array, you get the error message "Duplicates in a repeater are not
allowed".

## Solution

This happens because AngularJS exspects every element to have an unique identifier. This is for tracking the
insertion, deletion and moving of element. To change the identifier for the element you can use the `track by` syntax.

If the the following snippet throws an error:

    <li ng-repeat="item in [4,4,4]">

You can enforce artifical uniqueness by using the index of the current element in the repeater:

    <li ng-repeat="item in [4,4,4] track by $index">



