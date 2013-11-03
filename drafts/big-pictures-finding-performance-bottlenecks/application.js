angular.module('cookbookApp', [])
   .controller('MainController', function($scope, $http) {
        $scope.items = ['4', '3', '5', '9', '1'];

        $scope.sortItems = function() {
            function shuffle(v) {
                // http://jsfromhell.com/array/shuffle
                for(var j, x, i = v.length; i; j = parseInt(Math.random() * i, 10), x = v[--i], v[i] = v[j], v[j] = x);
                return v;
            }

            function isSorted(v){
                for(var i=1; i<v.length; i++) {
                    if (v[i-1] > v[i]) { return false; }
                }
                return true;
            }

            var sorted = false;
            while(sorted === false){
                $scope.items = shuffle($scope.items);
                sorted = isSorted($scope.items);
            }

        };



    });


