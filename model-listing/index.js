'use strict';
var utils = require("./utils"),
	jQuery = require("jquery"),
	dataURL = "/international/listing/retrieveResults?depvar=0&retvar=0&requeststatus=I&SessionKey="+sessionKey,
	_ = require("underscore"),
	origRecs = [], exposedRecs = [[{segments:[]}]], airLineCodeMap = {}, gotData = false;

exports.getAirlineInfo = function() {
	return airLineCodeMap;
};
exports.getRecs = function($http, callback){
	if(gotData){
		callback(exposedRecs);
	} else{
		$http.get(dataURL)
			.success(function(data){
				var origRecs = [],
					exposedRecs = [],
					airLineCodeMap = {};
				_.each(_.keys(data[0].codemap.airlineinfos), function(value, key){
					airLineCodeMap[value] = data[0].codemap.airlineinfos[value].name;
				});
				for(var i = 0; i < data[0].results.length; i++){
					var rec = data[0].results[i];
					utils.processFare(rec);
					utils.formatDuration(rec);
					utils.calculateStops(rec);
					utils.populateIndices(rec, origRecs.length);
					utils.processAirline(rec,airLineCodeMap);
					utils.processDepTime(rec);
					origRecs.push(rec);
				}
				utils.groupRecs(origRecs,exposedRecs);
				callback(exposedRecs);
			});
	}
};