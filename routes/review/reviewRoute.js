'use strict';

var reviewMainCtrl = require("./reviewMainCtrl");

module.exports = function(mainModule) {
	mainModule.config(function($routeProvider) {
		$routeProvider.when('/review', {
			templateUrl : '/international/templates/review.html',
			controller : 'reviewMainCtrl'
		});
	});

	mainModule.controller('reviewMainCtrl', reviewMainCtrl);
};