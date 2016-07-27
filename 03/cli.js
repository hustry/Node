
var events = require('events');
util = require('util');


LDJClient = function (stream) {

    events.EventEmitter.call(this);
    var self = this;
    var buffer = '';
    stream.on('data',function(data){

        buffer+=data;
        var by = buffer.indexOf('\n');
        while(by!==-1){
            var input = buffer.substr(0,by);
            buffer = buffer.substr(by+1);
            self.emit('message',JSON.parse(input));
            by = buffer.indexOf('\n');
        }

    });
    
};

util.inherits(LDJClient,events.EventEmitter);

exports.LDJClient = LDJClient;
exports.connect = function(stream){

    return new LDJClient(stream);

};