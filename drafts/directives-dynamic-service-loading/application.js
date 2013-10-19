angular.module('cookbookApp', [])
    .factory('service1', function($q) {
        return {
            getList: $q.when([{ id: '1', label: 'test' }])
        }
    })
    .directive('dynamic', function($compile) {
        return {
            priority : 9999,
            link: function(scope, element, attrs) {
                element.attr('ng-options', 'item for item in [1,2,3]')
                //$compile(element)(scope);
            }
        };
    })
   .controller('MainController', function($scope) {

        $scope.items = { date: new Date() };
    });


