# Use the $compile function

## Problem

You created an html string with some AngularJS directives inside your link function. As you attach it to the DOM, you just get exactly what you wrote as output but you expected AngularJS to compile it for you.


## Solution

If you you use AngularJS directive in your normal html, AngularJS will compile it for you when the site is rendered.
If you create a string inside a link function of a directive, you have to do this manually. You can do this by injecting the `$compile` service. You can use `$compile` with either a `string` or an `angular.element`. This is
returning a linking function which is called with a scope. This again returns an element which the can be inserted into the DOM.

*With a string:*

    newElement = $compile(myString)(scope)

*With an element:*

    newElement = $compile(angular.element)(scope)

Returns an `angular.element`, **not a string**!


### What if don't have a scope to compile it against?

Usually you would use `$compile` inside a link function of a directive and there you would have a scope. If for some reason you use it somewhere else, e.g. inside a service, you could of pass the scope to the function from outside. If  you just need a scope, you can also just use the root scope. Inject `$rootScope` and you're ready to go.

    newElement = $compile(myString)($rootScope)

%% http://www.phase2technology.com/blog/angularjs-and-compile