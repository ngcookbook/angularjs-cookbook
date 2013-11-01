angular.module('cookbookApp', [])
   .controller('MainController', function($scope, $q) {
        var defer = $q.defer();
        var promise = defer.promise;

        promise.then(function (message) {
            $scope.resultOne = 'Resolved ' + message;
        }, function (reason) {
            $scope.resultOne = 'Rejected ' + reason;
        });

        $q.all([$q.when('Suc'), promise]).then(function (messages) {
            $scope.resultAll = 'Resolved all ' + messages;
        }, function (reason) {
            $scope.resultAll = 'Rejected all ' + reason;
        });

        $scope.resolve = function () {
            defer.resolve('Success');
        };
        $scope.reject = function () {
            defer.reject('Error2');
        };
    });


