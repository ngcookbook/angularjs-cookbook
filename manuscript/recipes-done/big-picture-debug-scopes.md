# How to debug your application with the browser

## Problem

You're building your application and something you defined isn't showing up in the view. You try to find the cause of
 the problem


## Solution

### Batarang

A method for smaller applications is to use Batarang. Batarang is a chrome extension which was specifically designed
for AngularJS developers.

To use it you have to start [Goole Chrome](http://www.google.com/chrome/‎) as browser and install the [Batarang extension](https://chrome.google
.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk) from the chrome store.

In you're now open the chrome developer tools, you get a new tab called *AngularJS* (see screenshot). After you
checked *Enable*, you can can use the *Models* tab to inspect you scopes.

![Batarang Scopes](images/big-picture-debug-scopes-batarang.png)

In this excample we see the [list recipe](#controllers-list-all-none-invert). What you see:

* Scope (002): the root scope
* Scope (003): the scope of ng-repeat
* Scope (007-008): the individual list elements

You can now click on each scope and see its contents.


### Chrome inspector

If your application is bigger and you have problems with batarang or you need more detailed information,
there's a second way. `angular.element` has a `scope()` function which returns all available information about a
scope. This includes watchers and internatl variables like `$index`. To make the selection of scopes really easy,
we combine `angular.element` with a nice trick from the chrome developer tools. With the chrome developer you get the
 last selected element with `$0`. So we just have to inspect an element and write `angular.element($0).scope();` into
  the console. This returns all information about the scope.

![Inspect](images/big-picture-debug-scopes-inspect.png)

Here we inspected the *Wash dishes* list element. We then pressed Escape which opened the chrome console and entered `angular.element($0).scope();`. As you can see, there are all the internal variables created by `ng-repeat` like `$index`, `$first`,
`$last` etc.