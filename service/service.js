var Service = require('webos-service');
var service = new Service('com.lampa.tv.service');
var ffprobe = require('ffprobe'),
    ffprobeStatic = require('ffprobe-static');

service.register("ffprobe", function(message) {
	ffprobe(message.payload.uri, { path: ffprobeStatic.path }, function (err, info) {
	  if (err) return done(err);
	  message.respond({returnValue: true, data: JSON.stringify(info)});
	});
});
