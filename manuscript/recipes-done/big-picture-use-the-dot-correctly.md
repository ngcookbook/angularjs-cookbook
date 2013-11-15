# How to use the dot correctly

## Problem

You're sharing variables in the scope hierarchy and sometimes they don't update or behave like you expect.

## Solution

Oftentimes you have the following situation (try it [here](http://sbrink.github.io/angularjs-cookbook-code/big-picture-use-the-dot-correctly/index.html)):

    <div ng-controller="ParentController">
        <input type="text" ng-model="name">

        <div ng-controller="ChildController">
            <input type="text" ng-model="name">
        </div>
    </div>

If you change `name` in the `ParentController`, the change is reflected in the `ChildController`. This is the
expected behaviour because scopes use prototypal inheritance. This is expected because at this point there is not
`name` attribute on the `ChildController`, so it's looked up it the prototype chain.

The unexpected behavior comes when you now edit the `name` of `ChildController`. If you try it in the example,
you'll see that both are now out of sync. So there are now two independent `name` variables on each scope.

If you use `person.name` instead of `name`, you get a differenct result. If you again first change `name` of the
`ParentController` and then `name` of the `ChildController`, they stay in sync.

** Why? **

This is not angular's fault. It is the way prototypal inheritance in JavaScript works. We differentiate here between
reading and writing variables.

* reading: Reading does everything as you expect. If a variable on the current object isn't found,
it goes through the prototypal chain and tries to find it on another object.
* writing: This is where the problem arises. If you write a simple property like a string or number,
the prototype chain is never consulted. Only where you have an array, object or function it is. So where you use the
latter, JavaScript goes the prototype chain up, looks for an occurence and writes the value there.

** How to solve this:**

* use a dot in your variable names (*preferred*)
* use `$parent.myVariableName` in the child (*workaround*)

** Here's a full demo: **

<<(code/big-picture-use-the-dot-correctly/application.js)

<<(code/big-picture-use-the-dot-correctly/index.html)


%% How to use the dot on the scope correctly (http://stackoverflow.com/questions/14049480/what-are-the-nuances-of-scope-prototypal-* prototypical-inheritance-in-angularjs/14049482#14049482)
