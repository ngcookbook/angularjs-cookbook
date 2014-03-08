# Enable the save button only on valid form data

## Problem

You have a form with a save button and you want to only enable it when the form data use typed is valid.


## Solution

Not only single form fields but the whole form has its own states to test its validity. You can test for `$dirty`  and `$valid`. 

For example: If we a use a form with the name `form`, we could only enable the submit button if the user changes one of the fields (dirty) and if then all fields are valid.

    <button ng-disabled="!(form.$dirty && form.$valid)">Save</button>


W> Be sure to give the form a name. Additionally, set `novalidate` as attribute and disable the browser's own validations.


Here's the full working example:

<<(code/directives-disable-save-button/index.html)

<<(code/directives-disable-save-button/style.css)
