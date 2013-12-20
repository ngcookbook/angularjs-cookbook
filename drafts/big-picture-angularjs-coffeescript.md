# TODO: AngularJS with CoffeeScript

## Problem

You want to use AngularJS with CoffeeScript but have problems with access to services, etc.


## Solution



    class Ping
      constructor: (@$http)->
      send: ()=>
        @$http.get('/ping')

    $provide.service('ping', ['$http', Ping])


http://docs.angularjs.org/api/AUTO.$provide#methods_service