# Use the inner html of a directive in your template

## Problem

You write a directive and want to get the inner html and use it in your template.

## Solution

The solution is to activate and use transclusion. You activate transclusion in your directive if you use `transclude:
 true` in your returning object. Now AngularJS captures what was inside of your directive. You can then use the
 contents with `<div ng-transclude></div>` which is replaced with the captured content.

~~~~~~~~
.directive('...', function() {
    return {
        transclude: true,
        template: '<div id="wrapper"><div ng-transclude></div></div>'
    }
});
~~~~~~~~

%% TODO: Discuss what transclusion is doing. Why it is such a big thing.