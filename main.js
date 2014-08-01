'use strict';

var angular = require("angular"),
	angularRoutes = require("angular-route"),
	infScroll = require("./plugins/ng-infinite-scroll"),
	routes = require('./routes'),
	sharedComponents = require('./shared-components'),
	mainModule = angular.module('mainIntlApp', ['ngRoute', 'infinite-scroll', 'listingControllers']);

module.exports = mainModule;

routes.config(mainModule);

sharedComponents.config(mainModule);