# Mocking http requests

## Problem

You want to test your service which itself uses $http. You want to isolate your tests a mock the returned data.


## Solution

We take the following factory as an example:

<<(code/testing-mock-http-requests/application.js)

    .factory('Task', function($http) {
        return {
            all: function() {
                return $http.get('/tasks').then(function(tasksResponse){
                    return tasksResponse.data;
                });
            }
        };
    });

The Task factory should just return a list of the task and return the data directly instead of an response object.
What's problematic here, that if we test it, we want to isolate it without a backend. And even if we could isolate
it, how do we manage to resolve the promise, returned be the service.

The way to do it, is to use the `$httpBackend` service. This is a fake backend service,
whom we can tell which data it should return. It is also capable of resolving the promises.

The way to use it, you see in the following code:

<<(code/testing-mock-http-requests/test/application.spec.js)
