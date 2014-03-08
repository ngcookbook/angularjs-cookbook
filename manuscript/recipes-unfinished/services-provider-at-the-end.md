# Why is there a Provider at the end of some services ($route and $routeProvider)?

## Problem

You're confused why sometimes there exist two services with the difference that one has `Provider` at the end of the name.

## Solution

In short: If you take $route and $routeProvider as example, `$route` is the service and `$routeProvider` is provider function. You use `$routeProvider` to configure the service.

In AngularJS, the injector is responsible for instanciating services. But sometimes you want to set some options before the injector does its work and instanciate it.

We take a simplified version for the $route service as an example:

    angular.module('ngRoute', ['ng']).provider('$route', $RouteProvider);

    function $RouteProvider(){

        this.when = function(path, route) { ... }
        this.otherwise = function(params) { ... }

        this.$get = function() { ... }
    };

To configure routes, you use `when` and `otherwise` in the config block of your module. This is done before the injector instanciated the route service. You can't change these settings later in a controller for example.

The contents defined in the `$get` is what you can actually access later in controllers and services.