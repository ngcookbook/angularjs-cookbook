angular.module('cookbookApp', [])
   .controller('MainController', function($scope, $http) {
        var initialFormData;

        $http.get('person.json').then(function(formResponse) {
            initialFormData = formResponse.data;
            $scope.form = angular.copy(initialFormData);
        });

        $scope.reset =function() {
            $scope.form = angular.copy(initialFormData);
        };

    });


