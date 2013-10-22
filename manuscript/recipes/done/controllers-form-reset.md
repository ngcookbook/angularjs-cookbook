# Reset a form

## Problem

You have a form and want to reset it to the initial state.

## Solution

We have to save the initial form state ourselves. We do this by creating a new variable `var initialFormData;` and
assign the original data with `initialFormData = formResponse.data`. If we would just use `scope.form =
initialFormData`, we would hand over the reference and it a change in `$scope.form` would also result in a direct
change in `initialFormData`. To prevent this, we have to separate them und work with a copy. AngularJS brings a
convenient method we can use called `angular.copy`. So everytime we need the initial state, we just use `$scope.form = angular.copy(initialFormData);`


<<(code/controllers-form-reset/index.html)

<<(code/controllers-form-reset/application.js)

<<(code/controllers-form-reset/person.json)


