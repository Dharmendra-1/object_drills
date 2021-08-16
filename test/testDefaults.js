const defaults = require('../defaults');


const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };


const result = defaults(testObject);


console.log(result);