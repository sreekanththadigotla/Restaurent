import React, { Component } from 'react';

import classes from './Menu.css'
import axios from 'axios';

import Menudisplay from '../../Components/MenuDisplay/MenuDisplay';
import Menuitems from '../../Components/MenuItems/MenuItems';
import { connect } from 'react-redux';
import { AddIngredients, RemoveIngredients,InitIngredients, InitIngredients1, InitIngredients2, InitIngredients3 } from '../../Components/actions/MenuIngredients';

 

class menuuu extends Component{

    
   state={
      //   left:[{name:"biryani1","material":"indian","times":0,"price":25},{name:"biryani7","material":"indian","times":0,"price":25}
      //         ,{name:"biryani2","material":"indian","times":0,"price":25},{name:"biryani8","material":"indian","times":0,"price":25}
      //       ,{name:"biryani3","material":"indian","times":0,"price":25},{name:"biryani9","material":"indian","times":0,"price":25},
      //       {name:"biryani4","material":"indian","times":0,"price":25},{name:"biryani10","material":"indian","times":0,"price":25}
      //       ,{name:"biryani5","material":"indian","times":0,"price":25},{name:"biryani11","material":"indian","times":0,"price":25}
      //     ,{name:"biryani6","material":"indian","times":0,"price":25},{name:"biryani12","material":"indian","times":0,"price":25}],
      //       right:[{name:"biryani11","material":"indian","times":0,"price":25},{name:"biryani77","material":"indian","times":0,"price":25}
      //       ,{name:"biryani22","material":"indian","times":0,"price":25},{name:"biryani88","material":"indian","times":0,"price":25}
      //     ,{name:"biryani33","material":"indian","times":0,"price":25},{name:"biryani99","material":"indian","times":0,"price":25},
      //     {name:"biryani44","material":"indian","times":0,"price":25},{name:"biryani100","material":"indian","times":0,"price":25}
      //     ,{name:"biryani55","material":"indian","times":0,"price":25},{name:"biryani101","material":"indian","times":0,"price":25}
      //   ,{name:"biryani","material":"indian","times":0,"price":25},{name:"biryani102","material":"indian","times":0,"price":25}],
      //     centre:[{name:"biryani","material":"indian","times":0,"price":25},{name:"biryani","material":"indian","times":0,"price":25}
      //     ,{name:"biryanib","material":"indian","times":0,"price":25},{name:"biryanig","material":"indian","times":0,"price":25}
      //   ,{name:"biryanii","material":"indian","times":0,"price":25},{name:"biryanip","material":"indian","times":0,"price":25},
      //   {name:"biryanir","material":"indian","times":0,"price":25},{name:"biryanih","material":"indian","times":0,"price":25}
      //   ,{name:"biryaniy","material":"indian","times":0,"price":25},{name:"biryanigh","material":"indian","times":0,"price":25}
      // ,{name:"biryanin","material":"indian","times":0,"price":25},{name:"biryanim","material":"indian","times":0,"price":25}],
        showArray : []
      }


      componentDidMount(){

      this.props.InitIngredients1();
      this.props.InitIngredients2();
      this.props.InitIngredients3();

      }

      sendOrder=(array,token , userId) =>
      {
          console.log("Sending");
          console.log(token);
          console.log (array);

         
             let Order = array.map(el => {
           
                       return {
                                 Name: el.name,
                                 Price: el.price,
                                 ItemNo : el.times,
                                 material: el.material,
                                 TotalPrice: +el.price * +el.times,
                                 userId:userId
                              }
            })

          axios.post('https://resss-b9167.firebaseio.com/orders.json?auth='+token, Order)
          .then(response => {
              console.log("saved Data");
              console.log(response);
              this.props.clearArray();
          })
      }


    
 
   render() {
     console.log(")))))))))))))))))))")
     console.log(this.Totals);
     console.log(this.props.lefts)
      
      
    return(
        <div className={classes.Menu}>
            <Menudisplay 
                 displayDetails={this.props.showArray} 
                 Total={this.props.Total} 
                 ordered={(array)=>this.sendOrder(array,this.props.IdToken, this.props.userId)}
          /> 
          <Menuitems
                 centre={this.props.centres} 
                 left={this.props.lefts} 
                 right={this.props.rights} 
                 leftClicked={(name,i)=>this.props.leftClickedd(name,i)}
                 leftClickedRemove={(name,i) => this.props.leftClickeddRemove(name,i)}
                
          //  Adds={this.Add}  
            />   
      </div>
        )
 }
}

const mapStateToProps = (state) =>
{
  console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSS")
  console.log(state);
  // console.log(state.Menureducer.props);
  return {
        rights : state.Menureducer.right  ,
        lefts  : state.Menureducer.left  ,
        centres : state.Menureducer.center,
        showArray:state.Menureducer.showArray,
        Total :state.Menureducer.totalPrice,
        IdToken:state.authReducer.token,
        userId:state.authReducer.userId
        }
}

const mapDispatchToProps = (dispatch) => 
{
  return {
      leftClickedd       : (name,i) => {dispatch(AddIngredients(name,i))},
      leftClickeddRemove : (name,i) => {dispatch(RemoveIngredients(name,i))},
      InitIngredients1 : () => {dispatch(InitIngredients1())},
      InitIngredients2 : () => {dispatch(InitIngredients2())} ,
      InitIngredients3 : () => {dispatch(InitIngredients3())},
      clearArray : () => {dispatch({type:"clear"})}
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(menuuu);