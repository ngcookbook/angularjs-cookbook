# Dynamic service loading with the $injector

## Problem

You have a lot of select boxes whose items are loaded from the server. You don't want to repeat yourself here. Instead of injecting the needed services into the controller, you just want the directive to handle it automatically.


## Solution

Instead of letting the injector automatically inject the services by name in the directive definition, you trigger the injection process manually. To do this, you use the `$injector` instance.

In this example, we create a directive with the following attributes:

* *model:* Translates to ng-model in the select field
* *resource:* The service name and the function of the service you want to use separated by a dot.
* *resource-id:* The key in the returning object you want to use as options value.
* *resource-label:* The key in the returning object you want to use as options label.

    <dynamic-select model="personId" resource="People.getList"
                    resource-id="id" resource-label="name" />

The directive with looks like this:

<<(code/directives-dynamic-service-loading/index.html)

The directive `dynamicSelect` itself is not that complicated. We have an isolated scope where we `model`, `resourceId` and `resourceLabel`. `resource` is directly read through the attrs function parameters because we don't allow to dynamically change the service and we're not needing it in the template. (See recipe use the scope right TODO).

In the link function, we split the string from resource into two parts and write them into an object for better readability. Then we just use `$injector.get` to return the service as object. We then use the function as read into `params.fn`. We use `.then` here directly because we assume that our service function returns a promise.

<<(code/directives-dynamic-service-loading/application.js)

W> This is example is greatly simplified. You would of course need error checking if you're consuming services
other than $http.


Just for a complete example, the used JSON file.

<<(code/directives-dynamic-service-loading/person.json)


