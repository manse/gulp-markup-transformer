var es = require('event-stream');
var mt = require('markup-transformer');

module.exports = function(options) {
	return es.map(function(file, callback) {
		var isStream = file.contents && typeof file.contents.on === 'function' && typeof file.contents.pipe === 'function';
		var isBuffer = file.contents instanceof Buffer;

		if (isStream) {
			file.contents = file.contents.pipe(es.map(function(source, callback) {
				callback(null, new Buffer(mt(String(source), options)));
			}));
		} else if (isBuffer) {
			file.contents = new Buffer(mt(String(file.contents), options));
		}

		callback(null, file);
	});
};

