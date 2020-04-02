angular.module('myApp')
.service('StackAppService', [function() {
	return {
		items: [],
		addItem: function (item){
            this.items.push(item);
        },
    	deleteItem: function () {
    		this.items.pop();
    	}
	};
}]);