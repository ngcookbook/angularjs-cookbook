# Make a save apply

## Problem

You manually did an `$apply` in your application and you get an error.

## Solution

Each time a major event occurs in a web application that is angular is running (when a webpage is first loaded, when new AJAX request is recieved, URL changes, etc...) Angular picks up the change and then prepares a digestion (which is the internal loop which is run on the $scope memeber). This only takes a few milliseconds, but angular only runs this process once at a time. You can manually kickstart this process by running the $scope.$apply() method (this is useful for triggering updaets when 3rd party applications do something with your webpage that angular needs to know about). Also if you set your own bindings and run the $scope.$apply() method then an exception may be thrown which may cause your code to stop (this happens when an existing digestion is going on in the background). So you will need to aware when a digestion is going on by checking the $$phase variable (this is explained below). The $apply method runs the $digest() method which is an internal method which triggers angular to poll all it's $watch methods.

To get around the $apply exception you will need to pay attention to the $scope.$$phase flag to see if a digestion phase is going on in the background. If a phase is going on then you can just set the $scope values directly and they should get picked up by the current digestion. Here is a combined method which I use to get around this.
!$scope.$$phase

* watch for phase in digest cycle
* only apply if digest cycle is not running

%% http://www.yearofmoo.com/2012/10/more-angularjs-magic-to-supercharge-your-webapp.html#apply-digest-and-phase

%% http://stackoverflow.com/questions/15980634/angularjs-data-binding-and-jquery-promises