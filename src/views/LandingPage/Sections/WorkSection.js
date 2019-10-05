import React, { Component } from "react";
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import 'react-notifications/lib/notifications.css';
import './style/style.css'

class WorkSection extends Component {
  state = {
    name: "",
    email: "",
    clientId: 21,
    clientSecret: "2pCsYG5vVbK7a4MAKnP6nfbNpXHpJxJXGZaNDSvK",
    errors: {},
}

  handlevalidation() {
    let errors = {};
    let formIsValid = true;

      if (!this.state.name) {
        formIsValid = false;
        errors["Name"] = "*Name can't be empty";
      }
      //eslint-disable-next-line 
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!this.state.email) {
        formIsValid = false;
        errors["Email"] = "*Email can't be empty";
      }
        else if(!reg.test(this.state.email)){
         formIsValid = false;
         errors["Email"] = "*Enter valid email Id";
         }
    this.setState({ errors: errors });

    return formIsValid;
  
}

handleName = (e) => {
  this.setState({name: e.target.value})
  console.log("hello")
}


handleEmail = (e) => {
  this.setState({email: e.target.value})
}

subscribe = () => {
  
  if (this.handlevalidation()) {
    let data = {
        name: this.state.name,
        email: this.state.email,
        client_id: this.state.clientId,
        client_secret: this.state.clientSecret
    }
    Axios.post('http://demo-api.gitodemos.com/v1/subscribe',data)
    .then(response => {
      NotificationManager.success(response.data.success.message);
      console.log(response.data.success.message)
    })
    .catch(error => {
        console.log(error);
        NotificationManager.error("error while fetching api");
    })
  }
}
  render(){
  return (
    <div className="makeStyles-section-333">
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className="makeStyles-title-334">Subscribe to our site</h2>
          <h4 className="makeStyles-description-335">
            Subscribe for email choc-full of new arrivals and special offers.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
              <TextField id="name" label="Name" onChange={e => {
                    this.handleName(e);
                  }} fullWidth />
                  <div className="error" style={{color:"red",
                  fontSize:"14px"}}>{this.state.errors["Name"]}</div>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
              <TextField id="email" label="Email" onChange={e => {
                    this.handleEmail(e);
                  }}  fullWidth/>
                   <div className="error" style={{color:"red",
                  fontSize:"14px"}}>{this.state.errors["Email"]}</div>
              </GridItem>
              
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                <br/>
                   <Button color="primary" onClick={e => this.subscribe()}>Subscribe</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>

<NotificationContainer/>
    </div>
  );
}
}
export default WorkSection;