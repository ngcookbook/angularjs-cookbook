# Angular functions you should use

## Problem

You're including 3rd party libraries for functions that JavaScript doesn't have or you're making the wrong type checks.

## Solution


AngularJS brings a lot of functions which ease the pain for the developer. Here is an overview which a description of
 the functions:


### angular.bind

[API](http://docs.angularjs.org/api/angular.bind)

Returns a function which calls function fn bound to self (self becomes the this for fn). You can supply optional args that are prebound to the function. This feature is also known as partial application, as distinguished from function currying.

No, it's not identical.

With bind you're producing a function, without calling anything. With call — as in your obj.method.call(obj, 'hello') — you're actually calling a method.

An "identical" expression to obj.method.bind(obj, 'hello') would be function(){obj.method.call(obj, 'hello')}. That's more cruft. And that's the cruft ES5 is trying to provide convenience for.

There are also historical reasons for introduction of bind; it first became popular as one of the helper methods in Prototype.js few years ago. Then made its way to other popular libraries, such as underscore.js. ES5 just followed what was already popular and in demand.


### angular.copy

[API](http://docs.angularjs.org/api/angular.copy)

Creates a deep copy of source, which should be an object or an array.

If no destination is supplied, a copy of the object or array is created.
If a destination is provided, all of its elements (for array) or properties (for objects) are deleted and then all elements/properties from the source are copied to it.
If source is not an object or array (inc. null and undefined), source is returned.
If source is identical to 'destination' an exception will be thrown.
Note: this function is used to augment the Object type in Angular expressions. See ng.$filter for more information about Angular arrays.

### angular.equals

[API](http://docs.angularjs.org/api/angular.equals)

Determines if two objects or two values are equivalent. Supports value types, regular expressions, arrays and objects.

Two objects or values are considered equivalent if at least one of the following is true:

Both objects or values pass === comparison.
Both objects or values are of the same type and all of their properties are equal by comparing them with angular.equals.
Both values are NaN. (In JavaScript, NaN == NaN => false. But we consider two NaN as equal)
Both values represent the same regular expression (In JavasScript, /abc/ == /abc/ => false. But we consider two regular expressions as equal when their textual representation matches).
During a property comparison, properties of function type and properties with names that begin with $ are ignored.

Scope and DOMWindow objects are being compared only by identify (===).

### angular.extend

[API](http://docs.angularjs.org/api/angular.extend)

Extends the destination object dst by copying all of the properties from the src object(s) to dst. You can specify multiple src objects.

### angular.forEach

[API](http://docs.angularjs.org/api/angular.forEach)

Invokes the iterator function once for each item in obj collection, which can be either an object or an array. The iterator function is invoked with iterator(value, key), where value is the value of an object property or an array element and key is the object property key or array element index. Specifying a context for the function is optional.

Note: this function was previously known as angular.foreach.

var values = {name: 'misko', gender: 'male'};
var log = [];
angular.forEach(values, function(value, key){
  this.push(key + ': ' + value);
}, log);
expect(log).toEqual(['name: misko', 'gender:male']);














angular.isDefined...

what is missing?

angular.isNull


