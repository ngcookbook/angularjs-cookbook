angular.module('cookbookApp', [])
    .directive('confirmedClick', function ($parse, $q, $compile, $rootScope) {
        var box = '<div class="box"><div>Really?</div> ' +
            '<button ng-click="ok($event)">OK</button><button ng-click="cancel($event)">Cancel</button>' +
            '</div>';
        return {
            link: function(scope, element, attrs) {
                var fn = $parse(attrs.confirmedClick);
                element.on('click', function(event) {
                    var boxScope = $rootScope.$new();
                    var boxElement = $compile(box)(boxScope);
                    element.attr('disabled', 'disabled');

                    element.append(boxElement);

                    boxScope.ok = function() {
                        event.stopPropagation();
                        fn(scope, {$event: event});
                    };
                    boxScope.cancel = function(event) {
                        event.stopPropagation();
                        element.removeAttr('disabled');
                        boxElement.remove();
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





