# Get current app name (quick)

## Problem

You use several `ng-app` on your page and need the current app you're in.


## Solution

You just have to inject `$rootElement`. This represents the root element of application so you just have to read out the `ng-app` attr. Works with multiple apps on a page.

Working version:

<<(code/services-current-app-name/index.html)

<<(code/services-current-app-name/application.js)
