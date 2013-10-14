# Promise: How to wait for several async events

You have several async events. E.g. serveral external api. You cannot work if one failed, so you have to wait for them
all. Here we show an easy way how to do it.

---

# Promise: How to transform every callback into a promise

You have a 3rd party library which uses callbacks. You have some async mechanism in your app and need to wait for the result
of several events. Maybe an $http promise and the result of external api which uses normal callbacks. Now you want
to chain them like in [How to wait for several async events] or want to have an unified api.