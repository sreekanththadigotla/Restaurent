import React from 'react';
 

 
const initState = {
   name:null,
   price:null,
   items:null,
   totalPrice:null,
   totalData:null  
  
}


  const ord = (state=initState,action) => {

    console.log("HELOW");
    console.log(action.data);
   switch (action.type)
    {

    case ("Fetch"):
        console.log(action.type);
         
        let outData = {
            ...state,
            totalData:action.data
         }
         console.log(outData);
         
           return outData;

    case ("FetchedDatah"):
            return{
               ...state
            }
        
    default:
           return state     
        
    }

}

export default ord;

 