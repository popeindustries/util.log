/**
 * Sets debug environment and enables console.log when true
 */
var initialized = false
	, timestamp = true
	, locations = '^http(|s):\/\/dev|^http(|s):\/\/localhost';

/**
 * Configure log behaviour
 * Add whitelist locations, enable/disable timestamp
 * @param {Object} config
 */
exports.init = function(config) {
	if (config != null) {
		timestamp = config.timestamp || timestamp;
		locations = config.locations && new RegExp(locations + '|' + config.locations.join('|'), 'i');
		window.debug = !!(document.location.href.match(locations)) || !!(document.location.hash.match(/debug/));
		window.log = window.debug ? exports.log : (function() {});
	}
	return initialized = true;
};

/**
 * Log messages to the console
 * @param {*} arguments...
 */
exports.log = function() {
	var args = (1 <= arguments.length) ? Array.slice.call(arguments, 0) : [];
	if (!initialized) {
		exports.init();
	}
	if (window.debug) {
		try {
			var d = new Date();
			var t = timestamp ? "" + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds()) + ":" + (d.getMilliseconds()) : '';
			if (window.console) {
				console.log(t, args);
			}
		} catch (error) { }
	}
};
