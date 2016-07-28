
// 1. operation system signal events
// the SIGINT signal is sent to a process when its controlling terminal detects a Ctrl-C (or equivalent) keystroke

//setInterval(function(){},1e6);
//process.on('SIGINT',function(){
//
//    console.log('SIGINT signal received');
//    process.exit(1);
//
//});

//2.child process communication
//
//var cp = require('child_process');
//var child = cp.fork(__dirname + '/lovechild.js');
//
//child.on('message', function (msg) {
//
//    console.log('Child say:' + msg);
//
//});

//child.send('I Love you');

// 3.file events
//
//var fs = require('fs');
//fs.watch(__filename,{persistent:false}, function (event,filename) {
//
//    console.log(event);
//    console.log(filename);
//
//});
//
//setImmediate(function () {
//
//    fs.rename(__filename,__filename+'.new',function(){});
//
//});

//4. Deferred execution  setTimeout and setInterval
