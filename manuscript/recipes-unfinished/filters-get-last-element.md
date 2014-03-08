# Get last element(s) in a collection (quick)

## Problem

You have a collection and only want to display the last element(s).

## Solution

You can use the `limitTo` filter for this. The filter allows negative values which limit the elements starting from the last one. `limitTo:-1` would only output the last element.

A working example:

<<(code/filters-get-last-element/index.html)

<<(code/filters-get-last-element/application.js)
