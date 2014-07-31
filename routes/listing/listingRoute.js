'use strict';

var recListCtrl = require("./recListCtrl"),
	recGroupCtrl = require("./recGroupCtrl"),
	radioGroupCtrl = require("./radioGroupCtrl"),
	angular = require("angular");

exports.config = function(mainModule) {
	mainModule.config(function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl : '/international/templates/listing.html',
			controller : 'recListCtrl'
		});
	});
};

exports.listingRouteModule = angular.module('listingControllers', [])
	.controller('recListCtrl', recListCtrl)
	.controller('recGroupCtrl', recGroupCtrl)
	.controller('radioGroupCtrl', radioGroupCtrl);