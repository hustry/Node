

var events = require('events');
function getEmitter() {
    var emitter = new events.EventEmitter();

    //process.nextTick will exec before io event

    process.nextTick(
        function(){

            emitter.emit('start');  // there is no listener
        }
    );
    return emitter;
}
var myEmitter = getEmitter();


myEmitter.on("start", function() {
    console.log("Started");
});