

////this cannot be guaranteed b would execute after a
//setTimeout(a,1000);
//setTimeout(b,1001);
//
//
////The execution order of a and b are predictable in this case FOR　NODE
//setTimeout(a, 1000);
//setTimeout(b, 1000);


// A Node program does not stay alive without a reason to do so. A process will keep
// running for as long as there are callbacks still waiting to be processed. Once those are
// cleared, the Node process has nothing left to do, and it will exit

//The unref method allows the developer to assert the following instructions: when
//this timer is the only event source remaining for the event loop to process, go ahead and
//terminate the process.

setTimeout(function() {
    console.log("now stop");
}, 100);
var intervalId = setInterval(function() {
    console.log("running")
}, 1);
intervalId.unref();


