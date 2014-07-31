'use strict';

var currencyWithoutDecimal = function() {
	return function(value) {
		return value.replace(/\.\d+/, "");
	};
};

var stopsDisplay = function() {
	return function(value) {
		value = +value;
		return value === 0 ? "Non stop" : value === 1 ? "1 stop" : value + " stops";
	};
};

exports.config = function(mainModule) {
	mainModule.filter('currencyWithoutDecimal', currencyWithoutDecimal).filter('stopsDisplay', stopsDisplay);
};