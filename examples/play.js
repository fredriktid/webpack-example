const Conference = require('./conference');

let con = new Conference('SymfonyCon Lisbon');

con.printNameLater()
    .then((data) => {
        console.log('callback!');
        console.log(data);
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               resolve(data* 100)
           }, 2000);
        });
    })
    .then((data) => {
        console.log('second callback');
        console.log(data);
    })
    .catch(() => {
        console.log('failed!');
    })
    .finally(() => {
        console.log('finally...');
    });

console.log('Done');
