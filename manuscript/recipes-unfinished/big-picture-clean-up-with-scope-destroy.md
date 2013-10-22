# TODO: Clean up with the scope destroy event

## Problem

## Solution





%% http://odetocode.com/blogs/scott/archive/2013/07/16/angularjs-listening-for-destroy.aspx
%% http://stackoverflow.com/questions/14522426/destroy-directive-child-scope-on-scope-destroy

Angular will broadcast a $destroy event just before tearing down a scope and removing the scope from its parent.

Listening for this event is crucial for cleaning up tasks and resources that otherwise might continue to chew up memory or CPU.

As an example, the following controller continuously updates a model value in one second intervals, and these updates will continue forever, even after the controller’s view is gone and the scope is removed from its parent. Even worse, if the user is navigating back and forth to a view that loads this controller, each navigation will add another timer that runs forever.

~~
module.controller("TestController", function($scope, $timeout) {

    var onTimeout = function() {
        $scope.value += 1;
        $timeout(onTimeout, 1000);
    };
    $timeout(onTimeout, 1000);
    $scope.value = 0;

});
~~~

Listening for the $destroy event is an opportunity to halt the timer. One approach is to cancel the promise returned by $timeout.

module.controller("TestController", function($scope, $timeout) {

    var onTimeout = function() {
        $scope.value += 1;
        timer = $timeout(onTimeout, 1000);
    };
    var timer = $timeout(onTimeout, 1000);

    $scope.value = 0;

    $scope.$on("$destroy", function() {
        if (timer) {
            $timeout.cancel(timer);
        }
    });
});