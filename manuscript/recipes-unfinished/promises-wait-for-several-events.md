# TODO: How to wait for several async events

You have several async events. E.g. serveral external api. You cannot work if one failed, so you have to wait for them
all. Here we show an easy way how to do it.

%% Promise: $.when (computed or fetch) (http://stackoverflow.com/questions/16770821/how-does-angular-q-when-work)
