# Create an analog clock with SVG

## Problem

You want to create a simple animation without using the canvas element.


## Solution

This is more an inspirational than a complex example. [SVG](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) is a vector image format which can be embedded in HTML. So if you're a little creative, you can do otherwise complex animations with very little code.

Here we use an analog clock as an example for AngularJS in combination with SVG.

It consists of only a circle and 3 lines. The 3 lines are the hands for hour,
minute and second. We rotate them with angular and the `$interval` service.

In the HTML, you see an example of how easy it is to embed a SVG. For more information, see [here](https://developer
.mozilla.org/en-US/docs/Web/SVG).

<<(code/directives-svg-clock/index.html)

The application code is easy, too. We inject and use the `$interval` service
which runs every second. We then calculate the angle of rotation for each
hand.

<<(code/directives-svg-clock/application.js)
