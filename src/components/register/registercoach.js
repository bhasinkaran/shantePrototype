import React, { useState, useContext, createRef, useEffect } from 'react';
import { Header, Checkbox, Card, Container, Segment, Sticky, Grid, Input, GridRow, Divider, GridColumn } from 'semantic-ui-react';
import { Button, Form, Icon, Image, List, Label, Transition, Modal, Dropdown } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import { dbStudents, dbCoaches, dbColleges } from '../../firebase/firebase';
import { InfoContext } from '../../App'
import storage from '../../firebase/firebase'

const RegisterCoach = () => {
        const { user, setUser, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const contextRef = createRef();
        const [name, setName] = useState("");
        const [lastname, setLastname] = useState("");
        const [about, setAbout] = useState("");
        const [enjoys, setEnjoys] = useState([])
        const [currEnjoys, setCurrEnjoys] = useState("");
        const [favoritePart, setFav] = useState("");
        const [current, setCurrent] = useState("");
        const [strengths, setStrengths] = useState([]);
        const [currStrength, setCurrStrengths] = useState("");
        const [quote, setQuote] = useState("");
        const [pronouns, setPronouns] = useState("");
        const [location, setLocation] = useState("");
        const [redirect, setRedirect] = useState(false);
        const [bool2, setBool2] = useState(false);
        const [bool, setBool] = useState(false);
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [image, setImage] = useState(null);
        const [url, setUrl] = useState("");

        const Tuitionrange = [
                {
                        key: 0,
                        text: "0-10,000",
                        value: "10,000"
                },
                {
                        key: 1,
                        text: "10,000-15,000",
                        value: "15,000"
                },
                {
                        key: 2,
                        text: "15,000-20,000",
                        value: "20,000"
                },
                {
                        key: 3,
                        text: "20,000-25,000",
                        value: "25,000"

                },
                {
                        key: 4,
                        text: "25,000-30,000",
                        value: "30,000"
                },
                {
                        key: 5,
                        text: "30,000-35,000",
                        value: "35,000"
                },
                {
                        key: 6,
                        text: "35,000-40,000",
                        value: "40,000"
                },
                {
                        key: 7,
                        text: "40,000-45,000",
                        value: "45,000"
                },
                {
                        key: 8,
                        text: "45,000-50,000",
                        value: "50,000"
                },
                {
                        key: 9,
                        text: "50,000-55,000",
                        value: "55,000"
                },
                {
                        key: 10,
                        value: "55,000-60,000",
                        text: "60,000"
                },
                {
                        key: 11,
                        value: "65,000",
                        text: "60,000+"
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
                        key: 4,
                        text: "Michigan",
                        value: "Michigan"
                },
                {
                        key: 5,
                        text: "Minnesota",
                        value: "Minnesota"
                },
                {
                        key: 6,
                        text: "Missouri",
                        value: "Missouri"
                },
                {
                        key: 7,
                        text: "Nebraska",
                        value: "Nebraska"
                },
                {
                        key: 8,
                        text: "North Dakota",
                        value: "North Dakota"
                },
                {
                        key: 9,
                        text: "Ohio",
                        value: "Ohio"
                },
                {
                        key: 10,
                        value: "South Dakota",
                        text: "South Dakota"
                },
                {
                        key: 11,
                        value: "Wisconsin",
                        text: "Wisconsin"
                },
                {
                        key: 12,
                        value: "North Carolina",
                        text: "North Carolina"
                },
                {
                        key: 13,
                        value: "Georgia",
                        text: "Georgia"
                },


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
                        key: 4,
                        text: "Engineering",
                        value: "Engineering"
                },
                {
                        key: 5,
                        text: "Education",
                        value: "Education"
                },
                {
                        key: 6,
                        text: "Communications",
                        value: "Communications"
                },
                {
                        key: 7,
                        text: "Finance and Accounting",
                        value: "Finance and Accounting"
                },
                {
                        key: 8,
                        text: "Criminal Justice",
                        value: "Criminal Justice"
                },
                {
                        key: 9,
                        text: "Anthropology",
                        value: "Anthropology"
                },
                {
                        key: 10,
                        value: "Sociology",
                        text: "Sociology"
                },
                {
                        key: 11,
                        value: "Computer Engineering",
                        text: "Computer Engineering"
                },
                {
                        key: 12,
                        value: "Computer Science",
                        text: "Computer Science"
                },
                {
                        key: 13,
                        value: "English",
                        text: "English"
                },
                {
                        key: 14,
                        value: "Economics",
                        text: "Economics"
                },
                {
                        key: 15,
                        value: "Political Science",
                        text: "Political Science"
                },
                {
                        key: 16,
                        value: "History",
                        text: "History"
                },
                {
                        key: 17,
                        value: "Kinesiology and Physical Therapy",
                        text: "Kinesiology and Physical Therapy"
                },
                {
                        key: 18,
                        value: "Health Professions",
                        text: "Health Professions"
                },
                {
                        key: 19,
                        value: "Environmental Science",
                        text: "Environmental Science"
                },
                {
                        key: 20,
                        value: "Math",
                        text: "Math"
                },
                {
                        key: 21,
                        value: "Foreign languages",
                        text: "Foreign languages"
                },
                {
                        key: 22,
                        value: "Design",
                        text: "Design"
                },
                {
                        key: 23,
                        value: "International Relations",
                        text: "International Relations"
                },
                {
                        key: 24,
                        value: "Food and Nutrition",
                        text: "Food and Nutrition"
                },
                {
                        key: 25,
                        value: "Religious Studies",
                        text: "Religious Studies"
                },
                {
                        key: 26,
                        value: "Music",
                        text: "Music"
                },
                {
                        key: 27,
                        value: "Physics",
                        text: "Physics"
                },
                {
                        key: 28,
                        value: "Legal Studies",
                        text: "Legal Studies"
                },
                {
                        key: 29,
                        value: "Dental Studies",
                        text: "Dental Studies"
                },
                {
                        key: 30,
                        value: "Architecture",
                        text: "Architecture"
                },
        ]
        const types = [
                {
                        key: 0,
                        text: "Community College",
                        value: "Community College"
                },
                {
                        key: 1,
                        text: "4-Year College/University",
                        value: "4-Year College/University"
                },
                {
                        key: 2,
                        text: "Apprenticeship Program",
                        value: "Apprenticeship Program"
                },
                {
                        key: 3,
                        text: "Trade School",
                        value: "Trade School"
                }
        ]


        function WriteFirebase() {
                console.log(isValid())
                console.log(name)

                if (isValid() && !coaches[username]) {
                        const data = {
                                "firstName": name,
                                "lastName": lastname,
                                "about": about,
                                "strengths": strengths,
                                "enjoys": enjoys,
                                "pronouns": pronouns,
                                "location": location,
                                "quote": quote,
                                "current": current,
                                "username": username,
                                "password": password,
                                "favoritepart": favoritePart,

                        }
                        dbCoaches.update({
                                [username]: data
                        });
                        const uploadTask = storage.ref(`coaches/${username}`).put(image);
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
                                                .ref("coaches")
                                                .child(username)
                                                .getDownloadURL()
                                                .then(url => {
                                                        dbCoaches.child(username).child("url").set(url);
                                                });
                                }
                        );


                        console.log("Wrote Name and phone onto firebase!");
                        setRedirect(true);
                }
                else {
                        alert("Please select at least one option from the lists below.")
                }

        }
        function isValid() {
                var x = (enjoys.length > 0 && strengths.length > 0 && quote && name && lastname && about && current && location && favoritePart && pronouns)
                return (x)

        }
        if (!redirect) {
                return (
                        <div ref={contextRef}>
                                {/* <Sticky context={contextRef} > */}
                                        <Divider hidden />
                                        <Divider hidden />
                                        <Divider hidden />
                                        <Grid padded textAlign="center">
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                        <Form.Input label='First Name of coach' required={true}
                                                                                onChange={(e) => { setName(e.target.value) }} placeholder='Enter first name here' />
                                                                        <Form.Input label='Last Name of coach' required={true}
                                                                                onChange={(e) => { setLastname(e.target.value) }} placeholder='Enter last name here' />
                                                                        <Form.Input label='Username' required={true}
                                                                                onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter here' />
                                                                        <Form.Input label='Password' required={true} type='password'
                                                                                onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter here' />

                                                                        <Form.Input fluid
                                                                                label="Profile Picture"
                                                                                onChange={(e) => {
                                                                                        console.log(e.target.files[0])
                                                                                        setImage(e.target.files[0])
                                                                                }}
                                                                                label='Profile Picture:'
                                                                                type="file"
                                                                        />
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>

                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                        <Form.Input label='Why do you coach?' required={true}
                                                                                onChange={(e) => { setAbout(e.target.value) }} placeholder='Enter why you coach here' />

                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                        <Form.Input label='What are you currently up to?' required={true}
                                                                                onChange={(e) => { setCurrent(e.target.value) }} placeholder='Enter here' />

                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                        <Form.Input label='Content: Favorite part about applying to college?' required={true}
                                                                                onChange={(e) => { setFav(e.target.value) }} placeholder='Enter here' />

                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                        <Form.Input label='What is an inspirational quote you want to share with your students?' required={true}
                                                                                onChange={(e) => { setQuote(e.target.value) }} placeholder='Enter here' />

                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>

                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        <Form.Input value={currEnjoys} fluid label='Enter some things that you enjoy!' required={true}
                                                                                onChange={(e) => { setCurrEnjoys(e.target.value) }} placeholder='Enter' />
                                                                        <Button type='submit' onClick={() => {
                                                                                var temp = enjoys;
                                                                                temp.push(currEnjoys);
                                                                                setEnjoys(temp);
                                                                                if(currEnjoys){
                                                                                        setCurrEnjoys("");
                                                                                }
                                                                                
                                                                                setBool(!bool)
                                                                        }}>Add to list</Button>
                                                                </Form.Group>
                                                        </Form>
                                                        
                                                </Grid.Row>
                                                <Grid.Row style={{marginTop: "-15px"}} >
                                                {enjoys.length > 0 && bool || enjoys.length > 0 && !bool ? 
                                                        <div>
                                                                <Divider>
                                                                        Your Enjoys List:
                                                                </Divider>
                                                        {enjoys.map(item =>
                                                                <List>
                                                                        <List.Item>{item}</List.Item>
                                                                </List>)}
                                                        </div>: "Add item above."}
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        <Form.Input value={setCurrStrengths} fluid label='Enter some of your strengths!' required={true}
                                                                                onChange={(e) => { setCurrStrengths(e.target.value) }} placeholder='Enter' />
                                                                        <Button type='submit' onClick={() => {
                                                                                var temp = strengths;
                                                                                temp.push(currStrength);
                                                                                setStrengths(temp);
                                                                                setCurrStrengths("");
                                                                                setBool2(!bool2)
                                                                        }}>Add to list</Button>
                                                                </Form.Group>
                                                        </Form>
                                                       
                                                </Grid.Row>

                                                <Grid.Row style={{marginTop: "-15px"}} >
                                                {strengths.length > 0 && bool2 || strengths.length > 0 && !bool2 ? 
                                                        <div>
                                                                <Divider>
                                                                        Your Strengths List:
                                                                </Divider>
                                                        {strengths.map(item =>
                                                                <List>
                                                                        <List.Item>{item}</List.Item>
                                                                </List>)}
                                                        </div>: "Add item above."}
                                                </Grid.Row>






                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">

                                                                <Form.Group inline required={true}>
                                                                        <label>What are your preferred pronouns/</label>
                                                                        <Form.Radio
                                                                                label='She/Her/Hers'
                                                                                value='She/Her/Hers'
                                                                                checked={pronouns == 'She/Her/Hers'}
                                                                                onChange={() => setPronouns('She/Her/Hers')}

                                                                        />
                                                                        <Form.Radio
                                                                                label='He/Him/His'
                                                                                value='He/Him/His'
                                                                                checked={pronouns == 'He/Him/His'}
                                                                                onChange={() => setPronouns('He/Him/His')}
                                                                        />
                                                                        <Form.Radio
                                                                                label='They/Them/Theirs'
                                                                                value='They/Them/Theirs'
                                                                                checked={pronouns == 'They/Them/Theirs'}
                                                                                onChange={() => setPronouns('They/Them/Theirs')}
                                                                        />

                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>


                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        <Form.Input fluid label='Enter your current city/state as City, State i.e. Chicago, IL' required={true}
                                                                                onChange={(e) => { setLocation(e.target.value) }} placeholder='Enter here' />
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>


                                                <Grid.Row>
                                                        <Grid.Column width={6}>
                                                                <Header as="h3">
                                                                        This information will help us find appropriate colleges for you.
              </Header>                                         <Button onClick={() => {
                                                                        console.log(name);
                                                                        console.log(lastname)
                                                                        console.log(about)
                                                                        console.log(enjoys)
                                                                        console.log(currEnjoys)
                                                                        console.log(favoritePart)
                                                                        console.log(current)
                                                                        console.log(strengths)
                                                                        console.log(currStrength)
                                                                        console.log(pronouns)
                                                                        console.log(quote)
                                                                        console.log(location)
                                                                        console.log(url);
                                                                        WriteFirebase()
                                                                }}>

                                                                </Button>
                                                        </Grid.Column>
                                                </Grid.Row>
                                        </Grid>
                                {/* </Sticky> */}
                        </div>


                );


        }
        else {
                return (<Redirect to="/register/college" push={true} />);

        }

}

export default RegisterCoach;