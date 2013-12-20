# Redirect to an error page

## Problem

If an error occurs, you want to redirect the user to an error page.


## Solution

The solution is to use the `$exceptionHandler`.
The tricky part here is to avoid a cycliomatic dependency error.
Instead of injecting the $location service directly, we use $injector and get the $location service manually.
After that we just change the path.

    .factory('$exceptionHandler', function($injector) {
        var $location;
        return function(exception, cause) {
            $location = $location || $injector.get('$location');
            $location.path('/error');
        };
    });