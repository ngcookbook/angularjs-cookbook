# TODO: What all the js files are doing?

## Problem

AngularJS ist not only angular.js but several files. Which are there and what are they doing?


## Solution

### i18n

### docs

Offline docu!


### angular-animate.js

Include with `angular.module('myApp', ['ngAnimate'])`.

`ngAnimate` is an optional module that provides CSS and JavaScript animation hooks.

### angular-cookies.js

Include with `angular.module('myApp', ['ngAnimate'])`.


Services:

* `$cookies`: Wrapper around cookies
* `$cookieStore`: Objects put or retrieved from the store are automatically (de)serialized.

### angular-loader.js

%% http://stackoverflow.com/questions/15777449/what-is-angular-loader-js-for

 as far as I understand should help to setup angular (ensure that all required modules loaded, etc) in external environments.

Module loader for Angular modules. If you are loading multiple script files containing Angular modules, you can load them asynchronously and in any order as long as you load this file first. Often the contents of this file are copy&pasted into the index.html to avoid even the initial request to angular-loader.min.js. See angular-seed for an example of usage.


### angular-mocks.js

This file contains an implementation of mocks that makes testing angular apps even easier. Your unit/integration test harness should load this file after angular-<version>.js is loaded.

### angular-resource.js

is ngResource module which provide $resource service.


### angular-route.js

the Route

### angular-sanitize.js

 ngSanitize module which provide ngBindHtml directive, linky filter and $sanitize service.

### angular-scenario.js

This file is a very nifty JavaScript file that allows you to write and execute end-to-end tests for angular applications.

### angular-touch.js




### angular.js

You know, the core of AngularJS.
