const mapObject = (obj, cb) =>{
 
    let newPerson = [];

    for(let key in obj){

      let state =  cb(obj[key]);

       if(state === false){
           newPerson.push(obj[key]);
       }else{
           newPerson.push(obj[key]+1);
       }
    }


  return newPerson;  
} 


module.exports = mapObject;