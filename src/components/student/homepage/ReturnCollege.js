import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Divider, Grid, Loader, Button,Image} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';
import {InfoContext} from '../../../App'

const ReturnCollege=({college})=>{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);
        return(
               <Grid.Row>
                       <Grid.Column width={3}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                       <Header>{college.name}</Header>
                       <Header>{college.name}</Header>
                </Grid.Column>
               </Grid.Row>
                
               
        );
}
export default ReturnCollege;