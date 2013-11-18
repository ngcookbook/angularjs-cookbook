# TODO: How and why to use promises

## Problem

You're not convinced by promises, if you should use them and why they're better than callbacks.

## Solution

There are many reasons to use promises. The first reward is that promises implicitly propagate errors and values downstream.
Consider this synchronous solution to reading a file and parsing its content.

    var FS = require("fs");
    var readJsonSync = function (path) {
        return JSON.parse(FS.readSync(path, "utf-8"));
    };

The asynchronous analog would ideally look and behave exactly the same except it would explicitly mark anywhere it might yield to other tasks, which is to say, between calling and returning, and reading and parsing. Control flow constructs like return, throw, if, for, break and continue would still work, except asynchronously. Exceptions, such as the SyntaxError that JSON.parse might throw, would propagate through the promise graph just as they do through the synchronous stack. Forbes Lindesay illustrates the way to this happy ideal in his presentation, “Promises and Generators”.