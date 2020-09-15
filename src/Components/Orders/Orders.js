import React, { Component } from 'react';
import classes from './Orders.css'
import { connect } from 'react-redux';
import { FirstFetch } from './Action';
 
class Order extends Component{

componentDidMount()
{
    console.log()
    this.props.StartFetchData(this.props.IdToken,this.props.userId);
    console.log("OOOOOOOOOOOOOOOOOOOOOO");
    console.log(this.props.IdToken);
    console.log(this.props.userId)
    
    // axios.get('https://resss-b9167.firebaseio.com/orders?auth=')
}

render(){
    
let m =   <div className={classes.NoOrder}>No Orders till NOW!</div>


     if(this.props.FetchedData)
     {
        m =   this.props.FetchedData.map(obj =>
        (
            <div className={classes.SmallCard}>
            <div className={classes.LeftSide}>
                 <div className={classes.Name}>Name:{obj.Name}</div>
                 <div className={classes.Price}>Price:{obj.Price}</div>
            </div>
            <div className={classes.RightSide}>
             <div className={classes.Name}>Items:{obj.ItemNo}</div>
             <div className={classes.Price}>TotalPrice:{obj.TotalPrice}</div>
            </div>
         </div>
      )
        )


}
         
    return(
       
         <div className={classes.MainCard}>
              <div className={classes.Ord} >Orders</div>
           <div className={classes.MainMiddleCard}>
              
              {m}
             </div> 
          </div>
    )
}

}


const mapStateToProps = state => 
{   console.log(state)
    return{
      IdToken:state.authReducer.token,
      FetchedData:state.order.totalData,
      userId:state.authReducer.userId
    }
}


const mapDispatchToProps = dispatch =>
{
    console.log("GGGGGGGGGGGGGGG");
     console.log(this.props);
    return {
       StartFetchData : (token,userId) => dispatch(FirstFetch(token, userId))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps) (Order);