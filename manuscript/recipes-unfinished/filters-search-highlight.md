# How to highlight a search

## Problem

You want to highlight a search string within your ng-repeat.


## Solution

For this to work we have to first create a filter. This filter wraps all occurrences of the search string with an span with a class `.highlight`. This is done with a replace with a regular expression. `RegExp('('+ search + ')', 'gi');` has the second parameters g and i which mean 'all occurrences` and don't care for the case. You need the parentheses because the part inside will be contained in $1 in the replace statement. See (TODO) Regular expressions for more information.

The next thing is the module `ngSanitze`. The default behaviour of AngularJS is to replace all `<` and `>` with `&lt;
 and `&gt;` in an expression. Because we want to output the raw html, we include `ngSanitze` and get a new directive
 with it `ng-bind-html`. This directive allows html but tries to sanitize it to prevent XSS attacks.

Tip: You're using Webstorm? There is a Regex tester plugin here (TODO link)

<<(code/directives-select-multiple/application.js)

<<(code/directives-select-multiple/index.html)


For the styling we add a `.highlight` class which highlight the part in red.

<<(code/directives-select-multiple/style.css)

