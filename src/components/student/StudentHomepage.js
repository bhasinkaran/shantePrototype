import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

import { InfoContext } from '../../App'
import UpcomingDeadlines from './homepage/UpcomingDeadlines'
import Goals from './homepage/Goals'
import WelcomeGreeting from './homepage/welcomegreeting'
import LaunchPad from './homepage/LaunchPad'
import ModalDeadline from './homepage/Modals/CreateDeadline'
import ModalGoal from './homepage/Modals/CreateGoal'
import ModalRequest  from './homepage/Modals/CreateRequest'
import SideBar from './Sidebar'

const StudentHomePage = () => {
        const { user, students, hscounselors, collegecounselors, visible, setVisible, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [wait, setWait] = useState(true);
        const [open, setOpen] = useState(false);
        const [openGoal, setOpenGoal] = useState(false);
        const [openRequest, setOpenRequest]=useState(false);
        setTimeout(() => setWait(false), 10000)
        // useEffect(()=>console.log("It changed"), [students]);
        if (user && students && students[user])
                return (<div>
                                        <ModalDeadline open={open} setOpen={setOpen} />
                                        <ModalGoal open={openGoal} setOpen={setOpenGoal} />
                                        <ModalRequest open={openRequest} setOpen={setOpenRequest} />

                                        <Grid centered divided padded>
                                                <Grid.Column width={4}>
                                                        <Grid.Row>
                                                                <Image src={students[user]['url']} size='tiny' centered circular />
                                                                <Header textAlign="center" as="h2" > Welcome, {students[user]['firstName']}</Header>
                                                                <Header textAlign="center" style={{ marginTop: "-20px" }} as="h4" > {students[user]['state']}</Header>
                                                        </Grid.Row>
                                                        <Divider />
                                                        <Grid.Row>

                                                        </Grid.Row>
                                                </Grid.Column>
                                                <Grid.Column width={9}>
                                                        {students[user]['dailycheckin']==false ? <WelcomeGreeting /> : <LaunchPad />}


                                                </Grid.Column>

                                                <Grid.Column width={3}>
                                                        {/* NOW WE WILL SHOW THE CURRENT DEADLINES OF THE STUDENT */}
                                                        <Grid.Row>

                                                                <Header as="h2" textAlign="center" color='teal' > Upcoming Deadlines</Header>
                                                                <Header as="h5" textAlign="center" style={{ marginTop: "-10px" }}>Step closer to your goals.</Header>

                                                        </Grid.Row>
                                                        <Divider></Divider>
                                                        {students[user]['deadlines'] ? <UpcomingDeadlines />


                                                                :
                                                                <div>
                                                                        <Header textAlign="center" style={{ marginTop: "-10px" }} color='violet' as="h4"> None Upcoming.</Header>

                                                                </div>}
                                                        <Segment onClick={() => setOpen(true)} inverted color='olive'>
                                                                Register new deadline.
                                                        </Segment>

                                                        {/* NOW WE WILL SHOW CURRENT THE GOALS OF THE STUDENT */}
                                                        <Grid.Row style={{ marginTop: "15px" }}>

                                                                <Header as="h2" textAlign="center" color='teal' > Current Goals</Header>
                                                                {/* <Header as="h5" textAlign="center" style={{ marginTop: "-10px" }}></Header> */}

                                                        </Grid.Row>
                                                        <Divider></Divider>
                                                        {students[user]['goals'] ? <Goals />
                                                                :
                                                                <div>
                                                                        <Header textAlign="center" style={{ marginTop: "-10px" }} color='violet' as="h4"> None Registered.</Header>
                                                                </div>}
                                                        <Segment onClick={() => setOpenGoal(true)} inverted color='olive'>
                                                                Create new goal.
                                                        </Segment>

                                                        {/* NOW WE WILL ALLOW STUDENT TO CREATE A REQUEST */}
                                                         <Grid.Row style={{ marginTop: "15px" }}>

                                                                <Header as="h2" textAlign="center" color='teal' > Do you need help?</Header>
                                                                {/* <Header as="h5" textAlign="center" style={{ marginTop: "-10px" }}></Header> */}

                                                        </Grid.Row> 
                                                        <Divider marginTop={"-15px"}></Divider>
                                                        <Segment onClick={() => setOpenRequest(true)} inverted color='red'>
                                                                Create new request.
                                                        </Segment>

                                                </Grid.Column>
                                        </Grid>
                </div>)
        else if (!wait) {
                return <Redirect push={true} to={'/student/login'} />
        }
        else {
                return <Loader ></Loader>
        }

}

export default StudentHomePage;