import React, { useState, useContext, createRef, useEffect } from 'react';
import { Header, Checkbox, Card, Container, Segment, Sticky, Grid, Input, GridRow, Divider, GridColumn } from 'semantic-ui-react';
import { Button, Form, Icon, Image, List, Label, Transition, Modal, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import { dbStudents, dbHSCounselors } from '../../firebase/firebase';
import {InfoContext} from '../../App'
import storage from '../../firebase/firebase'

const SignUpHSCounselor = () => {
  const {user, setUser, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);
  const contextRef = createRef();
  const [firstName, setFirstName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl]=useState("");
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [highSchool, setHighSchool]=useState(null);
  const[state, setState]=useState("");
  const Frequency_Array = [
        {
          key: 0,
          text: "Illinois",
          value: "Illinois"
        },
        {
          key: 1,
          text: "Indiana",
          value: "Indiana"
        },
        {
          key: 2,
          text: "Iowa",
          value: "Iowa"
        },
        {
          key: 3,
          text: "Kansas",
          value: "Kansas"
          
        },
        {
          key:4,
          text: "Michigan",
          value: "Michigan"
        },
        {
                key:5,
                text:"Minnesota",
                value:"Minnesota"
        },
        {
                key: 6,
                text:"Missouri",
                value:"Missouri"
        },
        {
                key: 7,
                text: "Nebraska",
                value:"Nebraska"
        },
        {
                key: 8,
                text: "North Dakota",
                value: "North Dakota"
        },
        {
                key: 9,
                text:"Ohio",
                value:"Ohio"
        },
        {
                key: 10,
                value:"South Dakota",
                text:"South Dakota"
        },
        {
                key: 11,
                value:"Wisconsin",
                text:"Wisconsin"
        }
      ]


  function WriteFirebase() {
    if(isValid()){
        const data={"firstName":firstName,
        "lastName": lastName,
        'username': username,
        'password': password,
        "state": state,
        "phone": phone,
        "pioneerform":false,
          "url":url
        }
        const k = dbHSCounselors.update({
                [username]:data
        });
      
      const uploadTask = storage.ref(`hscounselors/${username}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("students")
          .child(username)
          .getDownloadURL()
          .then(url => {
                dbHSCounselors.child(username).update({
                   "url":url
           });
          });
      }
    );
   
      setUser(data.username);

    console.log("Wrote Name and phone onto firebase!");
      }
    else{
      alert("Please enter a number for the phone number.")
    }

  }
   function isValid(){
     var x=(!isNaN(Number(phone))) && (typeof(firstName) =="string" && typeof(lastName)=="string" && !students[username])
     console.log(x)
     console.log(typeof(firstName)=="string")
     console.log(typeof(lastName)=="string")
     console.log(!isNaN(Number(phone)))
     return (x)
    
    }
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef} >
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Grid padded textAlign="center">
          <Grid.Row>
            <Form size="large" >
              <Form.Group widths='equal'>
                <Form.Input
                  required={true}
                  onChange={(e) => { setFirstName(e.target.value) }}
                  label='First Name:'
                />
              </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row>
            <Form size="large">
              <Form.Group widths='equal'>
                <Form.Input
                  required={true}
                  onChange={(e) => { setLastName(e.target.value) }}
                  label='Last Name:'
                />
              </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row>
            <Form size="large">
              <Form.Group widths='equal'>
                <Form.Input
                  required={true}
                  onChange={(e) => { setPhone(e.target.value) }}
                  label='Phone Number:'
                />
              </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row>
            <Form size="large">
              <Form.Group widths='equal'>
                <Form.Input
                  required={true}
                  onChange={(e) => { setUsername(e.target.value) }}
                  label='Username:'
                />
              </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row>
            <Form size="large">
              <Form.Group widths='equal'>
                <Form.Input
                  onChange={(e) => { 
                        console.log(e.target.files[0])
                        setImage(e.target.files[0]) }}
                  label='Profile Picture:'
                  type="file"
                />
              </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row>
            <Form size="large">
              <Form.Group widths='equal'>
                <Form.Input
                  required={true}
                  onChange={(e) => { setPassword(e.target.value) }}
                  label='Password:'
                />
              </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Home State:" />
          </Grid.Row>
          <Grid.Row style={{marginTop:"-23px"}}>
            <Form size="large">
              <Form.Group widths='equal'>
                <Dropdown pointing="bottom"
                                options={Frequency_Array}
                                selection
                                scrolling
                                placeholder='Select'
                                onChange={(e, { value }) => setState(value)}
                                upward={false}>
            </Dropdown>
            </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Button circular
                compact
                fluid
                as={ isValid() ? Link : Button}
                to={isValid() ? `/hscounselor` : '/'}
                color='blue'
                icon
                onClick={() => WriteFirebase()}
                >
                <Button.Content>
                  <Icon name="long arrow alternate right" size="large"></Icon>
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header as="h3">
               We do not share your data with any outside party.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Sticky>
    </div>

  );

  
}

export default SignUpHSCounselor;