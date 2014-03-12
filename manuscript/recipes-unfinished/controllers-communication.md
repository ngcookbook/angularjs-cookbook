# Controller to controller communication

## Problem

You have two controllers which are not nested and want to exchange data between them.


## Solution

The solution is to use a service for communication. This way you can use all the benefits of two-way-databinding.

We use the piece of html as an example:

    <div ng-controller="FirstController">
      <ul>
        <li ng-repeat="item in items" ng-bind="item"></li>
      </ul>
    </div>

    <div ng-controller="SecondController">
      <ul>
        <li ng-repeat="item in items" ng-bind="item"></li>
      </ul>
      <button ng-click="addItem()">Add item</button>
    </div>

We have two controllers here: `FirstController` and `SecondController` which are siblings. We use the variable `items`
for demonstration purposes here.

To share data, we create a service `ItemsService`. `items` is an internal variable which we expose through a function
 `getItems()`. After we injected the `ItemsService` in both controllers, we can now begin to use it on the scope.
 After writing `$scope.items = ItemsService.getItems();` in both controller, we can use the items on both controller
 views and they stay in sync. Open the link to the demo and try to add items.

You see another working version in [Theme support](#theme-support) and Learn more about [structuring services]
(#services-how-to-structure).