import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Divider, Grid, Loader, Button, Image} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

import PageHeader from '../PageHeader'
import {InfoContext}from '../../App'
import UpcomingDeadlines from './UpcomingDeadlines'
import WelcomeGreeting from './homepage/welcomegreeting'
import ReleventColleges from './homepage/releventcolleges'
const StudentHomePage=()=>{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);
        const [wait, setWait]=useState(true);
        setTimeout(()=>setWait(false), 10000)
        // useEffect(()=>console.log("It changed"), [students]);
       if(user && students && students[user])
        return(<div>
                <Container>
                        <Grid centered padded>
                                <Grid.Column width={4}>
                                        <Grid.Row>
                                                <Image src={students[user]['url']} size='tiny' centered circular/>

                                                <Header  textAlign="center" as="h2" > Welcome, {students[user]['firstName']}</Header>
                                                <Header textAlign="center" style={{marginTop:"-20px"}} as="h4" > {students[user]['state']}</Header>

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

                                                        <Header as="h3" > Upcoming Deadlines</Header>
                                                        <Header as="h5" style={{marginTop:"-20px"}} >One step closer to your goals.</Header>

                                                 </Grid.Row>
                                                 <Divider></Divider>
                                                 {students[user]['upcomingDeadlines'] ? <UpcomingDeadlines /> : <Header as="h4"> None Upcoming.</Header>}

                                </Grid.Column>           
                        </Grid>
                </Container>
                </div>)
                else if(!wait){
                       return  <Redirect push={true} to={'/student/login'} />
                }
                else{
                      return  <Loader ></Loader>
                }
      
}

export default StudentHomePage;