# TODO: Spreading route definitions among modules

With AngularJS, we are not forced to define all the routes in one central file! If we take the approach described in Chapter 2, Building and Testing where each functional area has its own dedicated module, we can move routes linked to a certain part of an application to the corresponding module.
In the AngularJS module system, each and every module can have its associated config function, where we can inject $routeProvider service and define routes. For example, in the sample SCRUM application the administration module has two submodules: One for managing users and for managing projects. Each of these submodules defines its own routes as follows:
angular.module('admin-users', []) .config(function ($routeProvider) {
     $routeProvider.when('/admin/users', {...});
     $routeProvider.when('/admin/users/new', {...});
     $routeProvider.when('/admin/users/:userId', {...});
});
angular.module('admin-projects', []) .config(function ($routeProvider) {
     $routeProvider.when('/admin/users', {...});
     $routeProvider.when('/admin/users/new', {...});
     $routeProvider.when('/admin/users/:userId', {...});
   });
   angular.module('admin', ['admin-projects', 'admin-users']);
Taking this approach, we can spread routes definitions across different modules and avoid maintaining one giant file containing all the route definitions.


* Give modules it’s own routing (http://stackoverflow.com/questions/16260602/angularjs-routing-in-different-files) (http://stackoverflow.* com/questions/17905758/distributed-route-definition-in-angularjs)
