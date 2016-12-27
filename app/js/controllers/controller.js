// FOLLOWING CODE FROM https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating 
// create the module and name it scotchApp
(function() {
	var scotchApp = angular.module('scotchApp', []);

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {

	    // create a message to display in our view
	    $scope.message = 'Everyone come and see how good I look!';
	});
})();

// (function() {
// 	var app = angular.module("restaurant", []);

// 	app.controller('MainController', ['$scope', function($scope) { 
// 	  $scope.title = 'Top Sellers in Books'; 
// 	}]);
// })();