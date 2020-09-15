
const initialState = {
    // left:[{name:"biryani1","material":"indian","times":0,"price":25},{name:"biryani7","material":"indian","times":0,"price":25}
    //           ,{name:"biryani2","material":"indian","times":0,"price":25},{name:"biryani8","material":"indian","times":0,"price":25}
    //         ,{name:"biryani3","material":"indian","times":0,"price":25},{name:"biryani9","material":"indian","times":0,"price":25},
    //         {name:"biryani4","material":"indian","times":0,"price":25},{name:"biryani10","material":"indian","times":0,"price":25}
    //         ,{name:"biryani5","material":"indian","times":0,"price":25},{name:"biryani11","material":"indian","times":0,"price":25}
    //       ,{name:"biryani6","material":"indian","times":0,"price":25},{name:"biryani12","material":"indian","times":0,"price":25}],
    // right:[{name:"biryani11","material":"indian","times":0,"price":25},{name:"biryani77","material":"indian","times":0,"price":25}
    //         ,{name:"biryani22","material":"indian","times":0,"price":25},{name:"biryani88","material":"indian","times":0,"price":25}
    //       ,{name:"biryani33","material":"indian","times":0,"price":25},{name:"biryani99","material":"indian","times":0,"price":25},
    //       {name:"biryani44","material":"indian","times":0,"price":25},{name:"biryani100","material":"indian","times":0,"price":25}
    //       ,{name:"biryani55","material":"indian","times":0,"price":25},{name:"biryani101","material":"indian","times":0,"price":25}
    //     ,{name:"biryani","material":"indian","times":0,"price":25},{name:"biryani102","material":"indian","times":0,"price":25}],
    // centre:[{name:"biryani","material":"indian","times":0,"price":25},{name:"biryanind","material":"indian","times":0,"price":25}
    //       ,{name:"biryanib","material":"indian","times":0,"price":25},{name:"biryanig","material":"indian","times":0,"price":25}
    //     ,{name:"biryanii","material":"indian","times":0,"price":25},{name:"biryanip","material":"indian","times":0,"price":25},
    //     {name:"biryanir","material":"indian","times":0,"price":25},{name:"biryanih","material":"indian","times":0,"price":25}
    //     ,{name:"biryaniy","material":"indian","times":0,"price":25},{name:"biryanigh","material":"indian","times":0,"price":25}
    //   ,{name:"biryanin","material":"indian","times":0,"price":25},{name:"biryanim","material":"indian","times":0,"price":25}]
    
     left:[],
     right:[],
     center:[]
    ,

       showArray:[],
       totalPrice:0
}

 let combinedArray = [];

const reduer = (state = initialState, action) =>
{ 
    let  maintain;
    console.log("LLLLLLLLLLLLLLLLLLLLLL");
    console.log(action.index);
    

    let leftArray  = [];
    
     // eslint-disable-next-line default-case
     switch (action.type) 
     {
         case ("ADD_NUMBER") :{

            let  maintain=0;
            let k="";
            if(action.index===2)
            { 
              maintain = state.right || state.p.right 
              k="right";
            }
            if(action.index===3)
            {
             maintain = state.center || state.p.centre;
             k="center";
            }
           
            if(action.index===1)
            {
              maintain = state.left || state.p.left;
              console.log("Kia");
              console.log(state);
              k="left";
            }
              let idNo=0;
              console.log("PARAPARAPARA")
              console.log(maintain);
              console.log(action.name.name);
               let up= maintain.filter((item,id) => {
                       
              if(item.name === action.name.name)
                {   
                 idNo=id
                }
                    return false;
               } )

               console.log("PARAPARAPARA")
               console.log(idNo);   
                 console.log(maintain);
                 console.log({...maintain[idNo], times:maintain[idNo].times+1});
                 console.log(maintain)
               console.log("BBBBBBBBBBBBBBBBBBB");
               console.log(k)
               console.log(state)
               let  p = {...state};
               
               let lef = [...p[k]];
               let leff = {...lef[idNo]};
               leff.times = leff.times+1;    
               lef[idNo] = leff;
               p[k] = lef;
                state = p;
               console.log("Hello");
               console.log(k)
               console.log(leff);
               console.log(lef);
               console.log(p);
               console.log(state);
              

        let  pk=combinedArray.concat(state.left.concat(state.right.concat(state.center)));
              console.log("HHHHHHHHHHHHHHHHHHH");
              console.log(pk)
        pk.map( obj =>{
                if(obj.times>0)
                {    
                    
                    leftArray.push(obj);
                }
          })
           state.totalPrice =0 ;
          leftArray.map(el => {
              let g = el.times * el.price;
              state.totalPrice = state.totalPrice + g;
          })

             
             state.showArray = [...leftArray]
             console.log(state.showArray);
            
               return p 
            }

        case ("REMOVE_NUMBER") :{

                let  maintain2=0;
                let G="";
                if(action.index===2)
                { 
                  maintain2 = state.right || state.p.right 
                  G="right";
                }
                if(action.index===3)
               {
                maintain2 = state.center || state.p.centre;
                 G="center";
                }
               
                if(action.index===1)
                {
                  maintain2 = state.left || state.p.left;
                  console.log("Kia");
                  console.log(state);
                  G="left";
                }
                  let idNo2=0;
                  console.log("PARAPARAPARA")
                  console.log(maintain2);
                  console.log(action.name.name);
                let up= maintain2.filter((item,id) => {
                           
                  if(item.name === action.name.name)
                    {   
                     idNo2=id
                    }
                        return false;
                   } )
    
                   console.log("PARAPARAPARA")
                   console.log(idNo2);   
                     console.log(maintain2);
                     console.log({...maintain2[idNo2], times:maintain2[idNo2].times+1});
                     console.log(maintain2)
                   console.log("BBBBBBBBBBBBBBBBBBB");
    
                   let  p = {...state};
                   
                   let lef = [...p[G]];
                   let leff = {...lef[idNo2]};
                   leff.times = leff.times-1; 
                   if(leff.times<0)
                   {
                       leff.times = 0;
                   }   
                   lef[idNo2] = leff;
                   p[G] = lef;
                    state = p;
                   console.log("Hello");
                   console.log(G)
                   console.log(leff);
                   console.log(lef);
                   console.log(p);
                   console.log(state);

                   let  pk=combinedArray.concat(state.left.concat(state.right.concat(state.center)));              
        pk.map( obj =>{
                if(obj.times>0)
                {
                   leftArray.push(obj);
                   console.log("Fucke")
                   console.log(obj)
                 }
             
              
          }) 
          state.totalPrice =0 ;
          leftArray.map(el => {
              let g = el.times * el.price;
              state.totalPrice = state.totalPrice - g ;
          })

             console.log(state.right);
             console.log(state.left)   
             console.log(leftArray);
             state.showArray = [...leftArray];
              console.log(state.showArray);

                 
                   return p 
    
        }

        case("clear"):{
          return{
            ...state,
            showArray:[],
            totalPrice:0
          }
        }

        
        case("SET_INGREDIENTSLeft"):{
              console.log("GOT LEFT")
              console.log(action.left);
              
              
              return {
                  ...state,
                  left:action.left,
                 
              };

        }

        case("SET_INGREDIENTSRight"):{
            console.log("GOT Right")
            console.log(action.right);
            
            
            return {
                ...state,
                right:action.right
            };

      }
      case("SET_INGREDIENTSCentre"):{
        console.log("GOT Centre")
        console.log(action.centre);
        console.log(action)
        
        
        return {
            ...state,
        center:action.centre,
            
        };

          }
        }

               
        console.log(maintain)
             return state
         
     }

 
        


export default reduer;