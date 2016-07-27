
var stream = require('stream');



var Feed = function(channel){

    var readable = new stream.Readable({
        encoding:'utf-8'
    });

    var news = ['big win','stocks down','actor sad'];

    readable._read = function(){
        if(news.length){
            return readable.push(news.shift()+'\n');
        }
        return readable.push(null);
    };

    return readable;

};


var feed = new Feed();

feed.on('readable',function(){

    var data = feed.read();
    data && process.stdout.write(data);

});

feed.on('end', function () {
    console.log("No data now");
});