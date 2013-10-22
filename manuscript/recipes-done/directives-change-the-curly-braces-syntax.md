# How to use AngularJS with a curly braced template engine

## Problem

You want to change the double curly braces `{{` from AngularJS because they're conflicting with your template engine
on the backend.


## Solution

You can indeed change the curly braces to e.g. `[[`. In AngularJS the `$interpolate` provider does the template
interpretation and has an option for changing the symbols.

To do so, you can inject the `$interpolateProvider` in the config block of your module. There you can set
`startSymbol` and `endSymbol` as demonstrated below:

~~~
angular.module('cookbookApp', [])
    .config(function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });
~~~

W> If you split your application into different modules, you have to configure the the alternative syntax for every
module!


### Tip 1: $interpolate stand alone

You can also use the interpolate provider for your own templating purposes. Just inject $interpolate and use:

~~~
$interpolate('Hello {{name}}!')({name: 'World'}); // => 'Hello World!'
~~~


### Tip 2: Skipping interpolation

For a part of the dom you can disable the translation of curly braces alltogether.

~~~
<div ng-non-bindable>
   ...
</div>
~~~
