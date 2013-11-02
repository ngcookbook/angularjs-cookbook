# How to use the same function for multiple watchers (quickie)

## Problem

You want to recalculate some function on the changing of different watches. You don't want to
copy it several times.

## Solution

AngularJS has a not so obvious solution for it. You can specify multiple watchers in an array like syntax. Instead of
 returning single variables for the new and old value, you get arrays.

Here's the code:

    $scope.$watch('[first, second, third]', function(newArray, oldArray){
        console.log(newArray[0]); // new value of first
        console.log(oldArray[0]); // old value of first

        console.log(newArray[1]); // new value of second
        console.log(oldArray[1]); // old value of second

        console.log(newArray[2]); // new value of third
        console.log(oldArray[2]); // old value of third
    },true);