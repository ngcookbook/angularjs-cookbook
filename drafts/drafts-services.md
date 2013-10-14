# Service: Global shortcuts

Your application has some shortcuts which are independent of your view or not bound to an input.

---

# Service: Use the local storage to larger user data

You want to save some user data which is too large for a cookie (maximum size is ...).
A good supported possibility is the local storage (compatibility table).

---

# Service: Structure your service

JavaScript has no build in concept of private/public methods. Your services should have a public api but
helper methods should be private. Here we show how to do it.