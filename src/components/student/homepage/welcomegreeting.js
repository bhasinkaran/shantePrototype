import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Divider, Grid, Loader, Button} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

const WelcomeGreeting=()=>{
        return(
                <div>
                <Header  textAlign="center" as="h3" >How are you doing today?</Header>
                <Button.Group size='small'>
                <Button color="brown">Not Too Good</Button>
                 <Button.Or />
                <Button color="orange">Just Fine</Button>
                <Button.Or />
                <Button color="green">Pretty Great</Button>
                </Button.Group>
                </div>
        );
}
export default WelcomeGreeting;