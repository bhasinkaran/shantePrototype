import React, { useState, useContext, createRef, useEffect } from 'react';
import { Header, Checkbox, Card, Container, Segment, Sticky, Grid, Input, GridRow, Divider, GridColumn } from 'semantic-ui-react';
import { Button, Form, Icon, Image, List, Label, Transition, Modal, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import { dbStudents } from '../../firebase/firebase';
import {InfoContext} from '../../App'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import storage from '../../firebase/firebase'

const SignUpStudent = () => {
        const {user, setUser, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);

  const contextRef = createRef();
  const [firstName, setFirstName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [image, setImage] = useState(null);
  const [url, setUrl]=useState("");
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const[state, setState]=useState("");
  const [highschoolbool, setHSBool]=useState(null);
  const [highschool, setHighSchool]=useState(null);
  const [date, setDate] = useState(new Date());
  const [line1, setLine1]=useState("");
  const [line2, setLine2]=useState("");
  const [zipcode, setZipcode]=useState("");
  const [city, setCity]=useState("");
  const[nameofFosterCare, setFosterAgency] = useState("");

  const[currentgrade, setCurrentGrade]=useState(null);
  const[gradyear, setGradYear]=useState(null);
  const[birthday, setBirthday]=useState(null);
  const[race,setRace]=useState(null);
  const[gender,setGender]=useState(null);
  const[fosterParent, setFosterParent] = useState(null);
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
  const grades = [
        {
          key: 0,
          text: "Freshman",
          value: "Freshman"
        },
        {
          key: 1,
          text: "Sophomore",
          value: "Sophomore"
        },
        {
          key: 2,
          text: "Junior",
          value: "Junior"
        },
        {
          key: 3,
          text: "Senior",
          value: "Senior"
        },
        {
          key: 4,
          text: "N.A.",
          value: "N.A."
        }];
  const races = [
          {
            key: 0,
            text: "Black or African American",
            value: "Black or African American"
          },
          {
            key: 1,
            text: "American Indian or Alaskan Native",
            value: "American Indian or Alaskan Native"
          },
          {
            key: 2,
            text: "Asian",
            value: "Asian"
          },
          {
            key: 3,
            text: "Hispanic or Latino",
            value: "Hispanic or Latino"
          },
          {
            key: 4,
            text: "Native Hawaiian or Other Pacific Islands",
            value: "Native Hawaiian or Other Pacific Islands"
          },
          {
            key: 5,
            text: "White",
            value: "White"
          },
          {
            key: 6,
            text: "Other",
            value: "Other"
          }
        ];
  const genders = [
    
      {
        key:0,
        text: "Male",
        value: "Male"
      },
      {
        key:1,
        text: "Female",
        value: "Female"
      },
      {
        key:2,
        text: "Prefer not to disclose",
        value: "Prefer not to disclose"
      }
  
  ]
  const gradyears =[
    {
      key:0,
      value: "2021",
      text:"2021"
    },
    {
      key:1,
      value: "2022",
      text:"2022"
    },
    {
      key:2,
      value: "2023",
      text:"2023"
    },
    {
      key:3,
      value: "2024",
      text:"2024"
    },
    {
      key:4,
      value: "2025",
      text:"2025"
    }
  ]

  const TestDate = () => {

    const onChange = (e, data) => {
      setDate(data.value)
      console.log(data.value);
      // console.log(currentDate)
      setBirthday(data.value);
      // console.log(data)
      // console.log()

    };
    return <SemanticDatepicker
      onChange={onChange}
      clearable={true}
      keepOpenOnClear={true}
      locale="en-US"
      value={date}
    />;
  };

  function WriteFirebase() {
    if(isValid()){
        const data={"firstName":firstName,
        "lastName": lastName,
        'username': username,
        'password': password,
        "state": state,
        "phone": phone,
        "birthday": birthday,
        "hsbool": highschoolbool,
        "highschool":highschool,
        "gradyear":gradyear,
        "grade":currentgrade,
        "fosterparent":fosterParent,
        "address":{
          "line1":line1,
          "line2": line2,
          "zipcode": zipcode,
          "city":city
        },
        "race":race,
        "gender":gender,
        "pioneerform":false,
          "url":url
        }
        const k = dbStudents.update({
                [username]:data
        });
      
      const uploadTask = storage.ref(`students/${username}`).put(image);
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
           dbStudents.child(username).update({
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
      {/* <Sticky context={contextRef} > */}
      <Container>

        <Divider hidden />
        {/* <Grid padded textAlign="center">
          <Grid.Row> */}
          <Form>

          <Form.Group widths='equal'>
          <Form.Input fluid label='First name'             required={true}
onChange={(e) => { setFirstName(e.target.value) }}  placeholder='First name' />
          <Form.Input fluid             required={true}
label='Last name' onChange={(e) => { setLastName(e.target.value) }} placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={genders}
            required={true}
            placeholder='Gender'
            onChange={(e, { value }) => {
              setGender(value)
              console.log(value);
            }}

          />
          <Form.Select pointing="bottom"
            options={races}
            selection
            required={true}
            scrolling
            label='Race'
            placeholder='Select'
            onChange={(e, { value }) => setRace(value)}
            upward={false}>
           </Form.Select>
        </Form.Group>

        <Form.Group widths='equal'>
                <Form.Input
                  required={true}
                  onChange={(e) => { setPhone(e.target.value) }}
                  label='Phone Number:'
                />
                <Form.Input
                  required={true}
                  onChange={(e) => { setUsername(e.target.value) }}
                  label='Username:'
                />
                 <Form.Input
                  required={true}
                  type='password'
                  onChange={(e) => { setPassword(e.target.value) }}
                  label='Password:'
                />
        </Form.Group>

        <Form.Group>
        
            <Form.Input
                  required={true}
                  onChange={(e) => { setLine2(e.target.value) }}
                  label='Address Line 1:'
                />
            <Form.Input
                  required={true}
                  onChange={(e) => { setLine1(e.target.value) }}
                  label='Address Line 2:'
                />
             <Form.Input
                  required={true}
                  onChange={(e) => { setCity(e.target.value) }}
                  label='City:'
                />
               <Form.Input
                  required={true}
                  onChange={(e) => { setZipcode(e.target.value) }}
                  label='Zipcode:'
                />
                <Form.Select pointing="bottom"
                                options={Frequency_Array}
                                selection
                                scrolling
                                required={true}
                                label='State'
                                placeholder='Select'
                                onChange={(e, { value }) => setState(value)}
                                upward={false}>
            </Form.Select>
           
            
        </Form.Group>
       

        <Form.Group inline required={true}>
          <label>Currently in high school</label>
          <Form.Radio
            label='Yes'
            value='Yes'
            checked={highschoolbool === true}
            onChange={()=>setHSBool(true)}
            
          />
          <Form.Radio
            label='No'
            value='No'
            checked={highschoolbool === false}
            onChange={()=>setHSBool(false)}
          />
          <label>Do you have a foster parent/case worker</label>
          <Form.Radio
            label='Yes'
            value='Yes'
            checked={fosterParent === true}
            onChange={()=>setFosterParent(true)}
          />
          <Form.Radio
            label='No'
            value='No'
            checked={fosterParent === false}
            onChange={()=>setFosterParent(false)}
          />
          </Form.Group>

          <Form.Group>
          <Form.Input
                  required={highschoolbool}
                  onChange={(e) => { setHighSchool(e.target.value) }}
                  label='High School:'
                />
                 <Form.Select pointing="bottom"
                                options={grades}
                                selection
                                scrolling
                                required={highschoolbool}
                                label='Current Grade'
                                placeholder='Select'
                                onChange={(e, { value }) => setCurrentGrade(value)}
                                upward={false}>
                </Form.Select>
                <Form.Select pointing="bottom"
                                options={gradyears}
                                selection
                                label='Expected Graduation Year'
                                scrolling
                                required={highschoolbool}
                                placeholder='Select'
                                onChange={(e, { value }) => setGradYear(value)}
                                upward={false}>
                </Form.Select>
                <Form.Input
                  required={fosterParent}
                  onChange={(e) => { setFosterAgency(e.target.value) }}
                  label='Name of Foster Care Agency:'
                />
               

          </Form.Group>
          <Header as="h5" >Birthday: </Header>
          <TestDate />
          <Form.Input fluid

label="Profile Picture"
onChange={(e) => { 
      console.log(e.target.files[0])
      setImage(e.target.files[0]) }}
label='Profile Picture:'
type="file"
/>
            <Divider hidden />
            <Button circular
                compact
                fluid
                as={ isValid() ? Link : Button}
                to={isValid() ? `/signup/student/pioneerform` : '/'}
                color='blue'
                icon
                onClick={() => WriteFirebase()}
                >
                <Button.Content>
                  <Icon name="long arrow alternate right" size="large"></Icon>
                </Button.Content>
              </Button>
        </Form>
{/*            

         

          </Grid.Row>
          <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Birthday:" />
          </Grid.Row>
          <Grid.Row style={{ marginTop: "-20px"}}>
            <TestDate />
            <Divider hidden />

          </Grid.Row>
          <Grid.Row>

          </Grid.Row>
        


            </Form.Group>
            </Form>
          </Grid.Row> 
          <Grid.Row>
          <Form>
        <Form.Field>
          <Header as ={'h4'}>Are You Currently In High School?</Header>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Yes'
            name='checkboxRadioGroup'
            value='Yes'
            checked={highschoolbool===true}
            onChange={(e,{value})=>setHSBool(true)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='No'
            name='checkboxRadioGroup'
            value='No'
            checked={highschoolbool === false}
            onChange={(e,{value})=>setHSBool(false)}
          />
        </Form.Field>
      </Form>
    </Grid.Row>
              {/* THIS COULD BE ONLY SHOWS IF THEY ARE HIGH SCHOOLERS 
          <Grid.Row>
            <Form size="large">
              <Form.Group widths='equal'>
                <Form.Input
                  required={true}
                  onChange={(e) => { setHighSchool(e.target.value) }}
                  label='High School:'
                />
              </Form.Group>
            </Form>
          </Grid.Row>
          <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Current Grade:" />
          </Grid.Row>

          <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Expected Graduation Year:" />
          </Grid.Row>
          <Grid.Row style={{marginTop:"-23px"}}>
            <Form size="large">
              <Form.Group widths='equal'>
                <Dropdown pointing="bottom"
                                options={gradyears}
                                selection
                                scrolling
                                placeholder='Select'
                                onChange={(e, { value }) => setGradYear(value)}
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
               We do not share your data with any outside party.
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      {/* </Sticky> */}

      </Container>
    </div>

  );

  
}

export default SignUpStudent;