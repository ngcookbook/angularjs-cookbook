angular.module('cookbookApp', [])
    .directive('includes', function ($parse) {
        return {
            require:'ngModel',
            link:function (scope, element, attrs, ngModelCtrl) {
                var original;
                ngModelCtrl.$formatters.unshift(function(modelValue) {
                    original = modelValue;
                    return modelValue;
                });
                ngModelCtrl.$parsers.push(function (value) {
                    if (value && value !== original ) {
                        var includesArray = $parse(attrs.includes)(scope) || [];
                        ngModelCtrl.$setValidity('includes', includesArray.indexOf(value) !== -1);
                        return value;
                    }
                });
            }
        };
    })
    .controller('MainController', function($scope) {
        $scope.allowedValues = ['hello', 'bye'];
    });


