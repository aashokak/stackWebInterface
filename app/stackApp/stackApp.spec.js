'use strict';

describe('Controller: StackAppCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp.stackApp'));

  var StackAppCtrl,scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        StackAppCtrl = $controller('StackAppCtrl', {
            $scope: scope
        });
    }));

    it('should verify Controller initialisation', function () {
        expect(scope.displayItems).toBe(false);
        expect(scope.displayInputElement).toBe(false);
        expect(scope.displayStackOverFlow).toBe(false);
    });
});