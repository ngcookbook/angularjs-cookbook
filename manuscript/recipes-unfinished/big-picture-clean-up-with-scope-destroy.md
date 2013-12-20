# Clean up tasks and resources before a scope is removed

## Problem

You have some tasks which you want to clean up before an element with a scope is remove from the DOM which would otherwise continue to chew up memory and CPU. This concerns especially timers.

## Solution

Before a scope is removed from its parent, AngularJS will send a `$destroy` event. This happens before tearing down
the scope.

To give an example we look at the following controller. The controller continuously updates a date in one second
intervals. This timer would also continue to go on after we removed the controller if we don't remove it manually.
With every instance of a new controller we would create a new timer which will run forever.

    .controller('DateController', function($scope, $timeout) {
        function updateDate() {
            $scope.now = new Date();
            $timeout(updateDate, 1000);
        };
        $timeout(updateDate, 1000);
    });

To prevent this, we listen for the `$destroy` event to stop the timeout loop. To do this we need to get a reference
to the `$timeout`. That way we can cancel the timer on the `$destory` event like shown here:

    .controller('DateController', function($scope, $timeout) {
        var dateTimer;
        function updateDate() {
            $scope.now = new Date();
            timer = $timeout(updateDate, 1000);
        };
        dateTimer = $timeout(updateDate, 1000);

        $scope.$on('$destroy', function() {
            if (dateTimer) { $timeout.cancel(dateTimer); }
        });
    });


%% http://odetocode.com/blogs/scott/archive/2013/07/16/angularjs-listening-for-destroy.aspx
%% http://stackoverflow.com/questions/14522426/destroy-directive-child-scope-on-scope-destroy
