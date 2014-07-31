'use strict';

var angular = require("angular"),
	angularRoutes = require("angular-route"),
	routes = require('./routes'),
	sharedComponents = require('./shared-components'),
	mainModule = angular.module('mainIntlApp', ['ngRoute', 'listingControllers']);

module.exports = mainModule;

routes.config(mainModule);

sharedComponents.config(mainModule);