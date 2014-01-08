# All / none / invert for a list of checkboxes {#list-all-none-invert}

## Problem

You have a list of check boxes and you want to give the user an easy way to select all, none or invert the states. Buttons for these options should be disabled if not possible.


## Solution

For this example, we create an array of objects. An object consists of a boolean field `completed` which represents
the state of the checkbox and a `title` field (`[{ completed: ..., title: ...}, ...]`).

For the buttons, we need the count of all completed tasks. We create a new variable `completedTasksCount` on the scope and update it on every change of the array. To do this, we create a watcher with `$scope.$watch('tasks', ...,
 true);`. The `true` as a third parameter is important to signal AngularJS to do a deep watch and inspect all the object in the arrays.

With the count of the all completed tasks, we can disable the button for select all if all tasks already checked with
`ng-disabled="completedTasksCount == tasks.length"`. The implementation for select none works similarly.

For `selectAllTasks()`, `deselectAllTasks()` and `invertAllTasks()`, we use the each function from AngularJS to iterate over the array and modify the state of completed.

<<(code/controllers-list-all-none-invert/application.js)

<<(code/controllers-list-all-none-invert/index.html)
