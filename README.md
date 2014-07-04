# node-sonos-irc

Node.js Interface to [Sonos](http://sonos.com) for IRC

Please open [pull-requests](https://github.com/squeezeday/node-sonos-irc)

## Configuration
config.js
chan: '#foo';
nick: 'IAmSonosBot';
server: 'irc.freenode.net';
devices: [] 

## IRC commands

!sonos
Displays current playing track on all configured/found Sonos devices

General command structure
!sonos [device_index || 0] [command] [[argument]]


## Examples

!sonos stop
!sonos play
!sonos pause
!sonos volume
Gets volume

!sonos volume 50
Sets volume to 50%

!sonos queuenext [uri]
Queues a track to play next


## Installation

*Via npm*

    npm install sonos-irc

*Via Git*

    npm install git://github.com/squeezeday/node-sonos-irc.git

## Licence

(MIT Licence)

    Copyright (c) 2014 squeezeday

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
