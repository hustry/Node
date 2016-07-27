

var fs = require('fs');
// fs.watch 当target.txt 变化时执行回调函数
fs.watch('target.txt',function(){

    console.log('File target.txt just changed!');

});

console.log('Now watching for changes');