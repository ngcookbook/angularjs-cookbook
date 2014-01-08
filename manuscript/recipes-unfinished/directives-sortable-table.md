# Make a sortable table

## Problem

You want to make your table sortable. The element in the header which the table is ordered by is highlighted. If you
click again on the active element the sort order is reversed.

## Solution

For this we write a directive `thSortable` which you can later use like this:

    <th th-sortable="sort" th-column="name" th-default>Name</th>

The directive wraps the contents of an th tag into a link. The link gets a class `active` if it is the current selected sort order. If the element is already active and you click the link again the order is reversed.

We isolate the scope of the directive and set two variables:

<<(code/directives-sortable-table/application.js)

<<(code/directives-sortable-table/index.html)

We use stylesheets to highlight the current column and show the order. Because we set .asc or .desc as class for the
direction, we can use the the css content attribute and append and arrow.

<<(code/directives-sortable-table/style.css)

Just for demo purposes the json file with the demo data.

<<(code/directives-sortable-table/users.json)

