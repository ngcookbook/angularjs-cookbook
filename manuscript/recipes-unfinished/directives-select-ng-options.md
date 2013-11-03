# TODO: Ng-options examples

## Problem

You struggle with the instructions for `ng-options` given in the api.


## Solution

Here we give examples for every way you can use `ng-options`. What you'll see in all examples is that ng-options sets
 the values on it's own. You can't change the value of the options. `ng-options` translates them automatically.

### Array data sources

For all the examples we use the following array:

    users = [
        { id: '800', name: 'Bill Mayer', role: 'Admin' },
        { id: '801', name: 'Anne Black', role: 'User' }
    ];

**label for value in array**

Select tag with `ng-options`:

    <select ng-model="arr1" ng-options="user.name for user in users"></select>

The resulting options:

    <option value="0" selected="selected">Bill Mayer</option>
    <option value="1">Anne Black</option>

The contents of `ng-model`:

    {"id":"800","name":"Bill Mayer","role":"Admin"}

**select as label for value in array**

Select tag with `ng-options`:

    <select ng-model="arr2" ng-options="user.id as user.name for user in users"></select>

The resulting options:

    <option value="0" selected="selected">Bill Mayer</option>
    <option value="1">Anne Black</option>

The contents of `ng-model`:

    800

**label group by group for value in array**

Select tag with `ng-options`:

    <select ng-model="arr3" ng-options="user.name group by user.role for user in users"></select>

The resulting options:

    <optgroup label="Admin">
        <option value="0">Bill Mayer</option>
    </optgroup>
    <optgroup label="User">
        <option value="1">Anne Black</option>
    </optgroup>

The contents of `ng-model`:

    {"id":"800","name":"Bill Mayer","role":"Admin"}

**select as label group by group for value in array**

Select tag with `ng-options`:

    <select ng-model="arr4" ng-options="user.id as user.name group by user.role for user in users"></select>

The resulting options:

    <optgroup label="Admin">
        <option value="0">Bill Mayer</option>
    </optgroup>
    <optgroup label="User">
        <option value="1">Anne Black</option>
    </optgroup>

The contents of `ng-model`:

    800


### Object data sources

* label for (key, value) in object
* select as label for (key , value) in object
* label group by group for (key, value) in object
* select as label group by group for (key, value) in object



### Custom empty option

If you don't want to show a blank field but your own custom label, you can just insert an option tag with a blank
value.

    <select ng-model="choose" ng-options="user.name for user in users">
        <option value="">- Choose user -</option>
    </select><br>
