import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Header, Divider, Grid, Loader, Button,Image} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';
import {InfoContext} from '../../../App'

const ReturnCollege=({college, hashmap})=>{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);
        const[commonmajors, setCommon]=useState([]);
        useEffect(()=>{
                var temp=[];
                hashmap.map(item=>
                        {
                                if(item[0]==college.name){
                                        item[1].map(major=>{
                                                temp.push(major);
                                        })
                                }
                        })
                        setCommon(temp);
        }, [hashmap])
        return(
               <Grid.Row>
                       <Grid.Column width={3}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                       <Header color='teal' style={{marginTop:"-5px"}} >{college.name}</Header>
                       <Header color='violet' style={{marginTop:"-10px"}} >{college.targetlocations}</Header>
                        <Header style={{marginTop:"-5px"}} as="h4">Overlapping Areas of Study</Header>
                       {commonmajors.map(major=>  <Header as={'h5'} style={{marginTop:"-10px"}}>{major}</Header>)}
                </Grid.Column>
               </Grid.Row>
                
               
        );
}
export default ReturnCollege;