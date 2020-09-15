import React from 'react';
import classes from './Persona.css';

const personalInput = (props) =>
{
    console.log("Received Props");
    console.log(props.valid)
      
   let inputElement = null;
   let NewPersona = [];
      NewPersona.push(classes.Persona);
      NewPersona.push(classes.Label)

     switch(props.elementType)
     {
          case('input') :
              inputElement =<input className={classes.Persona} onChange={props.changed}   {...props.elementConfig}  value={props.value}></input>
              break;

          case('TextArea') :
              inputElement =<textarea  autoComplete="off"  className={classes.Personal} onChange={props.changed}  rows="5" cols="3" maxlength="100" {...props.elementConfig}value={props.value}></textarea>
              break;

          default:
            inputElement =<input className={classes.Persona} onChange={props.changed}   {...props.elementConfig} value={props.value}></input>
            break;
     }
         let newClass = [];
         if(props.topLabel || props.value.trim().length !==0 )
           { 
            newClass.push(classes.Yes)
           }

         if(!props.topLabel)
          { 
           newClass.push(classes.No)
          }
              
      return ( <div>
                  <p className={newClass.join(' ')} >{     props.label}</p>
               <div>{inputElement}</div> 
             
               </div>);

}

export default personalInput;