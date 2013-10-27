# Make a stacked bar chart

## Problem

You want to create a chart with stack bars.


## Solution

We solve it through a directive which takes an array of percentages and draws the chart.

For the bars we define an array of integers in the controller. In the directive it's enough to just a template with
an `ng-repeat`. There's one trick here. `ng-repeat` doesn't allow duplicates. If we would just use `ng-repeat="bar in
 bars"` and use an array like `[20,20,40]`, AngularJS would throw an error like `Duplicates in a repeater are not
 allowed`. We solve this by using `track by $index"` and force uniqueness.

<<(code/directives-stacked-bar-chart/style.css)

<<(code/directives-stacked-bar-chart/index.html)

<<(code/directives-stacked-bar-chart/application.js)
