angular.module('cookbookApp', [])
    .directive('dateselect', function() {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {

            }
        };
    })
   .controller('MainController', function($scope, $interpolate) {
        $scope.result = 'fsdfds';
        $scope.result = $interpolate('Hello {{name}}!')({name: 'World'});


    });


