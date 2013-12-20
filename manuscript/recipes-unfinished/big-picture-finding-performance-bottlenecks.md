# Finding Bottlenecks with Batarang

## Problem

You have a lagging application and need a way to investigate which part causes your performance issues.

## Solution

You can do some benchmarking with [Batarang](https://chrome.google
.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk).

I> Batarang is a chrome extension which was specifically designed for AngularJS developers.

With batarang you get a list of all watchers and their relative time spent. To show you how it works,
we sort a list with bogosort. Bogosort is a very inefficient sorting algorithm which randomizes the order of the
elements and checks if the array is now sorted. If not, it randomizes the elements again.

The demo application implements bogosort as a filter:

<<(code/big-pictures-finding-performance-bottlenecks/index.html)

<<(code/big-pictures-finding-performance-bottlenecks/application.js)

Now to meassure the performance, you open the performance tab in Batarang you and use the features of your
application which are slow. Batarang now sums the time up for each watcher used.

In the following screenshot you the result after we added some items to the array.

![Bogosort with 3 items](images/big-pictures-finding-performance-bottlenecks-3-items.png)

![Bogosort with 6 items](images/big-pictures-finding-performance-bottlenecks-6-items.png)

![Bogosort with 10 items](images/big-pictures-finding-performance-bottlenecks-10-items.png)

In the screenshot you see how the time for the collection increases. With 10 items it's 99,8% for the collection watcher. So here's definitely the bottleneck. Of course most of the time it's not that obvious but it gives you a clue where to start.



