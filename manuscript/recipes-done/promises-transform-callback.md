# How to transform every callback into a promise

## Problem

You have a 3rd party library which uses callbacks. You have some async mechanism in your app and need to wait for the result
of several events. Maybe an $http promise and the result of external api which uses normal callbacks. Now you want
to chain them like in [How to wait for several async events] or want to have an unified api.

%% TODO: Insert link


## Solution

As an example we use the camera feature of phonegap. The original definition looks like this:

~~~~~~~~
navigator.camera.getPicture(cameraSuccess, cameraError, [ cameraOptions ]);
~~~~~~~~

As an promise we want sth. like this:

~~~~~~~~
phonegapCamera.getPicture([ cameraOptions ]).then(success, failure);
~~~~~~~~

The necessary steps are:

1. Make sure that you injected `$q`
2. Create a deferred object with `$q.defer()`
3. Define the library function with callbacks
4. Use `deferred.resolve(data)` in the success function
5. Use `deferred.reject(error)` in the error function
6. Return `deferred.promise`

Result:

~~~~~~~~
function getPicture(options) {
    var deferred = $q.defer()

    navigator.camera.getPicture(onSuccess, onFail, options);

    function onSuccess(imageData) {
        deferred.resolve(imageData);
    }

    function onFail(message) {
        deferred.reject(message);
    }

    return deferred.promise;
}
~~~~~~~~


Because we can pass functions as arguments and callback and resolve/reject take both exactly one parameter,
we can also write a much simpler version (complete example):

~~~~~~~~
app.factory('phonegapCamera', function($q) {
    function getPicture(options) {
        var deferred = $q.defer()
        navigator.camera.getPicture(deferred.resolve, deferred.reject, options);
        return deferred.promise;
    }

    return {
        getPicture: getPicture
    }
}
~~~~~~~~

Unfamilar with the declaration used in the factory? Learn more here:

%% TODO: Insert link