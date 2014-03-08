# General purpose uniqueness validator

## Problem

You want to check if the input in an form field is unique, e.g. a login box.

## Solution

For this we have to write a custom validator. A validator is nothing else but a directive which includes a special controller.

As an example, we take the following excerpt from the `index.html`:

    <input type="text" name="login" ng-model="login"
           unique="checkUniqueLogin" required />

The attribute `unique` will be our directive and `checkUniqueLogin` is a function that has to exist on the current scope. This function is called with the value of `login` and returns a promise with either `true` or `false`
depending on the result of the check.

The interesting part here is the `unique` directive. The first thing is that we require `ngModel`. This means that
we expect a `ng-model` attribute in the same tag and want to share its controller. We then can access the controller in the link function as the 4th parameter which we call `ngModelCtrl`. The `ngModelCtrl` has a set of helper function for form validation (Learn more about the ng-model controller [here](TODO)). In the `$parsers` function we check if the current value has been changed. If it has changed, we call the function which we passed to the `unique` attribute with value as parameter and expect a promise a return value.

We can call a method from the controller here because the scope is not isolated. Now we just have to make sure that the `checkUniqueLogin` in the controller returns a promise which is either true or false.

<<(code/directives-validator-uniqueness/index.html)

<<(code/directives-validator-uniqueness/application.js)

<<(code/directives-validator-uniqueness/users.json)

<<(code/directives-validator-uniqueness/style.css)


