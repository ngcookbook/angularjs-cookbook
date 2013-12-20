# Write a blacklist validator

## Problem

You want to make sure that an input field or textarea does not contain a set of words from a blacklist.

## Solution

For this we have to write a custom validator. A validator is nothing else but a directive which includes a special controller.

As an example we take the following excerpt from the `index.html`:

    <input type="text" name="name" ng-model="name" blacklist="blacklistValues" />

The attribute `blacklist` is our custom validator which you pass an array of your blacklist. Most of the work is done
 by the `ngModelController`. The interesting part is how to get the array from the attribute. AngularJS has a service
  called `$parse` which can evaluate expressions. If we had an isolated scope, this is what the `@` sign does.

So we get the blacklist with $parse. We then can use one of the new [ES5 array functions]
(#big-picture-es5-array-functions) to check if the model contains one of the element in the blacklist array. If it
does we set the field invalid.

<<(code/directives-validator-blacklist/index.html)

<<(code/directives-validator-blacklist/application.js)

<<(code/directives-validator-blacklist/style.css)



