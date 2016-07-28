
process.on('message',function(msg){

    console.log('Parent said:', msg);

    process.send("I Love you too");

});
