# Make a syntax highlighter

## Problem

You want to make a syntax highlighter but your code inside the code block is interpreted by AngularJS.


## Solution

As an example we take the following code:

<<(code/directives-syntax-highlighter/index.html)

If we look at the code block, there are several problems we have to tackle.

* Start: From a html perspective, the code snippet starts right behind `code class="language-markup">` but we don't
want to insert an empty line before the code snippet.
* Indention: For reasons of readability we want to indention in the html file to be 4 spaces. But when we present it
to the user, we want it to start at 0.
* Angle brackets: We don't want to paste our code like `&gt;pre&lt;. We have to convert it.
* AngularJS: We don't want AngularJS to interpret the code inside the code block because if we would use an
expression it would be interpreted by AngularJS.

As a syntax highlighter we use [Prism](http://prismjs.com) by Lea Verou. It's used by a lot of well-known companies
for their sites.

<<(code/directives-syntax-highlighter/application.js)


