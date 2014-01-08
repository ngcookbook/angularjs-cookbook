# What belongs on the scope

## Problem

Your app gets slower and slower or you're wondering when to place variables and functions on the scope.


## Solution

This one should be a no-brainer but it seems that it isn't.

**Only variables and functions that you need in your view belong on the scope.**


## Discussion

Why is this important? Remember that the scope is a link between data structures and the view. For the two-way data
binding to work, AngularJS has to find out when the model changed so that it can update the view.

AngularJS does this through dirty checking. If we make it simple, it means: Compare the current scope with an old version of the scope. So everything on the scope, whether it can be be updated in the view or not, is compared.

You may look at the following example where we only print one random user on the screen.

The view:

    <body ng-controller="MainController">
       {{getRandomUser()}}
    </body>

What you can often see is a controller like this:

    .controller(function() {
        $scope.users = ['Bill', 'John', ... ]:

        $scope.getRandomUser = function() {
          return $scope.users[Math.floor(Math.random()*$scope.users.length)];
        };
    }

What's wrong with this? In the view, only one random user is ever shown. But the dirty checking of AngularJS checks `$scope
.users` every time because it is on the scope. It checks for a change of `$scope.users` so that it can update the view
accordingly, so that the view doesn't use `users`. So the checking has no use. This can be a huge costs if it's a large array or complex object.

The right solution:

    .controller(function() {
        var users = ['Bill', 'John', ... ];

        $scope.getRandomUser = function() {
          return users[Math.floor(Math.random()*users.length)];
        };
    }

Here we store users as a normal variable. The dirty checking only checks for changes on `$scope.getRandomUser` which is right because it's visible in the view.