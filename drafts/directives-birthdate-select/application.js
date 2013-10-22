angular.module('cookbookApp', [])
    .directive('dateselect', function() {
        return {
            restrict: 'E',
            template:
                '<select ng-model="date.month" ng-options="month for month in months"></select>' +
                '<select ng-model="date.day" ng-options="day for day in days"></select>' +
                '<select ng-model="date.year" ng-options="year for year in years"></select>',
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

                scope.$watch('[model, date]', function(newValues, oldValues) {
                    if (newValues[0] !== oldValues[0]) {
                        scope.date.month = newValues[0].getMonth() +1;
                        scope.date.day = newValues[0].getDate();
                        scope.date.year = newValues[0].getFullYear();
                    }
                    if (newValues[1] !== oldValues[1]) {
                        console.log(newValues[1]);
                        scope.model.setDate(newValues[1].day);
                        scope.model.setMonth(newValues[1].month -1);
                        scope.model.setFullYear(newValues[1].year);
                    }
                }, true);
            }
        };
    })
   .controller('MainController', function($scope) {
        $scope.current = new Date();
    });


