var Service = require('webos-service');
var service = new Service('com.lampa.tv.ffprobe.service');
var exec = require('child_process').exec,
    child;

service.register("ffprobe", function(message) {
	child = exec('./ffprobe -v error -print_format json -show_entries stream=index,codec_type,codec_name,codec_long_name,codec_time_base,sample_rate,channels,channel_layout,bit_rate:stream_tags=title,handler_name,language "' + message.payload.uri + '"',
	  function (error, stdout, stderr) {
		if (error !== null) {
			message.respond({returnValue: true, result: '[ERROR]', data: '[DETAILS] ' + error});
		}
		if (stderr !== null) {
			message.respond({returnValue: true, result: '[STDERROR]', data: '[DETAILS] ' + stderr});
		}
		
		message.respond({returnValue: true, result: '[SUCCESS]', data: stdout});
	});
});
