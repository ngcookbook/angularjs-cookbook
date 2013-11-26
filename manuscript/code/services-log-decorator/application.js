angular.module('cookbookApp', [])
    .config(function($provide) {
        $provide.decorator('$log', function($delegate) {
            var logger = {};
            ['log', 'info', 'warn', 'error', 'debug'].forEach(function(logLevel) {
                logger[logLevel] = function(message) {
                    $delegate[logLevel]('[' + logLevel.toLocaleUpperCase() + '] ' + message);
                };
            });
            return logger;
        });
    })
    .controller('MainController', function($scope, $log) {
        $log.info('Open the console...');
        $log.warn('Close the console...');
    });





