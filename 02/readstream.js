

var fs = require('fs');

var stream = fs.createReadStream(process.argv[2]);

stream.on('data',function(data){

    process.stdout.write(data);

});

stream.on('error',function(error){

    process.stdout.write("ERROR:" + error.message);

});