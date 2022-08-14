var Service = require('webos-service');
var dns = require('dns').lookup,
    dns_resolve;
var url = require('url').parse,
    parsedUri;
var service = new Service('com.lampa.tv.service');
var exec = require('child_process').exec,
    child;


service.register("ffprobe", function(message) {
	parsedUri = url(message.payload.uri);
	dns_resolve = dns(parsedUri.hostname, function onLookup(err, addresses, family) {
		var resolvedUri = parsedUri.protocol + '//'+ addresses + (parsedUri.port ? (':' + parsedUri.port) : '') + parsedUri.path;	
		child = exec('./ffprobe -v error -show_streams -print_format json ' + '"' + resolvedUri+'"',
		  function (error, stdout, stderr) {
			message.respond({returnValue: true, result: '[FFPROBE OUTPUT] Resolved uri: ' + resolvedUri, data: stdout, stderrText: stderr});
			if (error !== null) {
				message.respond({returnValue: true, result: '[ERROR]', data: '[DETAILS] ' + error});
			}	
		});
	});
});
