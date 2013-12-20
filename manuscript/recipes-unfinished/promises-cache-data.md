# How to cache data with promises

## Problem

You want to cache an asynchronous request and always want to work with a promise.
The fetching of the data from the memory cache is synchronous. If the cache misses, it's asynchronous.


## Solution

The solution is to always return a promise. If the data is cached, we just immediately resolve the promise.
We should you how to do this very easily.

### Covert a value to a promise

The first question is how to convert a cached value into a promise.

A naive solution would be

    var deferred = $q.defer();
    deferred.resolve(cachedValue);
    return deferred.promise;

Because it's such a common pattern, AngularJS has a shortcut for it:

    $q.when(cachedValue)

T> `$q.when` is capable of a lot more, see [convert 3rd party promises](#promises-convert-3rd-party).


### Promise all the time

To always return a promise, we check if the the return value is already cached. If it it,
we return a resolved promise with `$q.when`. If not we call our promise and on success we'll cache the result.

    if (cache) {
        return $q.when(cache);
    } else {
        return promise.then(function(result) {
            cache = result;
            return reulst;
        });
    }

You'll find a full working example in the code section.






