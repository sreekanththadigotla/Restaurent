import React, { Component } from 'react';
import classes from './MenuItems.css';
import MenuItem from './MenuItem/MenuItem';
import Spinner from '../utility/Spinner/Spinner';


const menuitems = (props) => {

  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
 console.log(props);
//  console.log(props.centre.centre)
 console.log(props.left);
//  console.log(props.left.length)



 let p = (
         <div className={classes.Spinner}>
             <div className={classes.Spinnere}>
             <Spinner/>
             
             </div>
           
         </div>
 )
//  if(props.left===undefined)
//  {
//    return "fa"
//  }
 if (props.left !== undefined) {

  p = (props.left.map((el,i)=> {
        return  <MenuItem
        key={el.name+i}
        name={el.name} mat={el.material}
        price={el.price}
        time={el.times}
        removedTime={() =>props.leftClickedRemove(el,1)}
         addedTime={() => props.leftClicked(el,1)}
        
         />
    }))

 } 

 let pr = (
    <div className={classes.Spinner}>
        <div className={classes.Spinnere}>
        <Spinner/>
        
        </div>
      
    </div>
)

if (props.right !== undefined) {

  pr =  props.right.map((el,i)=> {
        return  <MenuItem
        key={el.name+i}
        name={el.name} mat={el.material}
        price={el.price}
        time={el.times}
        removedTime={() =>props.leftClickedRemove(el,2)}
        addedTime={() => props.leftClicked(el,2)}
        />
   })
  
   }

   
 let cr = (
  <div className={classes.Spinner}>
      <div className={classes.Spinnere}>
      {/* <Spinner/> */}
      {console.log("ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"),
        console.log(props)
      }
      <h2>Fa</h2>
      </div>
    
  </div>
)

if ( props.centre !== undefined ) {

cr =  props.centre.map((el,i)=> {
      return  <MenuItem
      key={el.name+i}
      name={el.name} mat={el.material}
      price={el.price}
      time={el.times}
      removedTime={() =>props.leftClickedRemove(el,3)}
      addedTime={() => props.leftClicked(el,3)}
      />
 })


 }




let crp ="Extra"

 if ( props.centre !== undefined ) {

  crp =  props.centre.map((el,i)=> {
        return  <MenuItem
        key={el.name+i}
        name={el.name} mat={el.material}
        price={el.price}
        time={el.times}
        removedTime={() =>props.leftClickedRemove(el,3)}
        addedTime={() => props.leftClicked(el,3)}
        />
   })
  
   }











    return <div>

    <div>


<div className={classes.MenuItems}>
         <p>VEG</p>
         <p>NONVEG</p>
         <p>DRINKS</p>
     </div>
     <div>



     </div>

   <div className={classes.Main}>
     <div className={classes.Box}>

<div className={classes.BoxMaintain}>

<div className={classes.FrontFace}>
<div className={classes.Front__Center}>
<div className={classes.FrontBorder}>
     {cr}
     </div>
   </div>
</div>

 


{/* Right    */}
     <div className={classes.Left}>
       <div className={classes.Front__Left}>
        <div className={classes.FrontBorder}>
       {  p  }
        </div>  

   </div>
    <div className={classes.Front__LeftCover}><div className={classes.Hov}>Menu</div></div>
     </div>

    {/* Left */}
       <div className={classes.Right}>
       <div className={classes.Front__Right}>
       <div className={classes.FrontBorder}>

             { pr }
        </div>
        </div>
    <div className={classes.Front__RightCover}><div className={classes.Hove}>

       <div className={classes.Ing}>Veg</div>  
       <div className={classes.Ing}>NoNVeg</div> 
       <div className={classes.Ing}>Drinks</div> </div></div>
     </div>
</div>
  </div>
    </div>
     </div>


 <div className={classes.Extra}>
   <div className={classes.ExtraMiddle}>
     <span className={classes.BOMB}></span>
     <div className={classes.FrontFace}>
<div className={classes.Front__Center}>
<div className={classes.FrontBorder}>
     {crp}
     {pr}
     {p}
     </div>
   </div>
</div>

     
   </div>
 </div>


     </div>
}
export default menuitems;