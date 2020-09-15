import axios from "axios"

export const iirst = (newArray) =>
{
    return {
        type:"Fetch",
        data:newArray
    }
}



export const FirstFetch = (token,userId) => 
{       console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
        console.log(token);
        console.log(userId);
        console.log('https://resss-b9167.firebaseio.com/orders.json?auth=' + token + '&orderBy="userId"&equalTo="'+ userId +'"')
    return dispatch => {
       
        axios.get('https://resss-b9167.firebaseio.com/orders.json?auth=' + token + '&orderBy="userId"&equalsTo="'+ userId +'"')
        .then(response => 
            {
                console.log("RRRRRRRRRRRRRRRRRRRRRRRR");
                console.log(response.data);
              let data = response.data;
              let newArray = [];
              for(let d in data)
              {
                  let k = data[d];
                    console.log(data[d]);
                    for(let din in k)
                    {
                        console.log(k[din]);
                        if(k[din].userId === userId)
                        { 
                            console.log(k[din])
                            console.log(k[din].userId)
                            console.log(userId)
                            newArray.push(k[din]);
                        }
                        
                    }
                    k=null;
                
              }
              console.log(newArray);

                dispatch(iirst(newArray));
            })

        .catch(err=>
            {    console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
                console.log(err);
            })

       
    }
}