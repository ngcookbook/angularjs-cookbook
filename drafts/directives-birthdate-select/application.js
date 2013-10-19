angular.module('cookbookApp', [])
    .directive('dateselect', function() {
        return {
            restrict: 'E',
            template:
                '<select ng-model="month" ng-options="month.value as month.label for month in months"></select>' +
                '<select ng-model="day" ng-options="day for day in days"></select>' +
                '<select ng-model="year" ng-options="year for year in years"></select>',
            scope : {
                model: '='
            },
            link: function(scope) {
                var i, modelChanged;
                scope.days = [];
                for (i = 1; i <= 30; i++) { scope.days.push(i); }

                scope.months = [];
                for (i = 1; i <= 12; i++) { scope.months.push({ id: i-1, label: i }); }

                scope.years = [];
                for (i = 1980; i <= (new Date().getFullYear()); i++) { scope.years.push(i); }


                scope.$watch('model', function(value) {

                }, true);
                scope.$watch('day',   function(value) { scope.model.setDate(value); });
                scope.$watch('month', function(value) { scope.model.setMonth(value); });
                scope.$watch('year',  function(value) { scope.model.setFullYear(value); });
            }
        };
    })
   .controller('MainController', function($scope) {

        $scope.current = new Date();
    });


