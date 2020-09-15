import React, {Component} from 'react';
import classes from './Login.css';
 
import { connect } from 'react-redux';
import { auths } from './Auth';
import Spinner from '../utility/Spinner/Spinner';

class Login extends Component {
  
        
    state={
       Form:{
        Email:{
            elementType:'input',
            elementConfig:{
                type:"text",
                placeholder:"Email",
                isEmail:"Email",
                unique:"Email"
            },
            value:"",
            validation:{
                required:true,
            },
            valid:false,
            touched:false
           },

           password:{
            elementType:'input',
            elementConfig:{
                type:"text",
                placeholder:"Password",
                minLength:5,
                unique:"password"
            },  
            value:"",
            validation:{
                required:true,
            },
            valid:false,
            touched:false
           },
        
        },
        Login:true,
        disabled:true

    }


    ChangeHandler =() =>
   {
      console.log("ASSDFFFFFFFFFFFFFFFFFF")
      let  LoginM = this.state.Login;
     return(
          this.setState({Login:!LoginM})
           )
    }


    checkValidity = (eventValue,rule) => 
    { let see = true;
      console.log("--------------------");
      console.log(eventValue, rule.details); 
      console.log(eventValue.trim().length);
      console.log(rule.details.minLength);
      
       if(rule.details.minLength)
       {
          see = rule.details.minLength<=eventValue.trim().length && see;
          console.log("Min");
          console.log(see);
       }
       if(rule.details.maxLength)
       {
        see=rule.details.maxLength>=eventValue+"".trim().length && see;
        console.log("Max");
        console.log(see);
       }
       if (rule.details.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        see = pattern.test(eventValue) && see;
        console.log("EMAIL");
        console.log(see);
        }

      if (rule.details.isNumeric) {
         const pattern = /^\d+$/;
         see = pattern.test(eventValue) && see;
         console.log("ISNUMERIC");
         console.log(see);
      }

      return see;
    }

    ChangedHandler =(event,obj) =>{

        const updatedControls = {...this.state.Form,
                                  [obj.name]:{
                                         ...this.state.Form[obj.name],
                                         value:event.target.value,
                                         valid:this.checkValidity(event.target.value,obj),
                                         touched:event.target.value.trim().length>0 ? true:false
                                 }
                                }
                                console.log(updatedControls);
                                    
                                    console.log("----------------------------------------")
                                    console.log(this.checkValidity(event.target.value,obj))
                                    console.log(event.target.value);
        this.setState({Form:updatedControls},()=>console.log(this.state));

    
    }
    
  

    render() 
    {
       let newArray = [];
        for(let k in this.state.Form)
        {
           newArray.push
           (
                {
                   details:this.state.Form[k].elementConfig,
                   name:this.state.Form[k].elementConfig.unique
                }
            )
        }

        let Dis = [];
        Dis.push({className:classes.Log1})

        // for(let k in this.state.Form)
        // {
        //   if ( this.state.Form["Email"].valid && this.state.Form["assword"].valid )
        //   {
        //     Dis.push({className:classes.Log})
        //   }
        // }

        console.log(this.state.Form["Email"].valid);

 
      let pk = newArray.map ((obj,ind) => (<input className={ !this.state.Form[obj.name].valid && this.state.Form[obj.name].touched ? classes.PPP:classes.PP}
                                             key={obj.details.placeholder}
                                             type={obj.details.type} 
                                             placeholder={obj.details.placeholder}
                                             onChange={(event) => this.ChangedHandler(event,obj)} 
                                           ></input>));

      const  SubmitHandler =(event) =>
      {
          event.preventDefault();
        console.log(this.state.Form["password"].value, this.state.Form["password"].value);
       this.props.onAuth(this.state.Form["Email"].value, this.state.Form["password"].value, this.state.Login);
      }


      if(this.props.loading)
      {
        pk = <Spinner/>
      }

      let errorMessage = null;
      console.log("---------------------------------------------")
       console.log(this.props)
      if(this.props.error !==null)
      { console.log("Correct")
          errorMessage="Username or password is incorrect";
      }
                                        

        return(
            <form onSubmit={SubmitHandler}>
                <div className={classes.Ns}>
             <div className={classes.Login}> 
              <div className={classes.LoginMiddle}>
                  <span className={classes.Nextt}></span>
                  <div className={classes.Separate}>
                  <div className={classes.rr}>{errorMessage}</div> 
                  {pk}
                  </div>
              <button className={classes.Log} type="submit">{this.state.Login===true ? "Signup" : "Login"}</button>  
              <div className={classes.Log2} onClick={this.ChangeHandler}>Switch to {this.state.Login===true ? "Login" : "Signup"}</div>  
              </div>
             
            </div>

            </div>
            </form>
           
        )
    }

}


const mapStateToProps = (state) => 
{
    return {
         loading:state.authReducer.loading,
         error:state.authReducer.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
    onAuth: (Email, Password, Signup) => dispatch( auths(Email,Password,Signup))
   }
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);