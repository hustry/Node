

var fs = require('fs');



// interesting! we don't know which is the first

fs.writeFile('target.txt','AAAAAAAAAAAAAAAAAAAAAAACCCCCCCCCCCCCCC',function(err){

    if(err){
        throw err;
    }

    console.log('File saved!');

});

fs.readFile('target.txt',function(err,data){

    if(err){
        throw err;
    }

    console.log(data.toString());

});