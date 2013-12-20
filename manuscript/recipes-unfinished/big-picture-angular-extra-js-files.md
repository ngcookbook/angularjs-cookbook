# What all the extra js files are doing?

## Problem

AngularJS ist not only angular.js but several files. Which are there and what are they doing?


## Solution

### i18n folder

Contains localization files for date / time / number formatting. E.g. `angular-locale_de-de.js`.

### docs folder

The whole documention offline. To get this to work, start an http server in the root and navigate your
browser to `/docs`. Remember that AngularJS does a location push. If you you navigate through the documentation you
can do a browser reload. You always have to start a `/docs` again.

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

Module loader for Angular modules. If you are loading multiple script files containing Angular modules, you can load them asynchronously and in any order as long as you load this file first. Often the contents of this file are copy&pasted into the index.html to avoid even the initial request to angular-loader.min.js.

### angular-mocks.js (Testing)

This file contains an implementation of mocks that makes testing angular apps even easier. Your unit/integration test harness should load this file after angular-<version>.js is loaded.

### angular-resource.js

The ngResource module which provide $resource service. An abstraction for rest services.

### angular-route.js

The route provider has now it's own file / module. Usually you want to include it in every application.

### angular-sanitize.js

ngSanitize module which provide ngBindHtml directive, linky filter and $sanitize service.

### angular-scenario.js (Testing)

This file is a very nifty JavaScript file that allows you to write and execute end-to-end tests for angular applications.

### angular-touch.js

Handles touch events in AngularJS. Implements Fast click.

### angular.js

The core of AngularJS. You have to include this.

%% TODO: rework of documentation
%% http://docs.angularjs.org/api overview