# Show a box on outstanding http requests (simple)

## Problem

While you sending http request, you want to show a box or a loading spinner

## Solution

As the solution here, we write a directive which shows an element if a condition is true. This could be a simple div
with a string or a loading spinner. It doesn't matter where you place it in your DOM because the scope is isolated.

The way it works is, that it injects the `$http` because we need to know the count of the pending requests. After a
request is started, the count changes and so does `$http.pendingRequests.length`. When it does,
we get the result of `http.pendingRequests.length > 0` in the variable `value`. This is either `true` or `false`. We
write the result in `$scope.waiting` and our div is visible or hidden depending of the state.

    .directive('waitingForRequest', function($http) {
      var pendingRequests = function() {
        return $http.pendingRequests.length > 0;
      };
      return {
        restrict: 'E',
        scope: {},
        template: '<div ng-show="waiting">Waiting for request to finish...</div>',
        controller: function($scope) {
          $scope.$watch(pendingRequests, function(value) {
            console.log('Pending requests: '+ $http.pendingRequests.length);
            $scope.waiting = value;
          });
        }
      };
    })

## Discussion

This is a really simple but not the best solution. But for most applications it should be good enough. There are to
issues here:

The watcher is executed every time an apply() is called. This means `$http.pendingRequests.length > 0` is called a
lot of times. But for most applications it's does not mean a real performance hit.
