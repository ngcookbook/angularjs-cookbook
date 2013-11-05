# TODO: How to wait for several async events

## Problem

You have several async events, e.g. calls to serveral external apis. You cannot work if one failed,
so you have to wait for them all. Here we show an easy way how to do it.


## Solution

With callbacks it's hard to start several asynchronous task at once and synchronize the results later. With promises it is really easy.

In this example we use two promises called `firstPromise` and `secondPromise`. The first promise we create with a defer and have use two function on the scope to either resolve or reject it. The second promise we create with the `$q.when`. This function creates a promise which is resolved immediately with the string we pass to it ('Resolved another promise').


After that we can use `$q.all` to call several promises in parallel. To do that we pass an array of promises to `$q.all`. The result itself is again a promise. The success function contains an array with the result of all promises. The error callback only the error result of the promise that failed first.

Again in short:

* **success:** returns an array with the result of every promise
* **error:** returns the result of the first failing promise

<<(code/promises-start-events-in-parallel/application.js)

<<(code/promises-start-events-in-parallel/index.html)
