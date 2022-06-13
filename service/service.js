var Service = require('webos-service');
var service = new Service('com.lampa.tv.ffprobe.service');
var exec = require('child_process').exec;

service.register("ffprobe", function(message) {
	
	exec('./ffprobe -v error -print_format json -show_entries stream=index,codec_type,codec_name,codec_long_name,codec_time_base,sample_rate,channels,channel_layout,bit_rate:stream_tags=title,handler_name,language "' + message.payload.uri + '"', (error, stdout, stderr) => {
	  if (error) {
		console.error(error.message);
		message.respond({returnValue: true, result: '[ERROR]', data: '[DETAILS] ' + error});
		return;
	  }
	  if (stderr) {
		console.error(stderr);
		message.respond({returnValue: true, result: '[STDERROR]', data: '[DETAILS] ' + stderr});
		return;
	  }
		message.respond({returnValue: true, result: '[SUCCESS]', data: stdout});
		console.log(stdout);
	});	
});
