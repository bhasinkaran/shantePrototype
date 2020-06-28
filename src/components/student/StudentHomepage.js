import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Search, Grid} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

import PageHeader from '../PageHeader'
import {InfoContext}from '../../App'

const StudentHomePage=()=>{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);
//             const {replies, setReplies, artists, setArtists, messages, setMessages, songs, setSongs, posts, setPosts, likes, setLikes, user, setUser, accesstoken, setAccesToken, refreshtoken, setRefreshtoken} = React.useContext(InfoContext);

        useEffect(()=>console.log("It changed"), [students]);
        if(students) 
        return(
          <div>
                        {"students" + students["testuser"]["firstName"]}
                </div> 
        )
        else{
                return "NONE"
        }
}

export default StudentHomePage;