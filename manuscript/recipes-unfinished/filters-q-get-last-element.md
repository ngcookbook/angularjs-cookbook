# TODO: Get last element(s) in a collection (quick)





~~~
$scope.items = [{ id: 1, name: 'First'  },
                { id: 2, name: 'Second' },
                { id: 3, name: 'Third'  },
                { id: 4, name: 'Last'  }];
~~~

%% If you don't want to actually sort the array and just take the last two items of the array as is (like underscore's last) you can try a negative limit (this would show Third, Last):

%% http://stackoverflow.com/questions/11943130/angularjs-limitto-by-last-2-records

<div ng-repeat="item in items | limitTo:-2">