# Textarea char limit with remaining counter

## Problem

You want a counter for remaining chars for your textarea

## Solution

We create a directive which appends an counter element after the textarea. To get the value of `ng-model`,
we require the `ngModel` controller which is the preferred way if there's a `ng-model`.

For the counter of the remaining characters we create a template in a variable `counterTemplate`. for this template
we create a new fresh scope `counterScope` and compile the template against this scope. We then append it after the
textarea element with `element.after(...)`.

Everytime there's a change in the model, the parser chain of the `ngModel` controller is called which we use. There
we just calculate the current length, truncate it when it's to long and refresh the variable `remaining` on the
`counterScope`.

<<(code/directives-textarea-maxlength-counter/application.js)

<<(code/directives-textarea-maxlength-counter/index.html)

