import React, { Component } from 'react';
import classes from './MenuDisplay.css';

class Menudisplay extends Component{  
    TotalPrice = 0;
    price =0 ;
    render() 
    {  

        const style = {
            disabled:'disabled'
              }


        console.log("props are")

        console.log(this.props.displayDetails)


        // this.props.displayDetails.map(el => this.TotalPrice=this.TotalPrice+el.price);
        let show;
    //    if(this.props.displayDetails===undefined)
    //    {
    //     return"Hello"
    //    }

     show =this.props.displayDetails.map(I => {
           let  k = I.times * I.price ;
           console.log(k);
           this.price = this.price +k;
           console.log(this.price)

        return(
               <div className={classes.ShowDisp} key={Math.random()}>
                    <div  className={classes.item}> {I.times} x {I.price} {I.name} </div> 
                    <div className={classes.Arrow}>-</div>
                    <div className={classes.prices}>{ I.times*I.price}</div>
               </div>
             )
       })

        if(this.props.displayDetails === undefined ||this.props.displayDetails.length<1 ) {show = <h2 className={classes.ShowDisp}>Please Add Food Itemds</h2>}

        return(
      

            <div className={classes.MenuDisplay}>
                <div className={classes.InsideMenuDisplay}>
                    <div className={classes.Saved}>
                      <div className={classes.Fontss}> {show}</div>      
                </div>
               </div>

               
                
                <div className={classes.PriceShow}> 
                <div className={classes.F}>Total</div>
                 <div className={classes.Tot}>{ Math.abs(this.props.Total)}</div>  
                {
                   this.props.displayDetails.length>0 ?  <div className={classes.Order} onClick={()=>this.props.ordered(this.props.displayDetails)}>OrderNow</div>
                                                      :   null
                }
                </div>
               
            </div>
       
        )

    }
   
    

}

export default Menudisplay;