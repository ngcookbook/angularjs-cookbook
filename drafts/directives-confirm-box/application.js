angular.module('cookbookApp', [])
    .directive('confirmedClick', function ($parse, $q, $compile, $rootScope) {
        var box = '<div class="box"><div>Really?</div> ' +
            '<button ng-click="ok()">OK</button><button ng-click="cancel()">Cancel</button>' +
            '</div>';
        return {
            link: function(scope, element, attrs) {
                var fn = $parse(attrs.confirmedClick);
                element.on('click', function(event) {
                    var boxScope = $rootScope.$new();

                    console.log('jo');
                    element.attr('disabled', 'disabled');

                    var a = $compile(box)(boxScope);

                    element.append(a);

                    boxScope.ok = function() {
                        fn(scope, {$event: event});
                    };
                    boxScope.cancel = function() {
                        a.remove();
                        event.stopPropagation();
                        event.preventDefault();
                        element.removeAttr('disabled');
                    };

                });
            }
        };
    })
    .controller('MainController', function($scope) {
        $scope.tasks = ['Tidy up', 'Wash the dishes'];
        $scope.removeTask = function(index){
            $scope.tasks.splice(index, 1);
        };
    });





