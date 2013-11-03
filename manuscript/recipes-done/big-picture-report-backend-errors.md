# Report backend errors

## Problem

You want to catch your backend errors and display them directly in the frontend to help you as a developer.


## Solution

X> Complete [source](https://github.com/sbrink/angularjs-cookbook-code/tree/gh-pages/big-picture-report-backend-errors) and [demo](http://sbrink.github.io/angularjs-cookbook-code/big-picture-report-backend-errors).

The solution consists of two parts. A directive and an http interceptor.

We define the the http interceptor as a service and transform the error into and event and broadcast it with `$rootScope.$broadcast('responseError', responseError);`.

The directive `errorOutput` just waits for the error events and appends new one to the end.

<<(code/big-picture-report-backend-errors/application.js)

Here is the really simple view which has just the element for displaying data:

<<(code/big-picture-report-backend-errors/index.html)


%% TODO Reference to global timeout recipe