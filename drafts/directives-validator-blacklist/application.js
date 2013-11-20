angular.module('cookbookApp', [])
    .directive('blacklist', function ($parse) {
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
                        var badWords = $parse(attrs.blacklist)(scope) || [];
                        var containsBadWord = badWords.some(function(str) { return value.indexOf(str) >= 0; });
                        ngModelCtrl.$setValidity('blacklist', !containsBadWord);
                    }
                });
            }
        };
    })
    .controller('MainController', function($scope) {
        $scope.blacklistValues = ['hello', 'bye'];
    });


