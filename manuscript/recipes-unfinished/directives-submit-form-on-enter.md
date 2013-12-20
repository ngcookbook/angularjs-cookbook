# Submit form on enter key

## Problem

Usually if you press enter in a form field the form is submitted to the action defined in the ´<form>´ tag but you
want to call a function in your controller.

## Solution

The solution is to leave out the `action` attribute in `<form>` and use `ng-submit`. The expression in `ng-submit` is
 what gets executed when you press return inside a form field.

An complete example:

<<(code/directives-submit-form-on-enter/index.html)

<<(code/directives-submit-form-on-enter/application.js)

T> We use `track by $index` in `ng-repeat` here. This is a hack to allow duplicate entries in your list. Try what
happends if you leave it out.



