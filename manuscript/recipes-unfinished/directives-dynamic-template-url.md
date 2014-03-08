# Create a dynamic templateUrl

## Problem

You have several html templates which you want to use dynamically inside your directive.


## Solution

Inside a directive, `templateUrl` cannot only take a string but also a function. The function has the element and the attributes as parameters.

In the following example, we dynamically fill a textarea with two different templates which are loaded dynamically. We write a directive which is named 'prefill'. This takes the name of the template as argument.

<<(code/directives-dynamic-template-url/index.html)


The directive itself consists only of the `templateUrl` with a function. Here we just take the argument from the
`prefill` attribute and append `.html` to it to create the url.

<<(code/directives-dynamic-template-url/application.js)





