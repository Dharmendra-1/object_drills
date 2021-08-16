const mapObject = require('../mapObject');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };


let result = mapObject(testObject, (value)=>{
         if(typeof value === 'string'){
             return false
         }else{
             return true
         }

});


console.log(result);