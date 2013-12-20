# Table double rows with ng-repeat

## Problem

You want to to repeat multiple elements which are siblings. Usually ng-repeat only repeat the current element and its
 children. See what's new in AngularJS 1.2.

## Solution

Since AngularJS 1.2 there's a new optional syntax for `ng-repeat`. With it you can define a start and an end element
for the repeater. The only restriction is that the element have to be siblings.

    <table border="1">
        <tr ng-repeat-start="user in users">
            <td colspan="2">{{user.name}}</td>
        </tr>
        <tr ng-repeat-end>
            <td>{{user.age}}</td>
            <td>{{user.gender}}</td>
        </tr>
    </table>


The source:

<<(code/directives-ng-repeat-double-rows/index.html)

<<(code/directives-ng-repeat-double-rows/style.css)

<<(code/directives-ng-repeat-double-rows/users.json)
