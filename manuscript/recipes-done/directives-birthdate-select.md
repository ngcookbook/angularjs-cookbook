# Build a date select

## Problem

You want to give the user a date selection with month, day and year.

## Solution

For this we build a custom directive which takes and date object. The directive uses two-way-databinding to sync the
select fields with the attribute `model`.

We will call our directive `dateselect` and will use the following html code for it. We use two directive to show the
 synchronization between them:

<<(code/directives-birthdate-select/index.html)

We initialize the `current` variable with the current date in the controller.

<<(code/directives-birthdate-select/application.js)

The directive works as follows:

We set `restrict` the *E* (for element), to allow dateselect as tag. We use an isolated scope with `model` as our
communicator to the outside world. In the template we simply draw three select fields for month, day and year. We generate the necessary options in the controller.

Because we can fully rely on the template, we don't need the link function here and just use the controller.

The controller is the part where the whole work is done. Here we have three loops for days,
months and years for the select boxes. Furthermore we initialize an object `date`, to hold the selected month,
day and year.

Additionally we have to watches. One to reflect a model change from the outside and one to reflect a change from the select boxes.

W> Be careful to set the `true` as second parameter for `$scope.$watch('...', function() {}, true)`. This signals to do a deep watch. Otherwise the updating won't work all of the time.

The two watches are very similar. If the `model` attribute changes, we update the select fields. If we change one of
the select boxes, we update the model. Just just have to be careful with the month. The month is inconsistent. While
days begin with 1, months begin with 0. This means you have to add or subtract 1.