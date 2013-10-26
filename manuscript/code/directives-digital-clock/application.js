angular.module('cookbookApp', [])
    .directive('digitalClock', function($window) {
        return {
            restrict: 'E',
            scope: {},
            template: '<div ng-bind="now | date:\'HH:mm:ss\'"></div>',
            link: function (scope) {
                scope.now = new Date();
                var clockTimer = $window.setInterval(function() {
                    scope.now = new Date();
                    scope.$apply();
                }, 1000);

                scope.$on('$destroy', function(){
                    $window.clearInterval(clockTimer);
                });
            }
        };
    });

