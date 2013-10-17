angular.module('themeApp', [])
    .factory('ThemeService', function(){
        var themes = { available: ['default', 'greenish'], active: 'default' };

        function setTheme(name) {
            if (themes.available.indexOf(name) === -1) { return; }
            themes.active = name;
        }

        return {
            themes: themes,
            setTheme: setTheme
        };
    })
    .controller('HeadController', function($scope, ThemeService) {
        $scope.themes = ThemeService.themes;
    })
    .controller('MainController', function($scope, ThemeService) {
        $scope.setTheme = ThemeService.setTheme;
    });


