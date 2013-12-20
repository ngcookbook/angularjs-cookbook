# EcmaScript 5 array functions you should know and use

## Problem

You're building complex loops where you don't need it or including other libraries to ease manipulating arrays but
don't know about EcmaScript 5.

## Solution

Until EcmaScript 5, working with arrays in JavaScript was no fun and usually ended in including underscore or lodash
to ease the pain with working with arrays.

T> If you have to support older browsers, you can use a polyfill like [array-generics](https://github
.com/plusdude/array-generics) which emulates the functions if not available. See [Compatibility Matrix](http://kangax
.github.io/es5-compat-table/) for brower support.


### forEach

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

    [1, 5, 9].forEach(function(element, index, array) {
        console.log("a[" + index + "] = " + element);
    }));
    // => a[0] = 1
    // => a[1] = 5
    // => a[2] = 9

This is similar to angular.forEach(). So which should you use? At the moment you should use `angular.forEach()`. If you look at this [comparison](http://jsperf.com/foreach-vs-loop/20),
you see that the ES5 forEach implementation is not the fastest. The AngularJS version in this comparision uses ES5
forEach if it's available. This is changed by this [commit](https://github.com/angular/angular.js/issues/3221). Now
it's always using the faster for loop.


### every

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

Checks if every element meets a certain condition in the array.

    [1, 2, 3, 4, 5].every(function(element, index, array){
        return element < 4;
    });
    // => false

Returns true or false.


### some

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

Checks if at least one element meets a condition.

    [1, 2, 3, 4, 5].some(function(element, index, array){
        return element >= 3;
    });
    // => true

Returns true or false.


### filter

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Creates a new array with only the elements that meet the condition.

    [1, 2, 3, 4, 5].filter(function(element, index, array){
        return element % 2 === 0;
    });
    // => [2, 4]

Returns an array (can be smaller than the original array)


### map

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Creates a new array where every element is transformed by the function.

    [1, 2, 3].map(function(element, index, array){
        return element * element;
    });
    // => [1, 4, 9]

Returns an array (is of the same length as the original array)


### indexOf

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

Returns the index of the element.

The following example finds all occurences of an element in the array:

    var indices = [];
    var i = array.indexOf(element);
    while (i != -1) {
        indices.push(i);
        i = array.indexOf(element, i + 1);
    }

It also works with simple objects which do not contain functions.

    var a = { a: 1 }, b = { b: 2 };
    [a, b].indexOf(b)
    // => 1

Returns the index of the element or -1 if not found.


### reduce

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Walks through an array and applies the function to an one element called accumulator.

    [0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
      return previousValue + currentValue;
    });
    // => 10

Returns the value, which is saved in previousValue.

T> Here is a more useful example to convert an array of arrays to an object:
T>
T>    a = [['a', 1], ['b', 2]]
T>    a.reduce(function(map, arrayElement) {
T>        map[arrayElement[0]] = arrayElement[1];
T>        return map;
T>    }, {})
T>    // => { a: 1, b: 2 }

