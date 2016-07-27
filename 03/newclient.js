
var net = require('net');
var ldj = require('./cli.js');


netClient = net.connect({port:5432});
ldjClient = ldj.connect(netClient);

ldjClient.on('message',function(msg){

    console.log("File changed at "+ new Date(msg.timestamp));

});