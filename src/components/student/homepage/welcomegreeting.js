import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Image, Button } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';

const WelcomeGreeting = () => {
        const [show, setShow] = useState(false);
        const [answer, setAnswer] = useState(false);
        const [text, setText] = useState("");
        useEffect(() => {
                if (answer == 'Not Too Good') {
                        setText("Sorry to hear that, we all have rough days. We're here to help!")
                }
                if (answer == 'Just Fine') {
                        setText("That's fair. We all have just okay days. We're here to help!")
                }
                if (answer == 'Pretty Great') {
                        setText("That's great to hear! Let's keep the momentum going, and we're here to help!")
                }
        }, [answer]);

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
                                                        }} fluid color="brown">Not Too Good</Button>
                                                        <Button disabled={answer == 'Not Too Good' || answer == 'Pretty Great'} style={{ textAlign: "center" }} onClick={() => {
                                                                setAnswer('Just Fine');
                                                                setShow(true);
                                                        }} fluid color="orange">Just Fine</Button>
                                                        <Button disabled={answer == 'Not Too Good' || answer == 'Just Fine'} style={{ textAlign: "center" }} onClick={() => {
                                                                setAnswer('Pretty Great');
                                                                setShow(true);
                                                        }} fluid color="green">Pretty Great</Button>
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
                                                                <Button.Group  vertical labeled icon style={{ textAlign: "center" }} size='massive'>
                                                                        <Button style={{ textAlign: "center" }} as={Link} to={'/student/coaches'} fluid color="brown"> Coaches</Button>
                                                                        <Button style={{ textAlign: "center" }} as={Link} to={'/student/goals'} fluid color="brown">Goals</Button>
                                                                        <Button style={{ textAlign: "center" }} as={Link} to={'/student/profile'} fluid color="brown">Profile</Button>
                                                                        <Button style={{ textAlign: "center" }} as={Link} to={'/student/requests'} fluid color="brown">Requests</Button>

                                                                </Button.Group>
                                                        </Grid.Column>
                                                        <Grid.Column width={1}>

                                                        </Grid.Column>

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