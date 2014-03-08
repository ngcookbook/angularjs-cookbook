# Notification service delayed / sticky

## Problem

You want to give your user feedback about success / failure of an operation with notifications which close themselves after a short period.


## Solution

The adding/removing of notifications is solved by a service. The service holds an array of objects which are displayed by `ng-repeat` in the view. If you add a notification, there's also a close event after a certain timeout added.

For the implementation, we need a unique identifier for each list item. We can't rely on this position inside the array because of the dynamic nature of the list. So we use a global counter which is always incremented by one with every added notification.

<<(code/services-notifications/application.js)

<<(code/services-notifications/index.html)

<<(code/services-notifications/style.css)

## Discussion

Of course it's also possible to solve it with a directive.