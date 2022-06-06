# lampa-ffprobe-service 

ffprobe webOS service for Lampa https://github.com/yumata/lampa 

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
