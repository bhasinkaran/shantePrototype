import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { InfoContext } from '../../App'
import { Router, useParams, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

const  SideBar=() =>{
        const { user, students, hscounselors, collegecounselors, visible, setVisible , sidebool, setSideBool, colleges, messages, coaches, chats } = React.useContext(InfoContext);

        return <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
>
        <Menu.Item as={Link} to='/student' onClick={()=> setTimeout(() => setVisible(false), 500)}> 
                <Icon name='home' />
Home
</Menu.Item>
        <Menu.Item as={Link} to='/student/profile' onClick={()=>setTimeout(() => setVisible(false), 500)} >
                <Icon name='street view' />
Profile
</Menu.Item>
        <Menu.Item as={Link} to='/student/goals' onClick={()=>setTimeout(() => setVisible(false), 500)} >
                <Icon name='bolt' />
Goals
</Menu.Item>
        <Menu.Item as={Link} to='/student/requests' onClick={()=>setTimeout(() => setVisible(false), 500)} >
                <Icon name='question' />
Requests
</Menu.Item>
        <Menu.Item as={Link} to='/student/coaches' onClick={()=>setTimeout(() => setVisible(false), 500)} >
                <Icon name='address card' />
Coaches
</Menu.Item>
        <Menu.Item as={Link} to='/student/colleges'onClick={()=>setTimeout(() => setVisible(false), 500)} >
                <Icon name='paper plane' />
Colleges
</Menu.Item>
</Sidebar>
}
export default SideBar;