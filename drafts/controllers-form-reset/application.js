angular.module('cookbookApp', [])
   .controller('MainController', function($scope, $http) {
        var master;

        $http.get('person.json', function(formResponse) {
            console.log(formResponse);
            master = formResponse.data;
            console.log(master);
            $scope.form = master;
        }, function(error){
            console.log(error);
        });

    });


