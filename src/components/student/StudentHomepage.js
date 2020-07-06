import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import PageHeader from '../PageHeader'
import { InfoContext } from '../../App'
import UpcomingDeadlines from './UpcomingDeadlines'
import WelcomeGreeting from './homepage/welcomegreeting'
import ReleventColleges from './homepage/releventcolleges'
import ModalDeadline from './homepage/CreateDeadline'
import SideBar from './Sidebar'
const StudentHomePage = () => {
        const { user, students, hscounselors, collegecounselors, visible, setVisible, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [wait, setWait] = useState(true);
        const [open, setOpen] = useState(false);
        setTimeout(() => setWait(false), 10000)
        // useEffect(()=>console.log("It changed"), [students]);
        if (user && students && students[user])
                return (<div>
        <Sidebar.Pushable as={Segment}>
                                <SideBar>
                                        
                                </SideBar>
                                <Sidebar.Pusher>
                                        <Container>
                                                <ModalDeadline open={open} setOpen={setOpen} />
                                                <Grid centered padded>
                                                        <Grid.Column width={4}>
                                                                <Grid.Row>
                                                                        <Image src={students[user]['url']} size='tiny' centered circular />
                                                                        <Header textAlign="center" as="h2" > Welcome, {students[user]['firstName']}</Header>
                                                                        <Header textAlign="center" style={{ marginTop: "-20px" }} as="h4" > {students[user]['state']}</Header>
                                                                </Grid.Row>
                                                                <Divider />
                                                                <Grid.Row>
                                                                        <WelcomeGreeting />
                                                                </Grid.Row>

                                                                <Grid.Row>

                                                                </Grid.Row>
                                                        </Grid.Column>
                                                        <Grid.Column width={9}>
                                                                <ReleventColleges />
                                                        </Grid.Column>

                                                        <Grid.Column width={3}>
                                                                <Grid.Row>

                                                                        <Header as="h2" textAlign="center" color='teal' > Upcoming Deadlines</Header>
                                                                        <Header as="h5" textAlign="center" style={{ marginTop: "-10px" }}> One step closer to your goals.</Header>

                                                                </Grid.Row>
                                                                <Divider></Divider>
                                                                {students[user]['deadlines'] ? <UpcomingDeadlines />


                                                                        :
                                                                        <div>
                                                                                <Header textAlign="center" style={{ marginTop: "-10px" }} color='violet' as="h4"> None Upcoming.</Header>

                                                                        </div>}
                                                                <Button onClick={() => setOpen(true)}>
                                                                        Register a new deadline.
                                                         </Button>
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
                return <Loader ></Loader>
        }

}

export default StudentHomePage;