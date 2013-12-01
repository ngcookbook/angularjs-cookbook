# How to structure your services

## Problem

JavaScript has no build in concept of private/public methods. Your services should have a public api but
helper methods should be private. Here we show how to do it.

## Solution

Here we take a factory service `Task` as an example for serveral important design decisions.

### Return an object and get privacy

In JavaScript you can't mark methods as private/public, but you can simulate this behaviour through closures.
Inside the factory, we have three methods: `inRange`, `find` and `all`. But `inRange` is just a helper method and we
don't want to expose it. The way to accomlish this, is to return an object where we create properties with references
 to the methods we want to expose. Through closures we have access to the methods in the factory.

    return {
        all: all,
        find: function(i) {
            return find(i);
        }
    };


### Expose the API 1

Instead of

    return {
        all: all,
        find: function(i) {
            return find(i);
        }
    };

We could have also done this:

    var srv = {};
    srv.all = function() { ... }
    srv.find = function(i) { ... }
    return srv;

This would remove some duplication, but also has a disadvantace. You don't have an overview over the api in one place
. Because of this a new developer has first to go through all the noise of the code,
scroll up/down to identify the interface.

### Expose the API 2

In this example, we see two possiblities to expose the inner methods.

    return {
        all: all,
        find: function(i) {
            return find(i);
        }
    };

For `all` we set a direct reference the function. For `find`, we first create an anonymous function and inside it,
we return the find method. Why two different possibilities and which one is correct?

The answer is: Both are correct. But both have strengths and weaknesses.

If you choose the first one, you expose the method but not the parameters. So if you want to use the method,
you have to look up the parameters seperately.

If you choose the second one, you can see how to use the function immediately but have to type some more and change
it if you change the function definition. There's also one caveat. If you ask for `arguments.length` inside your
function, the second method will break.

### Don't expose data structures directly

To get the tasks array, you see that we don't return a reference to the task array, but a copy. This is good practice and urges the developer to use the defined methods in the service instead of operating on the data structure directly.

    var tasks = ['Tidy up'];
    function all() {
        return angular.copy(tasks);
    }

## Full demo code

<<(code/services-how-to-structure/application.js)

<<(code/services-how-to-structure/index.html)
