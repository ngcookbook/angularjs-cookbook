# How to use regular urls without the hash

## Problem

By default, AngularJS uses the `#` for urls to write urls like `#/posts/1`. You want to have nice urls and drop the hash.


## Solution

The first part is to change the default behavior of AngularJS and remove the `#`. To do this, you have to inject the `$locationProvider` into the config block of your application and set `$locationProvider.html5Mode(true);`.

    angular.module('cookbookApp', [])
        .config(function($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    )

The second part concerns your webserver. If you use the urls with the hash, it always the your index page which is opened. If we look at `http://example.com/#/posts/1`, usually the http://example.com/index.html is used. #/posts/1 is
just an anchor tag. So, the webserver only needs to place the index.html at the root path and everything is fine. If we now switch to *html5Mode*, the url would look like this: `http://example.com/posts/1`. Now the webserver assumes
that there is a folder with a file like http://example.com/posts/1/index.html. Of course, we don't want to place an index.html for every new page create. And of course, we can't predict a lot of urls. The solution is to define rewrite rules for your webserver. So every url is automatically rewritten to `http://example.com/`. To do this,  you need a specific configuration for your webserver. Here we give examples for apache and nginx.

### Nginx

Here we rewrite every url except urls starting with /images.

    rewrite ^/(?!images) / last;

### Apache

For apache it's a little bit longer

    <ifModule mod_rewrite.c>
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteCond %{REQUEST_URI} !index
        RewriteCond %{REQUEST_URI} !.*\.(css¦js|html|png)
        RewriteRule (.*) index.html [L]
    </ifModule>


%% http://ericduran.io/2013/05/31/angular-html5Mode-with-yeoman/
%% http://stackoverflow.com/questions/13977849/rails-angularjs-html5mode-webrick-or-nginx-rewrite-rule-configure-how

%% enable html5 mode http://stackoverflow.com/questions/17192711/angularjs-html5mode-not-working
