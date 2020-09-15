import React from 'react';

import classes from './MenuItem.css';

const menuItem = (props) =>(

 <div className={classes.Item}>
    <div className={classes.HeadingIn}>
      <div className={classes.Heading}>{props.name}</div>
      <span className={classes.Material}>{props.mat}</span> 
    </div>
    <div className={classes.PriceIn}>
      <span className={classes.Price}>Rs : {props.price}</span>
      <span className={classes.Tick} >
      <span className={classes.Sub}  onClick={() => props.removedTime()}>-</span>
            <span className={classes.Num}>{props.time}</span>
      <span className={classes.Add}   onClick={() => props.addedTime()}>+</span>
      </span>
    </div>
</div>
);

export default menuItem;