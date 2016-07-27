"use strict";

var fs = require('fs');

var spawn = require('child_process').spawn;

var filename = process.argv[2];

if(!filename){
    throw Error('File must specified!');
}


// fs.watch 当target.txt 变化时执行回调函数
fs.watch(filename,function(){

    var ls = spawn('ls',['-lh',filename]);
    ls.stdout.pipe(process.stdout);

    console.log('File '+ filename +' just changed!');

});

console.log('Now watching for changes');