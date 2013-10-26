angular.module('cookbookApp', [])
    .directive('stackedBar', function() {
        return {
            restrict: 'E',
            template: '<div class="stacked-bar-chart">' +
                '<div ng-repeat="bar in bars" class="stacked-bar stacked-bar-{{bar.id}}" style="width:{{bar.value}}%"></div>' +
                '</div>',
            scope : {
                bars: '='
            }
        };
    })
    .controller('MainController', function($scope) {
        $scope.bars = [
            { id: 0, value: 20 },
            { id: 1, value: 30 },
            { id: 2, value: 50 }
        ];
    });



