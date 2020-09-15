import axios from "axios"

export const AddIngredients = (name,i) =>
{
    return {
        type:"ADD_NUMBER",
         name:name,
         index:i

    }
}

export const RemoveIngredients = (name,i) =>
{
    return {
        type:"REMOVE_NUMBER",
         name:name,
         index:i

    }
}

export const setIngredientLeft = (ingredeintsLeft) =>
{  
    console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL2");
    console.log(ingredeintsLeft);
    console.log(ingredeintsLeft.data);
    return{
        type:"SET_INGREDIENTSLeft",
        left:ingredeintsLeft,
    }
}

export const InitIngredients1 = () =>
{   
    return dispatch => {
    axios.get('https://resss-b9167.firebaseio.com/ingredientsLeft.json')
    .then(response1 => {
        console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL1")
        
        response1.data.splice(0,1);
        console.log(response1.data);
        dispatch(setIngredientLeft(response1.data))
    })
    .catch(error =>{
        console.log(error); 
    })
}    

}




export const setIngredientRight = (ingredeintsRight) =>
{  
    console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR2");
    console.log(ingredeintsRight);
    console.log(ingredeintsRight.data);
    return{
        type:"SET_INGREDIENTSRight",
        right:ingredeintsRight,
       
    }
}

export const InitIngredients2 = () =>
{   
    return dispatch => {
    axios.get('https://resss-b9167.firebaseio.com/ingredientsRight.json')
    .then(response1 => {
        console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR1")
        
        response1.data.splice(0,1);
        console.log(response1.data);
        dispatch(setIngredientRight(response1.data))
    })
    .catch(error =>{
        console.log(error); 
    })
}    

}




export const setIngredientCentre = (ingredeintsCentre) =>
{  
    console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC2");
    console.log(ingredeintsCentre);
    console.log(ingredeintsCentre);
    return{
        type:"SET_INGREDIENTSCentre",
        centre:ingredeintsCentre,
       
    }
}

export const InitIngredients3 = () =>
{   
    return dispatch => {
    axios.get('https://resss-b9167.firebaseio.com/center.json')
    .then(response1 => {
        console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC1")
        
        response1.data.splice(0,1);
        console.log(response1.data);
        dispatch(setIngredientCentre(response1.data))
    })
    .catch(error =>{
        console.log(error); 
    })
}    

}