# General purpose uniqueness validator

## Problem

You want to check if the input in an form field is unique, e.g. a login box.

## Solution

For this we have to write a custom validator. A validator is nothing else but a directive which includes a special controller.

As an example we take the following snippet:

    <input type="text" name="login" ng-model="login" unique="checkUniqueLogin" required/>


<<(code/directives-validator-uniqueness/index.html)

<<(code/directives-validator-uniqueness/application.js)

<<(code/directives-validator-uniqueness/users.json)

<<(code/directives-validator-uniqueness/style.css)


