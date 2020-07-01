import React, { useState, useContext, createRef, useEffect } from 'react';
import { Header, Checkbox, Card, Container, Segment, Sticky, Grid, Input, GridRow, Divider, GridColumn } from 'semantic-ui-react';
import { Button, Form, Icon, Image, List, Label, Transition, Modal, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import { dbStudents } from '../../firebase/firebase';
import {InfoContext} from '../../App'
import storage from '../../firebase/firebase'

const PioneerForm = () => {
  const {user, setUser, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);
  const contextRef = createRef();
  const [targetmajors, setTargetMajors] = useState([]);
  const [targettuition, setTargetTuition] = useState(null);
  const [targetlocations, setTargetLocations] = useState([]);
  const [content, setContent]=useState([]);
  const[typeSchool, setTypeSchool]=useState("");
  const [aid, setAid] = useState(null);
  const Tuitionrange = [
        {
          key: 0,
          text: "0-10,000",
          value: "0-10,000"
        },
        {
          key: 1,
          text: "10,000-15,000",
          value: "10,000-15,000"
        },
        {
          key: 2,
          text: "15,000-20,000",
          value: "15,000-20,000"
        },
        {
          key: 3,
          text: "20,000-25,000",
          value: "20,000-25,000"
          
        },
        {
          key:4,
          text: "25,000-30,000",
          value: "25,000-30,000"
        },
        {
                key:5,
                text:"30,000-35,000",
                value:"30,000-35,000"
        },
        {
                key: 6,
                text:"35,000-40,000",
                value:"35,000-40,000"
        },
        {
                key: 7,
                text: "40,000-45,000",
                value:"40,000-45,000"
        },
        {
                key: 8,
                text: "45,000-50,000",
                value: "45,000-50,000"
        },
        {
                key: 9,
                text:"50,000-55,000",
                value:"50,000-55,000"
        },
        {
                key: 10,
                value:"55,000-60,000",
                text:"55,000-60,000"
        },
        {
                key: 11,
                value:"60,000+",
                text:"60,000+"
        }
      ]
const Locations = [
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
const Majors = [
        {
          key: 0,
          text: "Business",
          value: "Business"
        },
        {
          key: 1,
          text: "Nursing",
          value: "Nursing"
        },
        {
          key: 2,
          text: "Pyschology",
          value: "Pyschology"
        },
        {
          key: 3,
          text: "Biology",
          value: "Biology"
          
        },
        {
          key:4,
          text: "Engineering",
          value: "Engineering"
        },
        {
                key:5,
                text:"Education",
                value:"Education"
        },
        {
                key: 6,
                text:"Communications",
                value:"Communications"
        },
        {
                key: 7,
                text: "Finance and Accounting",
                value:"Finance and Accounting"
        },
        {
                key: 8,
                text: "Criminal Justice",
                value: "Criminal Justice"
        },
        {
                key: 9,
                text:"Anthropology",
                value:"Anthropology"
        },
        {
                key: 10,
                value:"Sociology",
                text:"Sociology"
        },
        {
                key: 11,
                value:"Computer Science",
                text:"Computer Science"
        },
        {
                key: 12,
                value:"Computer Science",
                text:"Computer Science"
        },
        {
                key: 13,
                value:"English",
                text:"English"
        },
        {
                key: 14,
                value:"Economics",
                text:"Economics"
        },
        {
                key: 15,
                value:"Political Science",
                text:"Political Science"
        },
        {
                key: 16,
                value:"History",
                text:"History"
        },
        {
                key: 17,
                value:"Kinesiology and Physical Therapy",
                text:"Kinesiology and Physical Therapy"
        },
        {
                key: 18,
                value:"Health Professions",
                text:"Health Professions"
        },
        {
                key: 19,
                value:"Environmental Science",
                text:"Environmental Science"
        },
        {
                key: 20,
                value:"Math",
                text:"Math"
        },
        {
                key: 21,
                value:"Foreign languages",
                text:"Foreign languages"
        },
        {
                key: 22,
                value:"Design",
                text:"Design"
        },
        {
                key: 23,
                value:"International Relations",
                text:"International Relations"
        },
        {
                key:24,
                value:"Food and Nutrition",
                text:"Food and Nutrition"
        },
        {
                key:25,
                value:"Religious Studies",
                text:"Religious Studies"
        },
        {
                key:26,
                value:"Music",
                text:"Music"
        },
        {
                key:27,
                value:"Physics",
                text:"Physics"
        },
        {
                key:28,
                value:"Legal Studies",
                text:"Legal Studies"
        },
        {
                key:29,
                value:"Dental Studies",
                text:"Dental Studies"
        },
        {
                key:30,
                value:"Architecture",
                text:"Architecture"
        },
      ]
      const types=[
              {
                      key:0,
                      text: "Community College",
                      value: "Community College"
              },
              {
                key:1,
                text: "4-Year College/University",
                value: "4-Year College/University"
                },
                {
                        key:2,
                        text: "Apprenticeship Program",
                        value: "Apprenticeship Program"
                },
                {
                        key:3,
                        text: "Trade School",
                        value: "Trade School"
                }
      ]


  function WriteFirebase() {
    if(isValid() && user){
        const data={
        "targetmajors":targetmajors,
        "targetlocations": targetlocations,
        "pioneerform":true,
        "aid":aid, 

        }
                dbStudents.child(user).child("targetmajors").set( targetmajors);
                dbStudents.child(user).child("targetlocations").set( targetlocations);
                dbStudents.child(user).child("targettuition").set( targettuition);
                dbStudents.child(user).child("pioneerform").set(true);




        ;

    console.log("Wrote Name and phone onto firebase!");
      }
    else{
      alert("Please select at least one option from the lists below.")
    }

  }
   function isValid(){
     var x=(targetlocations.length>0&&targetmajors.length>0 && targettuition)
     return (x)
    
    }
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef} >
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Grid padded textAlign="center">
        <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Prospective Majors:" />
          </Grid.Row>
          <Grid.Row style={{marginTop:"-23px"}}>
            <Form size="large">
              <Form.Group widths='equal'>
                <Dropdown pointing="bottom"
                                options={Majors}
                                selection
                                scrolling
                                multiple
                                placeholder='Select'
                                onChange={(e, { value }) => 
                                               setTargetMajors(value)}
                                upward={false}>
            </Dropdown>
            </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Upper Limit on Tuition Range:" />
          </Grid.Row>
          <Grid.Row style={{marginTop:"-23px"}}>
            <Form size="large">
              <Form.Group widths='equal'>
                <Dropdown pointing="bottom"
                                options={Tuitionrange}
                                selection
                                scrolling
                                placeholder='Select Upper Limit for Tuition'
                                onChange={(e, { value }) => setTargetTuition(value)}
                                upward={false}>
            </Dropdown>
            </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row style={{marginTop:"-23px"}}>
            <Form size="large">
              
        <Form.Group inline required={true}>
          <label>Do you prefer institutions or schools that offer need-based financial aid?</label>
          <Form.Radio
            label='Yes'
            value='Yes'
            checked={aid === true}
            onChange={()=>setAid(true)}
            
          />
          <Form.Radio
            label='No'
            value='No'
            checked={aid === false}
            onChange={()=>setAid(false)}
          />
                
            </Form.Group>
            </Form>
          </Grid.Row>
          
          <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Preferred Locations for Colleges:" />
          </Grid.Row>
          <Grid.Row style={{marginTop:"-23px"}}>
            <Form size="large">
              <Form.Group widths='equal'>
                <Dropdown pointing="bottom"
                                options={Locations}
                                selection
                                scrolling
                                multiple
                                placeholder='Select'
                                onChange={(e, { value }) => 
                                               setTargetLocations(value)}
                                upward={false}>
            </Dropdown>
            </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row style={{marginTop:"-23px"}}>
            <Form size="large">
              <Form.Group widths='equal'>
                <Dropdown pointing="bottom"
                                options={types}
                                selection
                                scrolling
                                multiple
                                placeholder='Select'
                                onChange={(e, { value }) => 
                                               setTypeSchool(value)}
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
                to={isValid() ? `/student` : '/'}
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
               This information will help us find appropriate colleges for you.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Sticky>
    </div>

  );

  
}

export default PioneerForm;