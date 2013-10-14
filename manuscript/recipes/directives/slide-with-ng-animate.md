# Slide right/left with animations

## Problem

You want to add slide effects for left and right to your ng-view div.


## Solution

With a little trick ng-animate will do all the heavy lifting for us. The idea is to set a variable for the direction
 before the url is changed. The animation direction depends on a css class which is altered when the direction changes.


### Step 1: The styling

The first thing we need is some styling for the slide effects and a container to wrap them:

<<(code/slide-with-ng-animate/style.css)

The container must have `position: absolute or relative`. The slide classes must have `position: absolute`. For left
and right sliding, we define `slide-left` and `slide-right` with additional classes for [ng-animate](http://docs
.angularjs.org/api/ngAnimate.$animate).


### Step 2: The code

For demo purposes we define two sample routes with direct template declaration with the `$routeProvider`. For the url
 change we define two functions `moveLeft` and `moveRight` in a controller for the left and right slide. With
 `$location` service we can change the url from a controller.

<<(code/slide-with-ng-animate/application.js)

W> Since AngularJS 1.2, ngRoute is a module on its own. Be sure to include ngRoute and ngAnimate!


### Step 3: The markup

In the app code itself we use the defined methods for the links with `ng-click="moveRight('/1')"`. Depended on the
direction variable, `ng-view` gets the right animation with `ng-class="'slide-'+direction"`.

<<(code/slide-with-ng-animate/index.html)



