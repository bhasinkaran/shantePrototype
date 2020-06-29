import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Grid, Loader, Button} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

import PageHeader from '../PageHeader'
import {InfoContext}from '../../App'
import UpcomingDeadlines from './UpcomingDeadlines'

const StudentHomePage=()=>{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);
        const [wait, setWait]=useState(true);
        setTimeout(()=>setWait(false), 10000)
        // useEffect(()=>console.log("It changed"), [students]);
       if(user && students && students[user])
        return(<div>
                <Container>
                        <Grid centered padded>
                                <Grid.Column width={5}>
                                        <Grid.Row>
                                                <Header  textAlign="center" as="h2" > Welcome, {students[user]['firstName']}</Header>
                                                <Header textAlign="center" style={{marginTop:"-20px"}} as="h4" > {students[user]['state']}</Header>

                                        </Grid.Row>
                                        <Grid.Row>
                                                <Header  textAlign="center" as="h2" >How are you doing today?</Header>
                                                <Button.Group size='large'>
                                                <Button>Not Too Good</Button>
                                                 <Button.Or />
                                                <Button>Just Fine</Button>
                                                <Button.Or />
                                                <Button>Pretty Great</Button>
                                                </Button.Group>
                                        </Grid.Row>

                                         <Grid.Row>
                                         <Header textAlign="center" style={{marginTop:"20px"}} as="h3" >How are you doing today?</Header>

                                        </Grid.Row> 
                                </Grid.Column> 
                                <Grid.Column width={4}></Grid.Column>
                                <Grid.Column width={6}>
                                                 <Header as="h2" > Upcoming Deadlines</Header>
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