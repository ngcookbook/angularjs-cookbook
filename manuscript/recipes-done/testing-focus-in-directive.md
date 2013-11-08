# Testing focus directive

## Problem

You want to test focus on an element but don't know how.

## Solution

The trick here is to append your element you want to test to the body. You can only test focus on element which are
bound to the DOM.

In this example we take simple directive which just gets the focus. We create a new scope and create an template with
 our focus directive. After we compiled it, we attach it the body. Checks on focus now work.


    it('should focus the input field', inject(function ($rootScope, $compile) {
        var scope = $rootScope.$new();
        var template = '<input type="text" focus-me />';
        var element = $compile(template)(scope);
        element.appendTo(document.body);
        scope.$apply();

        expect(element.find('input').is(':focus')).toBe(false);
        element.find('input').focus();
        expect(element.find('input').is(':focus')).toBe(true);
    }));

%% TODO: Maybe create a test suite

%% http://stackoverflow.com/questions/18850219/testing-for-focus-an-angularjs-directive
%% http://stackoverflow.com/questions/5318415/which-browsers-support-document-activeelement