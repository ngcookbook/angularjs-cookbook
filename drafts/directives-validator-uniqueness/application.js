angular.module('cookbookApp', [])
    .directive('uniqueLogin', function ($http) {
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
                        $http.get('users.json').then(function(usersResponse) {
                            var loginFound = usersResponse.data.filter(function(user){ return user.login === value; }).length;
                            ngModelCtrl.$setValidity('unique', !loginFound);
                        });
                        return value;
                    }
                });
            }
        };
    })


