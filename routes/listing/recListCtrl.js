'use strict';

var model = require("../../model-listing"),
	utils = require("../../model-listing/utils"),
	_ = require("underscore");

module.exports = function($scope, $http){
	model.getRecs($http, function(exposedRecs){
		$scope.recList = exposedRecs;
	});
	
	var defaultRecsVisible = 5, recsToAddOnScroll = 3;
	$scope.airlineInfo = model.getAirlineInfo();
	$scope.currentlyDisplayedRecs = defaultRecsVisible;

	$scope.scrollMore = function() {
		var totRecs = model.getRecs().length, i, log = "";
		i = totRecs - $scope.currentlyDisplayedRecs;
		log += $scope.currentlyDisplayedRecs + "---";
		$scope.currentlyDisplayedRecs += (i > recsToAddOnScroll ? recsToAddOnScroll : (i > 0) ? i : 0);
		log += $scope.currentlyDisplayedRecs;
		console.log(log);
	};
};