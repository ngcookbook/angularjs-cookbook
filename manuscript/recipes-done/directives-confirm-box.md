# Show a confirm box before ng-click is executed

## Problem

For an delete button you don't want to execute a ng-click immediately but first show a confirm box


## Solution

We create a new directive which is called `confirmed-click` instead of `ng-click`. This directive works the same
(you can also use `$event` in it) but with a confirm box before the click is executed. Here is an example:

    <button confirmed-click="removeTask($index)">

The full view we use is a simple list with tasks you can delete. Before the deletion comes a confirm box:

<<(code/directives-confirm-box/index.html)

For this to works, we bind the element to the click event and create a new box and disable the butotn when its
clicked. The box itself has a new scope with two functions `ok()` and `cancel()`. If we click `ok()` we trigger the original click event. On
 `cancel()` we close the box an reenable the button.

<<(code/directives-confirm-box/application.js)

For the style we give the directive element a relative position, so that we can place the box we show absolute to it:

<<(code/directives-confirm-box/style.css)


