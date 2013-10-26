# TODO: How to use regular urls without the hash (Apache and Nginx)

## Problem

By default, AngularJS uses the `#` for urls to write urls like `#/posts/1`. You want to have nice urls
and drop the hash.


## Solution

~~~
$locationProvider.html5Mode(true);
~~~


%% enable html5 mode http://stackoverflow.com/questions/17192711/angularjs-html5mode-not-working
