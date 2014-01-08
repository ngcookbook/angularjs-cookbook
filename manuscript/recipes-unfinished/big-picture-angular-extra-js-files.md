# What all the extra .js files are doing?

## Problem

AngularJS consists not only of angular.js but several files. You want to know which are they and what do they do?


## Solution

Considering you downloaded the AngularJS zip file from <http://angularjs.org>, here are the files and folders with
theier function.

### i18n folder

The i18n Contains localization files for date / time / number formatting. You have to include the language file in
your index file. The files are named like `angular-locale_de-de.js`.

### docs folder

The whole documentation as offline version. To get this to work, you have to start an http server in the root and navigate your browser to `/docs`. Remember that AngularJS does a location push. If you navigate through the documentation, you
can't do a browser reload. You always have to start a `/docs` again or set up special rewrite rules for your http
server.

### angular-animate.js

Include with `angular.module('myApp', ['ngAnimate'])`.

`ngAnimate` is an optional module that provides CSS and JavaScript animation hooks.

### angular-cookies.js

Include with `angular.module('myApp', ['ngCookies'])`.

Services included in this module:

* `$cookies`: This is a wrapper around browser cookies
* `$cookieStore`: Objects you put or retrieve from the cookie store are automatically (de)serialized.

### angular-loader.js

A module loader for AngularJS modules.

If you are loading multiple script files containing AngularJS modules, you can load them asynchronously and in any
order. You only have to make sure that you load this file first.

T> It's a good idea to put the contents of this file is into your `index.html` to save the initial request.

### angular-mocks.js (Testing)

This file contains an implementation of mocks that makes is easier to test your app. It includes the `$httpBackend`, which you need to for proper testing the `$http` service. Additionally it contains overwrites for existing services like
`$exceptionHandler`, `$interval`, `$log` and `$timeout`.

### angular-resource.js

The `ngResource` module contains just one service: `$resource`. This service is build on top of `$http` and can
abstract a rest api.

### angular-route.js

The route provider has now it's own file / module. Usually you want to include it in every application.

### angular-sanitize.js

The `ngSanitize` module includes:

* `ng-bind-html` directive, which allows you to output sanitized html
* linky filter which turns text links into hyperlinks
* $sanitize service which is whitelist filter for html

### angular-scenario.js (Testing)

This file helps you writing and executing end-to-end tests for angular applications.

### angular-touch.js

Handles touch events in AngularJS. Implements Fast click which eliminats the 300ms delay between a tap and the
actual firing of a click event on mobile browsers.

### angular.js

The core of AngularJS. You always have to include this.