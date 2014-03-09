# Redirect to an error page

## Problem

If an error occurs, you want to redirect the user to a general error page.


## Solution

For the solution we use the `$exceptionHandler`. The tricky part here is to
avoid a cycliomatic dependency error `$location <- $exceptionHandler <-
$rootScope`. In order to solve this, we avoid using the `$location` service
directly. Instead we use an indirect way and inject the `$injector`. With this service we get `$location` manually.

    .factory('$exceptionHandler', function($injector) {
      var $location;
      return function(exception, cause) {
        $location = $location || $injector.get('$location');
        $location.path('/error');
      };
    });