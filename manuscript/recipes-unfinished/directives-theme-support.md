# Theme support {#theme-support}

## Problem

You want to support different themes which you can change on the fly.

## Solution

**Overview:**

* Create a controller for the `<head>` tag which changes the href to your stylesheet on the fly.
* Create a service which contains the active theme and supports changing of it.
* Inject the service where you want to change the theme.

**The code:**

First we create a `ThemeService` service , a `HeadController` controller and a `MainController` controller.

* `ThemeService` holds the theme state
* `HeadController` exposes getTheme() to change the stylesheet link in the `<head>` tag
* `MainController` acts as an example for a controller which can change the theme.

<<(code/directives-theme-support/application.js)

In the `index.html` we use `<link rel="stylesheet" ng-href="theme-{{getTheme()}}.css"/>` to replace the stylesheet on
 the fly.

<<(code/directives-theme-support/index.html)

The style are just examples to have a working version.

**theme-default.css**

<<(code/directives-theme-support/theme-default.css)

**theme-greenish.css**

<<(code/directives-theme-support/theme-greenish.css)

%% TODO insert link when recipe is ready
Read more about communication between controller in Recipe [controller-to-controller]