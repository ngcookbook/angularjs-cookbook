# Select and ng-options

## Problem

You struggle with the instructions for `ng-options` given in the api.


## Solution

Here we give examples for every way you can use `ng-options`. Source code ((((here)))))

### Array data sources

For all the examples, we use the following array:

    users = [
        { id: '800', name: 'Bill Mayer', role: 'Admin' },
        { id: '801', name: 'Anne Black', role: 'User' }
    ];

What you'll see in all examples is that `ng-options` sets the values for arrays on it's own. You can't change the value of the options. `ng-options` translates them automatically.

#### label for value in array

Select tag with `ng-options`:

    <select ng-model="arr1" ng-options="user.name for user in users">

The resulting options:

    <option value="0" selected="selected">Bill Mayer</option>
    <option value="1">Anne Black</option>

The contents of `ng-model`:

    {"id":"800","name":"Bill Mayer","role":"Admin"}

#### select as label for value in array

Select tag with `ng-options`:

    <select ng-model="arr2" ng-options="user.id as user.name for user in users">

The resulting options:

    <option value="0" selected="selected">Bill Mayer</option>
    <option value="1">Anne Black</option>

The contents of `ng-model`:

    800

#### label group by group for value in array

Select tag with `ng-options`:

    <select ng-model="arr3"
            ng-options="user.name group by user.role for user in users">

The resulting options:

    <optgroup label="Admin">
        <option value="0">Bill Mayer</option>
    </optgroup>
    <optgroup label="User">
        <option value="1">Anne Black</option>
    </optgroup>

The contents of `ng-model`:

    {"id":"800","name":"Bill Mayer","role":"Admin"}

#### select as label group by group for value in array

Select tag with `ng-options`:

    <select ng-model="arr4"
            ng-options="user.id as user.name group by user.role for user in
         users">

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

For all the examples we use the following object:

    roles = {
        150: { name: 'Admin', rights: 'Read+Write' },
        151: { name: 'User',  rights: 'Read' }
    };

#### label for (key, value) in object

Select tag with `ng-options`:

    <select ng-model="obj1" ng-options="obj.name for (roleId, obj) in roles">

The resulting options:

    <option value="150" selected="selected">Admin</option>
    <option value="151">User</option>

The contents of `ng-model`:

    {"name":"Admin","rights":"Read+Write"}

#### select as label for (key , value) in object

Select tag with `ng-options`:

    <select ng-model="obj2" ng-options="id as obj.name for (id, obj) in roles">

The resulting options:

    <option value="150" selected="selected">Admin</option>
    <option value="151">User</option>

The contents of `ng-model`:

    150

#### label group by group for (key, value) in object

Select tag with `ng-options`:

    <select ng-model="obj3"
            ng-options="obj.name group by obj.rights for (id, obj) in roles">

The resulting options:

    <optgroup label="Read+Write">
        <option value="150">Admin</option>
    </optgroup>
    <optgroup label="Read">
        <option value="151">User</option>
    </optgroup>

The contents of `ng-model`:

    {"name":"Admin","rights":"Read+Write"}

#### select as label group by group for (key, value) in object

Select tag with `ng-options`:

    <select ng-model="obj4"
            ng-options="id as obj.name group by obj.rights for (id, obj) in roles">

The resulting options:

    <optgroup label="Read+Write">
        <option value="150">Admin</option>
    </optgroup>
    <optgroup label="Read">
        <option value="151">User</option>
    </optgroup>

The contents of `ng-model`:

    150

### Custom empty option

If you don't want to show a blank field but your own custom label, you can just insert an option tag with a blank value.

    <select ng-model="choose" ng-options="user.name for user in users">
        <option value="">- Choose user -</option>
    </select><br>
