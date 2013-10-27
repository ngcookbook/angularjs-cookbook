# Set global timeout for $http

## Problem

You want to increase the timeout of your `$http` service globally.

## Solution

The `$http` has a concept called interceptors. With interceptors you can modify the passed config object before it is
 used by the `$http` service. To do this you can either use a factory or an anonymous function and push it to the
 interceptors array of the `$httpProvider`.

You call the request interceptor with a http config object. You can now modify it and return it.

Here are both variants with factory and anonymous function:

~~~
angular.module('cookbookApp')
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('timeoutHttpInterceptor');
    })
    .factory('timeoutHttpInterceptor', function ($q) {
        return {
            'request': function(config) {
                config.timeout = 8000;
                return config || $q.when(config);
            }
        };
    });
~~~

~~~
angular.module('cookbookApp')
    .config(function($httpProvider) {
        $httpProvider.interceptors.push(function($q) {
            return {
                'request': function(config) {
                    config.timeout = 8000;
                    return config || $q.when(config);
                }
            },
        });
    });
~~~


%% TODO Reference to big-picture-report-backend-errors


%% http://stackoverflow.com/questions/15015416/how-to-set-a-global-http-timeout-in-angularjs
%% Caching a http request (http://stackoverflow.com/questions/15402867/angularjs-caching-a-rest-request)
%% http://docs.angularjs.org/api/ng.$http