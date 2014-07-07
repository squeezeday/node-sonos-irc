
var Sonos = require('sonos').Sonos;
var https = require('https');
var irc = require("irc");
var config = require('./config');

if (config.devices.length == 0) {
	var search = require('sonos').search();
	search.on('DeviceAvailable', function(device, model) {
	  console.log(device, model);
	  config.devices.push(device);
	});
}

var client = new irc.Client(config.server, config.nick, {
    channels: [config.chan],
});
client.addListener('error', function(message) {
    console.log('error: ', message);
});
client.addListener('message'+config.chan, function (from, message) {
	if (message == '!sonos') {
		for (var i=0; i<devices.length; i++) {
			var sonosdev = new Sonos(config.devices[i].host);
			sonosdev.currentTrack(function(err, track) { // TODO: getCurrentState?
				if (!err && track)
					client.say(config.chan, track.artist + ' - ' + track.title);
			});
		}
		return;
	}
	parseMessage(message, function(ret) { 
		client.say(config.chan, ret); 
	});
})

function parseMessage(message, cb) {
	var cmdmatch = message.match(/^!sonos (\d)? ?(\w+) ?(.*)?/);
	if (cmdmatch) {
		var device_index = cmdmatch[1] || 0;
		var cmd = cmdmatch[2];
		var arg = cmdmatch[3];
		if (device_index > config.devices.length -1) {
			cb('Invalid device');
			return;
		}
		var sonosdev = new Sonos(config.devices[device_index].host);
		switch (cmd)
		{
			case 'next':
				// !sonos 0 next
				sonosdev.next(function(err, nexted){
				  if(!err || !nexted) {
					cb('OK');
				  } else {
					console.log('OOOHHHHHH NOOOO');
				  }
				});
				break;
			case 'previous':
				// !sonos 0 previous
				sonosdev.previous(function(err, previousd){
				  if(!err || !previousd) {
					cb('OK');
				  } else {
					console.log('OOOHHHHHH NOOOO');
				  }
				});
				break;
			case 'pause':
				// !sonos 0 pause
				sonosdev.pause(function(err, paused){
				  if(!err || !paused) {
					cb('Pausing');
				  } else {
					console.log('OOOHHHHHH NOOOO');
					}
				});
				break;
			case 'play':
				// !sonos 0 play
				sonosdev.play(function(err, playing){
				  if(!err || !playing) {
					cb('Playing');
				  } else {
					console.log('OOOHHHHHH NOOOO');
					}
				});
				break;
			case 'stop':
				// !sonos 0 stop
				sonosdev.stop(function(err, stopped){
				  if(!err || !stopped) {
					cb('Stopping');
				  }else{
					console.log('OOOHHHHHH NOOOO');
					}
				});
				break;
			case 'queuenext':
				// !sonos 0 queuenext uri://file.mp3
				sonosdev.queueNext(arg, function(err, playing) {
					if (!err) {
						cb('Queued ' + arg);
					} else {
						cb(err);
					}
				});
				break;
			case 'volume':
				if (arg) {
					sonosdev.setVolume(arg, function(err, ret) {
						cb('Setting volume to ' + ret);
					});
				} else {
					sonosdev.getVolume(function(err, ret) {
						cb('Volume ' +ret);
					});
				}
				break;
			default:
				cb('Invalid command');
				break;
		}
	}
}
