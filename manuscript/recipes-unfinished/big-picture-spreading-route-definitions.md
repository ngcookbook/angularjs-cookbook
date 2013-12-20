# Spreading route definitions among modules

## Problem

You have several modules and want to have each module have it's own route definitions.

## Solution

You're lucky. AngularJS allows each module to have its own route definition. Every module can have its own config
function with an injected `$routeProvider` service. With that you prevent one big monolithic route definition.

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
