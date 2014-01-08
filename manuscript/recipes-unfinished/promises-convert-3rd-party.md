# Convert a 3rd party promise with $q.when {#promises-convert-3rd-party}

## Problem

You have a 3rd party promise and need to convert it into and $q promise


## Solution

Why would you need to convert a 3rd party promise if the api is compatible? Because AngularJS needs a hint when to do
 an $apply and start the dirty checking cycle. See more about dirty checking in [How to use the scope right]
 (#big-picture-use-the-scope-right).


### Promise is api compatible

If the promise you want to convert is compatible to the promise API `.then(successCallback,
errCallback)` it's really easy. You just have to use `$q.when(foreignPromise)` and AngularJS converts it for you.

Look at the following example where we convert a jQuery promise:

    $q.when($.ajax({url: 'users.json'})).then(function(users) {
        $scope.users = users;
    });

See the full in the code section.


### Convert an incompatible api

If you have a function with callbacks like success or error, the api is not compatible. But you can also use `$q .when` in this situation. `$q.when` can take three optional arguments like:

    function when(value, callback, errback, progressback)

So if you have a function like `ajaxLib` with has callback functions like `.success`, `.failure` and `.progress`,
you can convert it like so:

  $q.when(ajaxLib, ajaxLib.success, ajaxLib.failure, ajaxLib.progress)


%% Maybe find an example which uses this interface.

