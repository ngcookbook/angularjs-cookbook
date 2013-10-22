angular.module('cookbookApp', ['ngSanitize'])
    .filter('highlight', function() {
        return function (input, search) {
            if (search) {
                var searchRegExp = new RegExp('('+ search + ')', 'g');
                return input.replace(searchRegExp, '<span class="highlight">$1</span>');
            } else {
                return input;
            }
        };
    })
    .controller('MainController', function($scope) {
        $scope.items = ['Car', 'Jacket', 'Glasses'];
    });


