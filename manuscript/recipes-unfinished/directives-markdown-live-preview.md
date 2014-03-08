# Create a markdown live preview

## Problem

You're using markdown somewhere in your application. Users who edit the markdown templates should see a live preview
of the resulting html.

## Solution

In this example, we implement the directive with the [Showdown](https://github.com/coreyti/showdown) library which is a popular markdown interpreter.

We create a directive 'markdownPreview' which has an isolated scope and takes a model as input attribute. As we create a new tag `<markdown-preview>`, we have to restrict it to element (E).

In the link function, we're watching for a change of the model attribute and convert the markdown input to an html output. The result is pasted into the elements' inner html.


<<(code/directives-markdown-live-preview/application.js)

<<(code/directives-markdown-live-preview/index.html)


## Discussion

Oftentimes, there are more solutions to a problem. If you want, you could also implement the markdown as a filter instead of directive. But be aware that you have to include the `ngSanitize` module and use `ng-bind-html`. Otherwise, your resulting html will be escaped.