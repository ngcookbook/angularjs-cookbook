# TODO: How to cache data with promises

## Problem

You want to cache an asynchronous request and always want to work with a promise.
The fetching of the data from the memory cache is synchronous. If the cache misses, it's asynchronous.


## Solution

A naive solution would be

~~~
var deferred = $q.defer();
deferred.resolve(cache);
return deferred.promise;
~~~

Because it's such a common pattern, AngularJS has a shortcut for it:

`$q.when(cache)`