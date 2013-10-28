# Select box with multiple option

## Problem

You want to use a select box with the option `multiple`.

## Solution

The `ng-options` directive of AngularJS does work well with the `multiple` option. You don't need an extra
configuration for this. If `multiple` is present as an attribute, `ng-model` contains an array instead of a simple
type.

The binding here is also bidirectional. Below is an example how to use it. As you can see,
you can set initial values just by declaring an array.

<<(code/directives-select-multiple/index.html)

<<(code/directives-select-multiple/application.js)
