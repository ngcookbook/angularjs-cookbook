# Replace history path

## Problem

You use location.path('/') and got stuck in a 'redirection loop'.


## Solution

This is an easy one to fix. You just have to append `.replace()`.

    $location.path('/').replace();