(function() {
	var app = angular.module("restaurant", []);

	app.controller('MainController', ['$scope', function($scope) { 
	  $scope.title = 'Top Sellers in Books'; 
	}]);
})();