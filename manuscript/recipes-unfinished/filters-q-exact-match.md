# Filter an exact match (quick)

## Problem

If you use the normal filter `| filter:search` with an input field, you also getting
substrings of your search. But it's easy to do an exact matching.


## Solution

The filter filter has a third argument which allows for exact matching

We have an array of object like `[{ name: 'John', gender: 'male' }, { name: 'Anne',
gender: 'female' }]`. If we would filter for `male` with the default filter filter we would get also all females.


When we set a third parameter to true we get exact matching, e.g. `... | filter:personFilter:true`.


Here's a complete example:

<<(code/filters-q-exact-match/index.html)

<<(code/filters-q-exact-match/application.js)




%% http://stackoverflow.com/questions/17480526/angularjs-filter-exact-match
