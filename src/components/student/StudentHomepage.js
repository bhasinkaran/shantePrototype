import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Grid} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

import PageHeader from '../PageHeader'
import {InfoContext}from '../../App'

const StudentHomePage=()=>{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);

        // useEffect(()=>console.log("It changed"), [students]);
       
        return(<div>
                <Container>
                        <Grid>
                                <Grid.Row>
                                        <Header as="h2" > Welcome {user['firstName']}</Header>
                                </Grid.Row>
                                <Grid.Row>

                                </Grid.Row>             
                        </Grid>
                </Container>
                </div>)
      
}

export default StudentHomePage;