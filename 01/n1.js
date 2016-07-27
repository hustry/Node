var cp = require('child_process');
var child = cp.fork(__dirname + '/lovechild.js');

child.on('message', function (msg) {

    console.log('Child say:' + msg);
    
});

child.send('I Love you');