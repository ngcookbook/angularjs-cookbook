# Deregister an event listener

## Problem

You have registered an AngularJS event listener with `scope.$on` and want to deregister it but you haven't found sth.
 like an `.off()` method.

## Solution

The solution is found in the source code. If we look at the function definition of the `$on` function we see that it
return a function itself. This function is capable of deregistering the listener.


    $on: function(name, listener) {
      var namedListeners = this.$$listeners[name];
      if (!namedListeners) {
        this.$$listeners[name] = namedListeners = [];
      }
      namedListeners.push(listener);

      return function() {
        namedListeners[indexOf(namedListeners, listener)] = null;
      };
    }

To get this to work, we have to save a reference to our the returned function of `$on`. When we finally want to
remove the listener, we just have to execute it.

    var myEventOffFn = $scope.$on('onMyEvent', myListener);

    // remove listener
    myEventOffFn();
