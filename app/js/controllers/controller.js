// FOLLOWING CODE FROM https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating 
// create the module and name it scotchApp
(function() {
  // create the module and name it scotchApp
      // also include ngRoute for all our routing needs
  var scotchApp = angular.module('scotchApp', ['ngRoute']);

  // configure our routes
  scotchApp.config(function($routeProvider) {
    $routeProvider

	  // route for the home page
	  .when('/', {
      templateUrl : '../views/home.html',
      controller  : 'mainController'
	  })

	  // route for the about page
	  .when('/about', {
      templateUrl : '../views/about.html',
      controller  : 'aboutController'
	  })

	  // route for the contact page
	  .when('/contact', {
      templateUrl : '../views/contact.html',
      controller  : 'contactController'
	  });
  });

  // create the controller and inject Angular's $scope
  scotchApp.controller('mainController', function($scope) {
      // create a message to display in our view
      $scope.message = 'Everyone come and see how good I look!';
  });

  scotchApp.controller('aboutController', function($scope) {
      $scope.message = 'Look! I am an about page.';
  });

  scotchApp.controller('contactController', function($scope) {
      $scope.message = 'Contact us! JK. This is just a demo.';
  });
})();

// (function() {
// 	var app = angular.module("restaurant", []);

// 	app.controller('MainController', ['$scope', function($scope) { 
// 	  $scope.title = 'Top Sellers in Books'; 
// 	}]);
// })();