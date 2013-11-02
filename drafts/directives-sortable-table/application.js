angular.module('cookbookApp', [])
    .directive('thSortable', function() {
        return {
            transclude: true,
            template: '<a href ng-click="changeColumn()" ng-class="{active: sort.column == column}">' +
                '<span ng-transclude></span></a>',
            scope : {
                sort: '=thSortable',
                column: '@thColumn'
            },
            controller: function($scope) {
                $scope.changeColumn = function() {
                    if ($scope.sort.column === $scope.column) {
                        $scope.sort.reverse = !$scope.sort.reverse;
                    } else {
                        $scope.sort = { column: $scope.column, reverse: false };
                    }
                };
            }
        };
    })
   .controller('MainController', function($scope, $http) {
        $scope.sort = { column: 'name' };
        $http.get('users.json').then(function(peopleResponse) {
            $scope.users = peopleResponse.data;
        });
    });

