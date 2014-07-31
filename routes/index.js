'use strict';

var reviewRoute = require('./review/reviewRoute'),
	listingRoute = require('./listing/listingRoute.js');

module.exports = {
	config : function(mainModule) {
		listingRoute.config(mainModule);
		reviewRoute(mainModule);
	}
};