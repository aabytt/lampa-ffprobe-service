# lampa-ffprobe-service 

ffprobe webOS service for Lampa https://github.com/yumata/lampa

ffprobe arm binary [ffmpeg static](https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-armhf-static.tar.xz)

save to `service/node_modules/ffprobe-static/bin/webos/arm/`

usage 
```
webOS.service.request('luna://com.lampa.tv.service', {
  method: 'ffprobe',
    parameters: { 
      uri: 'http://ftp.nluug.nl/pub/graphics/blender/demo/movies/Sintel.2010.720p.mkv'
		},
	onSuccess: function (event) {
   		console.log (JSON.stringify(event));
          },
  	onFailure: function (event) {
    		console.log(JSON.stringify(event));
    }
});
```
