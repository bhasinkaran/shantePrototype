import React, { useState, useContext, createRef, useEffect } from 'react';
import { Header, Checkbox, Card, Container, Segment, Sticky, Grid, Input, GridRow, Divider, GridColumn } from 'semantic-ui-react';
import { Button, Form, Icon, Image, List, Label, Transition, Modal} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AppState } from '../../context';
import { Loader, Dimmer } from 'semantic-ui-react';
import { dbStudents } from '../../firebase/firebase';

const Name = () => {
  const contextRef = createRef();
  const [firstName, setFirstName] = useState(null);
  const [username, setUsername] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
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
      
    const k = dbTasks.push({
      "description": "Here's an example task created for you!",
      "duration": "2 minutes",
      "familyMemberID": user["uid"],
      "frequency": "Everyday",
      "importance": "High",
      "status": false,
      "taskName": "Example Task",
      "time": "10 AM",
      "caregiverId": "None"    });

    let push = k.path['pieces_'][1];
    const tasks = {
      [push]: push || null
    }
   
    const Datajson = {
      "secondaryFam": "null",
      "firstName": firstName,
      "rating": "5",
      "id": user["uid"],
      "lastName": lastName,
      "phone": phone,
      "type" : "primary",
      "tasks": tasks,
      "secondaryFam": "hi",
      "unassignedTasks": "null",
      "taskstofam": tasks,
      "sampletasks": tasks,
    }
    dbFamMember.update({
      [user["uid"]]: Datajson
    });
    console.log("Wrote Name and phone onto firebase!");
      }
    else{
      alert("Please enter a number for the phone number.")
    }

  }
   function isValid(){
     var x=(!isNaN(Number(phone))) && (typeof(firstName) =="string" && typeof(lastName)=="string")
     console.log(x)
     console.log(typeof(firstName)=="string")
     console.log(typeof(lastName)=="string")
     console.log(!isNaN(Number(phone)))
     return (x)
    
    }
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef} >
        <PageHeader />
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
                  onChange={(e) => { setPhone(e.target.value) }}
                  label='Phone Number:'
                />
              </Form.Group>
            </Form>
          </Grid.Row>

          
          <Grid.Row>
            <Grid.Column width={6}>
              <Button circular
                compact
                fluid
                as={ isValid() ? Link : Button}
                to={isValid() ? `/familymembers/register/caregiver/${user["uid"]}/0` : "/familymembers"}
                color='blue'
                icon
                onClick={() => WriteFirebase()}>
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

export default Name;