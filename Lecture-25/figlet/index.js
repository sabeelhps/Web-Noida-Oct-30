const figlet = require('figlet');
const colors = require('colors');

figlet('Welcome to NPM', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});