import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Search, Grid} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

import PageHeader from '../PageHeader'
import {InfoContext} from '../../App'

const StudentHomePage=()=>
{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = useState(InfoContext);
        if(students)
        {
                console.log(students);
        }
        return(
                <div>
                        {students}
                </div>
        )
}

export default StudentHomePage;