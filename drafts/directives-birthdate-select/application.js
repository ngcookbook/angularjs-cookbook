angular.module('cookbookApp', [])
    .directive('dateselect', function() {
        return {
            restrict: 'E',
            template:
                '<select ng-model="date.month" ng-options="month for month in months" ng-change="bla()"></select>' +
                '<select ng-model="date.day" ng-options="day for day in days" ng-change="bla()"></select>' +
                '<select ng-model="date.year" ng-options="year for year in years" ng-change="bla()"></select>',
            scope : {
                model: '='
            },
            link: function(scope) {
                var i;
                scope.date = {};
                scope.days = [];
                for (i = 1; i <= 30; i++) { scope.days.push(i); }

                scope.months = [];
                for (i = 0; i <= 11; i++) { scope.months.push(i); }

                scope.years = [];
                for (i = 1980; i <= (new Date().getFullYear()); i++) { scope.years.push(i); }


                scope.$watch('model', function(newDate) {
                    scope.date.month = newDate.getMonth() +1;
                    scope.date.day = newDate.getDate();
                    scope.date.year = newDate.getFullYear();
                }, true);

                scope.bla = function() {
                    scope.model.setDate(scope.date.day);
                    scope.model.setMonth(scope.date.month-1);
                    scope.model.setFullYear(scope.date.year);
                };

            }
        };
    })
   .controller('MainController', function($scope) {
        $scope.current = new Date();
    });


