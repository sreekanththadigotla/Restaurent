import React, { Component } from 'react';
import classes from './Layout.css';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../Login/Auth';

class Layout extends Component {
    
    state = {
        tokenCheck:this.props.token
    }

    homeHandler =() =>
    {
        console.log("Props Ared");
     console.log(this.props);
     

    }
    

    render()

    {
        return(
          
    <div className={classes.T}>
    <div className={classes.Toolbar}>
     <div  className={classes.Name}>
                          <span className={classes.S}>S</span>
                           <span className={classes.P}>p</span>
                           <span className={classes.I}>i</span>
                           <span className={classes.C}>c</span>
                           <span className={classes.Y}>y</span>
                           <span className={classes.B}>B</span>
                           <span className={classes.I}>i</span>
                           <span className={classes.T}>t</span>
                           <span className={classes.E}>e</span>
                           <span className={classes.SS}>s</span>
     </div>
     <div className={classes.Portion}>
         <ul>
          <li> <NavLink to="/home" activeClassName={classes.mys}>Home</NavLink></li>
          <li> <NavLink to="/menu" activeClassName={classes.mys}>Menu</NavLink></li>
          <li> <NavLink to="/order" activeClassName={classes.mys}>Orders</NavLink></li>
          <li> <NavLink to="/contact" activeClassName={classes.mys}>Offers</NavLink></li>

          {
              this.props.token ?  <li> <NavLink to="/Login" activeClassName={classes.mys} onClick={this.props.logout}>Logout</NavLink> </li>:
                                   <li> <NavLink to="/Login" activeClassName={classes.mys}> Login</NavLink> </li>
          }
          
          

         </ul>
     </div>
       
    </div>
                   {this.props.children}
    </div>
   

        )
    }

}

const mapStateToProps = (state) =>
{  console.log("HHADFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
   console.log(state);
    return{
        token:state.authReducer.token !==null
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return{
          logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(Layout));