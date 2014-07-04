// requires https://github.com/martynsmith/node-irc (0.3.x branch) and https://github.com/bencevans/node-sonos

//config
var config = {
	chan: '#foo',
	nick: 'IAmSonosBot',
	server: 'irc.freenode.net',
	devices: [] // [] for auto scan
};
// end config
module.exports = config;