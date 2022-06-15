var Service = require('webos-service');
var service = new Service('com.lampa.tv.service');
var exec = require('child_process').exec,
    child;

service.register("ffprobe", function(message) {
	child = exec('./ffprobe -v error -print_format json -show_entries stream=index,codec_type,codec_name,codec_long_name,codec_time_base,sample_rate,channels,channel_layout,bit_rate:stream_tags=title,handler_name,language "' + message.payload.uri + '"',
	  function (error, stdout, stderr) {
		message.respond({returnValue: true, result: '[FFPROBE OUTPUT]', data: stdout, stderrText: stderr});
		
		if (error !== null) {
			message.respond({returnValue: true, result: '[ERROR]', data: '[DETAILS] ' + error});
		}	
	});
});
