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
                        <Grid.Column width={1}>

                        </Grid.Column>
                        <Grid.Column width={12}>
                        <Button.Group style={{ali:"center"}} vertical  size='mini'>
                <Button fluid color="brown">Not Too Good</Button>
                <Button fluid color="orange">Just Fine</Button>
                <Button  fluid color="green">Pretty Great</Button>
                </Button.Group>
                        </Grid.Column>
                        <Grid.Column width={2}>

                        </Grid.Column>
                </Grid>
               
                </div>
        );
}
export default WelcomeGreeting;