# Use your view filters in your controller (quick)

## Problem

You want to localize a string in your controller. Because there's no extra service for this,
you can you use the date filter.


## Solution

You can just inject the `$filter` service and use the view filter. You call the filter with the name of the filter
and it will return a function. The first parameter of the returning funtion is always the input. If the filter has
options, they are the following parameters.

Example:

    $filter('date')(input, options)