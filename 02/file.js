

var fs = require('fs');
// fs.watch ��target.txt �仯ʱִ�лص�����
fs.watch('target.txt',function(){

    console.log('File target.txt just changed!');

});

console.log('Now watching for changes');