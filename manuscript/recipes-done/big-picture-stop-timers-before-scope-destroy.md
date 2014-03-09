# Stop timers before a scope is removed

## Problem

You have a timer which is still running after switching the url. You want
to stop it up before the scope is removed.


## Solution

AngularJS has its own eventing mechanism. Before a scope is removed from its
parent, AngularJS will send an event called `$destroy`. This happens before tearing down the scope.

To give an example, we look at the following controller. The controller continuously updates a date in one second intervals. This timer would also continue to run after we removed the controller. With every instance of a new controller we would create a new timer which will then run forever. Thus we have to remove it manually.

    .controller('DateController', function($scope, $interval) {
      function refreshDate() { $scope.now = new Date(); };
      $interval(refreshDate, 1000);
    });

To solve this, we have to listen for the `$destroy` event and stop the timer.
To do this, we need to hold a reference to timer (`dateTimer`). That way,
we can cancel the timer on the `$destroy` event like shown here:

    .controller('DateController', function($scope, $timeout) {
      var dateTimer;

      function refreshDate() { $scope.now = new Date(); };
      dateTimer = $interval(refreshDate, 1000);

      $scope.$on('$destroy', function() {
        if (dateTimer) { $interval.cancel(dateTimer); }
      });
    });

