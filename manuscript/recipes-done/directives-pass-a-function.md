# Pass a function to a directive with an isolated scope (&)

## Problem

You have a directive with an isolated scope want to call a function in the outside scope. Or you to understand what
the `&` in the isolated scope definition is doing.

## Solution

While isolated scopes with `@` and `=` are easy understood by most people, a lot of them have a problem to understand
 what exactly the `&` is doing.

This is a basic concept but we repeat it here, because it is so often misunderstood.

As a general information. Every declaration of the scope isolation refers to an attribute of the element of the
directive.

An declaration like

    directive('colorpicker', function() {
        ...
        scope: {
            a: '@',
            b: '=',
            c: '&'
        }

means the that you can use a, b and c inside the directive. The connection to the outer world is declared through
attributes on the directive element. So the element would look like `<colorpicker a="4" b="myVar" c="myCallback()">`.
 This is important. You don't connect to the parent scope directly, but only through attribute declaration.


### So, what is the `&` doing?

If you have the following situation:

    +- controller scope
    +--- directive scope

The directive is isolated and nested under the controller scope, you can execute a function on the controller scope
from the directive scope.

### Why is this important

This is important because you're free to choose your function name and which parameters you pass.

This means you could use `<colorpicker c="myCallback(paramA, paramB)">` in one controller and `<colorpicker c="mySuperCallback (paramB, paramA)">` in another.

### How do I use it?

So, you want to call a function like this in the controller


    $scope.myCallback = function(first, second) { ... }


The directive could have a execution of the function like this:

    scope.c({ paramA: 123, paramB: 'xzy');


The you would have to use the directive in the template like this

    `<colorpicker c="myCallback(paramA, paramB)">`


This means, every time the function is trigger inside the directive, it is translated to:

    myCallback(123, 'xzy')


