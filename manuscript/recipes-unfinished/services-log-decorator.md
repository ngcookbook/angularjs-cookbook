# Write a decorator

## Problem

You want to execute additional functions before a service method is called.

## Solution

The solution is to write a decorator. Decorators can intercept calls to service (provider, factory, service,
value) and modify them.

In this example we decorate the `$log` log service to prepend the used log level to the output.

Decorator can only be initialized in a config block. This adds some limitations because you can't inject other
services in the config block. You can only use the config blocks of providers.

For a decorator to work, we use the `$provide` provider and call the method decorator on it. In the decorator
function, $delegate is automatically injected and contains the decorated service. In this example `$log`.

We create a new object which is api compatibility to the `$log` service. We do this by generating the `$log` methods
dynamically and call the original service after we modified the log message.

    .config(function($provide) {
      $provide.decorator('$log', function($delegate) {
        var logger = {};
        ['log','info','warn','error','debug'].forEach(function(level) {
          logger[level] = function(message) {
            $delegate[level]('[' + level.toUpperCase() + '] ' + message);
          };
        });
        return logger;
      });
    })

### Complete example

<<(code/directives-log-decorator/application.js)

<<(code/directives-log-decorator/index.html)
