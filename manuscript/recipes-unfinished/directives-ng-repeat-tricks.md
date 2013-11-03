# TODO: Access the index in ng-repeat and prevent duplicate warnings

## Problem

## Solution


$index

%% Make striped table with variables ($index)
%% http://stackoverflow.com/questions/12982667/increment-a-variable-in-angularjs-template


track by

For people getting "Duplicates in a repeater are not allowed" try
ng-repeat='i in [1,1,1] track by $index'

(this works for arrays as well as json objects).

It took me a while to find this, shamelessly stolen from: https://github.com/angular/ang...


