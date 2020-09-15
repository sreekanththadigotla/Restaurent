import React, { Component } from 'react';
import reduer from '../reducers/MenuIngrediets';


 const initialState = {
     token:null,
     userId:null,
     error:null,
     loading:null
 };

  const reducer = (state=initialState, action) => 
  {     console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDd")
        console.log(state);
       console.log(action);
       switch(action.type)  {  
        case "AUTH_SUCESS":
              return{
                 ...state,
                 token:action.idToken,
                 userId:action.userId,
                 error:null,
                 loading:false
              }


         case "AUTH_START":
                return{
                   ...state,
                   error:null,
                   loading:true
                }       
              
         case "AUTH_Fail":
            return{
                ...state,
                error:action.error,
                loading:false
                }
 
                 
         case "AUTH_LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("localId");
            localStorage.removeItem("Time");
            return{
                ...state,
                token:null,
                userId:null
                }


        default:
           return  state;

      }

  }

  export default reducer;