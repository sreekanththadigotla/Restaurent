import React, { Component } from 'react';
import classes from './App.css';
import Layout from './Components/Layout/Layout';
import Menuuu from './Container/Menu/Menu';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ContactData from './Container/ContactData/ContactData';
import HeaderMaintain from './Container/HomePageMaintain/HeaderMaintain';
import Login from './Components/Login/Login';
import Order from './Components/Orders/Orders';
import { connect } from 'react-redux';
import { checkValidity } from './Components/Login/Auth';
 
class App extends Component {
  

  componentDidMount() 
  { 
    this.props.Check();
  }
  render(){

    return (
      <BrowserRouter>
        <Layout  className={classes.App}>
         <Switch>
         <Route path="/menu" component={Menuuu}/>
         <Route path="/home" component={HeaderMaintain}/>
         <Route path="/contact" component = {ContactData} />
         <Route path="/login" exact component={Login}/>
         <Route path="/order" exact component={Order}/>
         <Redirect from="/" to="/Home"/>
         </Switch>
        
         
        </Layout>
      </BrowserRouter>
   
    );

  }

   
   }


  

  const mapDisptchToProps = (dispatch) =>
  {
    return {
      Check: () => dispatch (checkValidity())
    }
  }


export default  connect(null, mapDisptchToProps) (App);
