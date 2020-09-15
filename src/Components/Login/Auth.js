import React, { Component } from  'react';
import axios from 'axios';
import { Redirect, useHistory, Link, Route } from 'react-router-dom';
import HeaderMaintain from '../../Container/HomePageMaintain/HeaderMaintain';


export const authStarts = () =>{

    return {
        type:"AUTH_START"
    }

}

export const authSucesss = (idToken,userId) =>{

    return {
        type:"AUTH_SUCESS",
        idToken:idToken,
        userId:userId
    }

}


export const authFails = (error) =>{

    return {
        type:"AUTH_Fail",
        error:error
    }

}


export const checkAuthTimeOut  =  (expirationTime) => 
{
        return dispatch => {
           
            setTimeout(()=>{
               dispatch(logout())
            },expirationTime )
        }
}

export const logout = () => 
{  return{
    type:"AUTH_LOGOUT"

}
     
}

export const auths = (Email, Password ,SignupIsTrue) =>{
   let mess="Incorrect username or password"
    return dispatch =>{
        dispatch(authStarts())
        console.log(Email,Password,SignupIsTrue)
        const data ={
            "email":Email,
            "password":Password,
            "returnSecureToken":true
        }
            //SignIn
            let  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3ciBtETk8W17asqnvoiV6LDYj75eDjLw';
            //Login Or SignIn
           if(!SignupIsTrue)
           {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3ciBtETk8W17asqnvoiV6LDYj75eDjLw';
           }
        

        axios.post(url,data)
        .then(response => {
            console.log(response);
            console.log(response.data.idToken);
            console.log( response.data.localId);
            localStorage.setItem("token",response.data.idToken);
            localStorage.setItem("localId", response.data.localId);
            localStorage.setItem("Time", new Date(new Date().getTime()+response.data.expiresIn * 1000));
            localStorage.setItem("userId",response.data.localId)
            dispatch(authSucesss(response.data.idToken, response.data.localId));
           
            // dispatch(checkAuthTimeOut(response.data.expiresIn));
            console.log( new Date(localStorage.getItem("Time") ));
            console.log(new Date().getTime());

            if(response.status === +200)
            {
                console.log("dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                console.log(this.props);
                // eslint-disable-next-line no-restricted-globals
                console.log(location);
                // eslint-disable-next-line no-restricted-globals
                location.href="/home"
                // <Route path="/home" component={HeaderMaintain}/>

            }
               
        })
        .catch(err =>{
            console.log(err);
            dispatch(authFails(err));

        })
         
    }





}


export const checkValidity = () =>  {
   return dispatch =>{
    if(!localStorage.getItem("token"))
    {
        console.log("No Token");
        
    }  else{

        if(new Date(localStorage.getItem("Time")) < new Date())
        {
           console.log("LOGOUT")
        }
         else{
              const userId =  localStorage.getItem("userId");
              const token = localStorage.getItem("token");
              console.log("Send USER TOKEN", userId , token);
             dispatch(authSucesss(token,userId));
         }
    }
}

}

 