# Prevent event propagation from ng-click

## Problem

You have several nested elements with `ng-click`. If you click the front element, you don't want the click function of
the back element to be triggered.


## Solution

The trick here is to use `$event` which is injected into `ng-click`. `$event` is the normal JavaScript event object
and thus you can use `stopPropagation()` to prevent the bubbling of events.

You pass `$event` as parameter of the topmost `ng-click` and call `event.stopPropagation()` in the function declaration inside of the controller.

    <div ng-click="back()">
        ...
        <a ng-click="front($event)">Click me!</a>
        ...
    </div>


#### Alternative solution

You can of course use `$event` directly inside the `ng-click` definition.

    <div ng-click="back()">
        ...
        <a ng-click="front(); $event.stopPropagation()">Click me!</a>
        ...
    </div>


%% TODO: Get X/Y coordinates with ng-click http://stackoverflow.com/questions/16163978/get-the-this-in-angularjs
