# Create a digital clock

## Problem

You want to create a directive which shows the current time.

## Solution

The solution is a little directive with a timer. For displaying the date we use the date filter which does the
formatting for us (`<div ng-bind="now | date:\'HH:mm:ss\'"></div>`). The updating is done through a timer with
`setInterval()`. The first important thing hereby is to call `scope.$apply()` after the `now` variable has
been updated on the scope. The second is to remove the timer when the directive is removed from the DOM. This is done
 by listening to the `$destroy` event which is called when the removal of the directive happens.

<<(code/directives-digital-clock/application.js)

<<(code/directives-digital-clock/index.html)


