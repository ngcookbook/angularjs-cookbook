# Execute code at startup (quick)

## Problem

You want to execute some code when AngularJS start. It should run before any controllers and directives and not be
tied to any view.

## Solution

You can use the `run` method. This method is invoked when the injector loaded all modules.

~~~
angular.module('myApp',[])
    .run(function()
        // Your code here
    });
~~~



