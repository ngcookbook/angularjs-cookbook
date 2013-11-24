# Prevent heavy computing operations from making your app sluggish

## Problem

You have an operation which takes some time. Your app is sluggish oder the tab kills itself.

## Solution

The first thing is to understand why apps become sluggish in the browser.

1. JavaScript is single-threaded. This means a single event queue. New events are appended at the end of this queue.
2. JavaScript is 'greedy'. This means it tries to execute as much code as possible.

We use the following example with bogosort (inefficient sorting algorithm) as an example and create two versions. One
version is blocking and the other one is not)

<<(code/services-heavy-computations/application.js)

<<(code/services-heavy-computations/index.html)

If we now do the following:

- Mouse enter button
- Click button
- Mouse leave button


### Blocking version

The event queue looks like:

* highlight button
* heavy computation
* unhighlight button


### Non-blocking version

The event queue looks like:

* highlight button
* heavy computation (999x shuffle)
* unhighlight button
* heavy computation (999x shuffle)
* ...



