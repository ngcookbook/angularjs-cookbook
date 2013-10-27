angular.module('cookbookApp', [])
    .filter('exact', function() {
        return function (input) {
            return input.gender == 'male';
        };
    })
    .controller('MainController', function($scope) {
        $scope.people = [
            { name: 'John', gender: 'male' },
            { name: 'Bill', gender: 'male' },
            { name: 'Anne', gender: 'female' }
        ];
    });


