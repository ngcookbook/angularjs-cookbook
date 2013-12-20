# Easy filtering with the filter filter

## Problem

In your view you need a simple filter which only concerns your current view/controller.


## Solution

This one confuses a lot of people. AngularJS has a concept called filters. With that you can transform a string or a
collection by using a pipe `|`. But one of the default filters which AngularJS brings with it,
is also called filter. This filter filter is what we use here.

The filter filter is a general purpose filter which can take string, options and functions as parameters. It has an
optional third argument which does exact matches for strings and objects.

In the following examples we use this list (in JSON notation) as example:

<<(code/filters-the-filter-filter/users.json)

### String

If you use a string as input field, you're matching all object containing this string. If you take the list of uses
you can type `il` and and match B*il*l and Ph*il*. If you want exact matches you would use `true` as third argument.

    <tr ng-repeat="user in users | filter:withString">


### Object

If you don't want to match every attribute in an object, you can use object notation and specify a subset of fields.
Here we only filter for the gender *male*. We use the second parameter to do an exact match. Otherwise we would get
all rows with fe*male*, too.

    <tr ng-repeat="user in users | filter:{ gender: 'male' }:true">

There is one special in object notation - the `$` attribute. This is an wilcard like the normal string.

    <tr ng-repeat="user in users | filter:{ $: withWildcard, gender: 'female' }">

### Function

If you need a more complex filter which is only used in this controller and you don't want to create a filter on its
own, you can also pass a function.

The function is evaluated for each element in the collection. So in our example you would test each single user for a
 given condition. Here we filter all users which are under 40.

    $scope.underForty = function(user) {
        return user.age < 40;
    };

    <tr ng-repeat="user in users | filter:underForty">
