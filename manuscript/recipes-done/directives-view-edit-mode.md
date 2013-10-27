# TODO: How to switch input field between view / edit mode

## Problem

You have a form but don't want to allow editing directly. You need something like a view mode which can be switched to
edit mode.

## Solution

The solution is to solve it mainly through styling. We change the styling for the disabled state of an element like
it's normal text. Then we create a directive `editMode` which toggles the styling class and adds / removes the
disabled attribute.

<<(code/directives-view-edit-mode/application.js)

<<(code/directives-view-edit-mode/index.html)

<<(code/directives-view-edit-mode/style.css)

