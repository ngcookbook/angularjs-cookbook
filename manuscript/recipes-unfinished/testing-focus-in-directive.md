# TODO: Testing focus directive

## Problem

## Solution

~~~
it('should highlight on hover if shortcut-highlight is used', inject(function ($rootScope, $compile) {
    var scope = $rootScope.$new();
    var template = '<div cgm-shortcut="alt+e" shortcut-focus="input"><input type="text"/></span>';
    var element = $compile(template)(scope);
    element.appendTo(document.body);
    scope.$apply();

    expect(element.find('input').is(':focus')).toBe(false);
    element.find('input').focus();
    expect(element.find('input').is(':focus')).toBe(true);
}));
~~~


%% http://stackoverflow.com/questions/18850219/testing-for-focus-an-angularjs-directive
%% http://stackoverflow.com/questions/5318415/which-browsers-support-document-activeelement