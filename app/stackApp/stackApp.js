'use strict';

angular.module('myApp.stackApp', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stackApp', {
    templateUrl: 'stackApp/stackApp.html',
    controller: 'StackAppCtrl',
    controllerAs: 'ctrl'
  });
}])

.controller('StackAppCtrl', ['$scope','StackAppService',function ($scope, StackAppService) {
    this.service = StackAppService;
    this.displayItems = false;
    this.displayInputElement = false;
    this.displayStackOverFlow = false;
    this.displayAddButton = false;
    this.addButtonText = "Add Item to the stack"

	this.isEmpty = function() {
	  return !this.service.items.length;
	}
	this.printStack = function() {
	  if (!this.isEmpty()) {
		this.displayItems = true;
		this.displayInputElement = false;
		this.displayStackOverFlow = false;
		this.service.items;
	  }
	}

	this.insertItem = function() {
	  this.displayInputElement = true;
	  this.displayAddButton = true;
	  this.displayItems = false;
	}
	
	this.push = function() {
	    this.displayItems = false;
	    if (this.service.items.length < this.stackSize) {
		    this.service.addItem(this.newItem);
		    this.addButtonText = "Click here to add more";
	    } else {
		    this.displayStackOverFlow = true;
	    }
	}
	this.pop = function() {
	    this.displayStackOverFlow = false;
	    this.displayInputElement = false;
	    if (!this.isEmpty()) {
		    this.service.deleteItem();
	    }
	}
}]);
