import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Icon, Header, Divider, Grid, Loader, Image, Button } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import {dbStudents} from '../../../firebase/firebase'
import {InfoContext} from '../../../App';
const WelcomeGreeting = () => {
        const [show, setShow] = useState(false);
        const [answer, setAnswer] = useState(false);
        const [text, setText] = useState("");
        const [push, setPush]=useState(false);
        const { user, students, hscounselors, collegecounselors, visible, setVisible, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        useEffect(()=>{
                if(push){
                        updateFirebase();
                        console.log("I'm inside now");
                }
                console.log("I'm outside now");
        },[push])
        useEffect(() => {
                if (answer == 'Not Too Good') {
                        setText("Sorry to hear that, we all have rough days. We're here to help! What would you like to start with?")
                        dbStudents.child(user).child('dailycheckinvalues').push({
                                value: answer,
                                date: {'.sv': 'timestamp'}
                        });

                }
                if (answer == 'Just Fine') {
                        setText("That's fair. We all have just okay days. We're here to help! What would you like to start with?")
                        dbStudents.child(user).child('dailycheckinvalues').push({
                                value: answer,
                                date: {'.sv': 'timestamp'}
                        });
                }
                if (answer == 'Pretty Great') {
                        setText("That's great to hear! Let's keep the momentum going, and we're here to help! What would you like to start with?")
                        dbStudents.child(user).child('dailycheckinvalues').push({
                                value: answer,
                                date: {'.sv': 'timestamp'}
                        });
                }
        }, [answer]);
        function updateFirebase(){
                dbStudents.child(user).child('dailycheckin').set(true);
                console.log("here");
        }

        return (
                <div>
                        <Grid>
                                <Grid.Row>
                                        <Grid.Column width={16}>
                                                <div>
                                                        {/* <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar /> */}
                                                        <Header as="h1" >How are you doing today?</Header>
                                                </div>

                                        </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                        <Grid.Column width={5}>

                                        </Grid.Column>
                                        <Grid.Column width={9}>
                                                <Button.Group style={{ textAlign: "center" }} vertical size='massive'>
                                                        <Button disabled={answer == 'Just Fine' || answer == 'Pretty Great'} style={{ textAlign: "center" }} onClick={() => {
                                                                setAnswer('Not Too Good');
                                                                setShow(true);
                                                        }} fluid color="brown">
                                                                <Icon name='smile outline' /> 
                                                                Not Too Good</Button>
                                                        <Button disabled={answer == 'Not Too Good' || answer == 'Pretty Great'} style={{ textAlign: "center" }} onClick={() => {
                                                                setAnswer('Just Fine');
                                                                setShow(true);
                                                        }} fluid color="orange">
                                                                <Icon name ='battery half' />
                                                                Just Fine</Button>
                                                        <Button disabled={answer == 'Not Too Good' || answer == 'Just Fine'} style={{ textAlign: "center" }} onClick={() => {
                                                                setAnswer('Pretty Great');
                                                                setShow(true);
                                                        }} fluid color="green">
                                                                <Icon name='frown outline' /> 
                                                                Pretty Great</Button>
                                                </Button.Group>
                                        </Grid.Column>
                                        <Grid.Column width={1}>

                                        </Grid.Column>
                                </Grid.Row>
                                {show ?
                                        <div>
                                                <Grid.Row>
                                                        <Grid.Column width={16}>
                                                                <Header as="h1" >{text}</Header>
                                                        </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                        <Grid.Column width={5}>

                                                        </Grid.Column>
                                                        <Grid.Column width={9}>
                                                                {/* vertical */}
                                                                {/* <Button.Group   labeled icon style={{ textAlign: "center" }} size='huge'> */}
                                                                 <Button size='huge' onClick={()=>                 dbStudents.child(user).child('dailycheckin').set(true)

                                                                } style={{ textAlign: "center" }} as={Link}  to={'/student/coaches'} fluid > <Icon name = 'address card' />Coaches</Button>
                                                                {/* </Button.Group> */}
                                                                <Divider />
                                                                <Button size='huge' onClick={()=>  dbStudents.child(user).child('dailycheckin').set(true)} style={{ textAlign: "center" }} as={Link}  to={'/student/goals'} fluid >  <Icon name = 'bolt' /> Goals</Button>
                                                                <Divider />
                                                                <Button  size='huge' onClick={()=>  dbStudents.child(user).child('dailycheckin').set(true)} style={{ textAlign: "center" }}  as={Link} to={'/student/profile'} fluid > <Icon name='street view'></Icon>Profile</Button>
                                                                <Divider />
                                                                <Button size='huge' onClick={()=> dbStudents.child(user).child('dailycheckin').set(true)} style={{ textAlign: "center" }} as={Link} to={'/student/requests'} fluid > <Icon name='question' />Requests</Button>

                                                        </Grid.Column>
                                                        <Grid.Column width={1}>
                                                        </Grid.Column>

                                                </Grid.Row>
                                                <Divider />
                                                <Grid.Row>
                                                        <Header as='h2'> It all starts with the first step.</Header>
                                                </Grid.Row>
                                        </div>
                                        :
                                        null
                                }
                        </Grid>

                </div>
        );
}
export default WelcomeGreeting;