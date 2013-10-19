angular.module('cookbookApp', [])
    .factory('LocalStorageCache', function () {
        var cache = {};
        cache.get = localStorage.getItem;
        cache.put = function (key, value) {
            if (typeof value.then === 'function') {
                value.then(function (value) {
                    localStorage.setItem(key, JSON.stringify(value));
                });
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        };
        cache.remove = localStorage.removeItem;
        cache.clear = localStorage.clear;
        return cache;
    })
    .controller('MainController', function($scope, $q) {

        var mypromise = $q.when('test');

    });



