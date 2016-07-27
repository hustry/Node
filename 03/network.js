
var net = require('net');
var fs = require('fs');


// con:a Socket object
var server = net.createServer(function(con){

    console.log('Client connected.');

    var watcher = fs.watch('target.txt',function(){

        con.write("File changed!");
    });

    con.on('close',function(){

        console.log('Client disconnectd.');
        watcher.close();

    });

});

server.listen(5432,function(){
    console.log('Listening!');
});