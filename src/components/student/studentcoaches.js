import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Card, Header, Divider, Grid, Loader, Button, Image } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import PageHeader from '../PageHeader'
import { InfoContext } from '../../App'
import UpcomingDeadlines from './UpcomingDeadlines'
import WelcomeGreeting from './homepage/welcomegreeting'
import ReleventColleges from './homepage/releventcolleges'
import ModalDeadline from './homepage/CreateDeadline'
import CoachPreview from './CoachPreview'
const StudentCoaches = () => {
        const { user, students, hscounselors, collegecounselors, visible, setVisible ,colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [wait, setWait] = useState(true);
        const [open, setOpen] = useState(false);
        setTimeout(() => setWait(false), 10000)
        // useEffect(()=>console.log("It changed"), [students]);
        if (user && students && students[user])
                return (<div>
                        <Sidebar.Pushable as={Segment}>
                                <Sidebar
                                        as={Menu}
                                        animation='overlay'
                                        icon='labeled'
                                        inverted
                                        onHide={() => setVisible(false)}
                                        vertical
                                        visible={visible}
                                        width='thin'
                                >
                                        <Menu.Item as='a'>
                                                <Icon name='home' />
          Home
        </Menu.Item>
                                        <Menu.Item as={Link} to='/student/profile'>
                                                <Icon name='street view' />
          Profile
        </Menu.Item>
                                        <Menu.Item as={Link} to='/student/goals'>
                                                <Icon name='bolt' />
          Goals
        </Menu.Item>
                                        <Menu.Item as={Link} to='/student/requests'>
                                                <Icon name='question' />
          Requests
        </Menu.Item>
                                        <Menu.Item as={Link} to='/student/coaches'>
                                                <Icon name='address card' />
          Coaches
        </Menu.Item>
                                        <Menu.Item as={Link} to='/student/colleges'>
                                                <Icon name='paper plane' />
          Colleges
        </Menu.Item>
                                </Sidebar>
                                <Sidebar.Pusher>
                                        <Container>
                                                <Grid centered padded>
                                                        <Grid.Column>
                                                                {students[user]['coaches'] ?
                                                                        <div>
                                                                                <Grid.Row>
                                                                                        <Header>Your coaches</Header>
                                                                                        {students[user]['coaches'].map(coach => <CoachPreview coach={coaches[coach]} />)}
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