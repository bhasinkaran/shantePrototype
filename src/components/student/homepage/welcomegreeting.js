import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Divider, Grid, Loader, Button} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

const WelcomeGreeting=()=>{
        return(
                <div>
                <Header  textAlign="center" as="h3" >How are you doing today?</Header>
                <Grid>
                        <Grid.Column width={4}>

                        </Grid.Column>
                        <Grid.Column width={10}>
                        <Button.Group style={{textAlign:"center"}} vertical  size='mini'>
                <Button style={{textAlign:"center"}} fluid color="brown">Not Too Good</Button>
                <Button style={{textAlign:"center"}} fluid color="orange">Just Fine</Button>
                <Button style={{textAlign:"center"}}  fluid color="green">Pretty Great</Button>
                </Button.Group>
                        </Grid.Column>
                        <Grid.Column width={2}>

                        </Grid.Column>
                </Grid>
               
                </div>
        );
}
export default WelcomeGreeting;