import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Card, Header, Divider, Grid, Loader, Button, Image } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import PageHeader from '../PageHeader'
import { InfoContext } from '../../App'
import UpcomingDeadlines from './homepage/UpcomingDeadlines'
import WelcomeGreeting from './homepage/welcomegreeting'
import ReleventColleges from './colleges/releventcolleges'
import ModalDeadline from './homepage/Modals/CreateDeadline'
import CoachPreview from './coach/CoachPreview'
import SideBar from './Sidebar'
const StudentCoaches = () => {
        const { user, students, hscounselors, collegecounselors, visible, setVisible ,colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [wait, setWait] = useState(true);
        const [open, setOpen] = useState(false);
        setTimeout(() => setWait(false), 10000)
        // useEffect(()=>console.log("It changed"), [students]);
        if (user && students && students[user])
                return (<div>
                        <Sidebar.Pushable as={Segment} style={{innerHeight:"100vh"}}>
                                <SideBar />
                                <Sidebar.Pusher>
                                        <Container>
                                                <Grid centered padded>
                                                        <Grid.Column>
                                                                {students[user]['coaches'] && coaches?
                                                                        <div>
                                                                                <Grid.Row>
                                                                                        <Header>Your coaches</Header>
                                                                                        {Object.values(students[user]['coaches']).map(coach => <CoachPreview coach={coaches[coach]} />)}
                                                                                </Grid.Row>
                                                                        </div>

                                                                        :
                                                                        <div>
                                                                                <Grid.Row>
                                                                                        <Header as="h1" textAlign="center" color="black">You haven't paired up with a coach yet.</Header>
                                                                                        <Header as="h1" style={{marginTop:"-13px"}} textAlign="center" color="violet">Find a coach that you'd like to reach out to!</Header>
                                                                                        <Divider></Divider>
                                                                                        <Segment.Group compact>
                                                                                                {Object.values(coaches).map(coach => <CoachPreview coach={coach} />)}
                                                                                        </Segment.Group>
                                                                                </Grid.Row>
                                                                        </div>
                                                                }
                                                        </Grid.Column>

                                                </Grid>
                                        </Container>
                                </Sidebar.Pusher>
                        </Sidebar.Pushable>
                </div>)
        else if (!wait) {
                return <Redirect push={true} to={'/student/login'} />
        }
        else {
                return <Loader></Loader>
        }

}

export default StudentCoaches;