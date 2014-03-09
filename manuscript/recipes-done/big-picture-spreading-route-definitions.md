# Spreading route definitions among modules

## Problem

You have several modules and want each module to have its own route definitions.

## Solution

AngularJS allows this out of the box. Every module can have its own config
function with an injected `$routeProvider` service. The final result is a
merged version of all routes. If you define the same route twice,
the latter is taken.

    angular.module('cookbookRecipes', []).config(function ($routeProvider) {
      $routeProvider.when('/recipes', { ... });
      $routeProvider.when('/recipes/new', { ... });
      $routeProvider.when('/recipes/:recipeId', { ... });
    });

    angular.module('cookbookIngredients', []).config(function ($routeProvider) {
      $routeProvider.when('/ingredients', { ... });
      $routeProvider.when('/ingredients/new', { ... });
      $routeProvider.when('/ingredients/:recipeId', { ... });
    });

    angular.module('cookbookApp', ['cookbookRecipes', 'cookbookIngredients']);
