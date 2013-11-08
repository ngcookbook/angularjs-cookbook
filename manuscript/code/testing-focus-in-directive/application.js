angular.module('focusApp', [])
    .directive('focusMe', function($timeout) {
        return {
            link: function (scope, element) {
                element[0].focus();
            }
        };
    });

