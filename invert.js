const invert = (obj) =>{
  
    let newObj = {}

    for(let key in obj){
        let keyValue = obj[key];

        if(!newObj[keyValue]){
            newObj[keyValue] = key;
        }
    }
    

 return newObj;   
}


module.exports = invert;