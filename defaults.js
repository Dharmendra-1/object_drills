
const defaultProp = {location: "Bangalore" };


const defaults = (obj) =>{

   for(let key in obj){
       
    if(defaultProp.hasOwnProperty(key)){
           
        obj[key] = defaultProp[key];
       
    }
   
    }

 return obj;  
}


module.exports = defaults;