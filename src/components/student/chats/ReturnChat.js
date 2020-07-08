import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { InfoContext } from '../../../App'


const ReturnChat = ({ contact }) => {
        const { user, students, hscounselors, collegecounselors, visible, setVisible, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        return (
                <Segment raised style={{ "overflow-y": 'auto', maxHeight: 500 }}>
                        {/* <Menu pointing vertical>
                                {relevantpeople.map(coachid =>
                                        <Menu.Item
                                                name={coachid}
                                                active={activeItem === coachid}
                                                onClick={() => setActiveItem(coachid)}
                                        />
                                )}
                        </Menu> */}
                </Segment>
        )
}
export default ReturnChat;