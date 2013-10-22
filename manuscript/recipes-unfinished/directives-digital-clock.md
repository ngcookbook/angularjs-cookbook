# TODO: Create a digital clock

## Problem


## Solution

%% http://stackoverflow.com/questions/18647248/creating-a-simple-timer-in-angularjs



.directive('dateTime', function() {
    return {
        scope: {
            format: "@",
            updateRate: "@"
        },
        restrict: 'E',
        transclude: true,
        // TODO: i18n
        template: '<div><span class="time-content" ng-bind=\"now | date:format\"></span><div class="time-content" ng-transclude></div></div>',
        link: function (scope, element, attrs) {
            // Default Values
            if(!attrs.updateRate) attrs.updateRate = 1000;
            if(!attrs.format) attrs.format = "HH:mm:ss";

            scope.now = new Date();
            // Create the update function
            // https://groups.google.com/forum/#!topic/angular/e2CfWnHjvfU
            var timeoutID = window.setInterval(function() {
                scope.now = new Date();
                scope.$apply();
            },attrs.updateRate);

            scope.$on("$destroy",function(){
                window.clearInterval(timeoutID);
            })
        }}
});
