import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { InfoContext } from '../../../App'


const ChatsHomepage = () => {
        const { user, students, hscounselors, collegecounselors, visible, setVisible, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [activeItem, setActiveItem] = useState("");
        const [relevantpeople, setRelevantPeople] = useState([]);
        useEffect(() => {
                if (user && students) {
                        setRelevantPeople(students[user]['coaches']);
                }
        }, [user, students])
        useEffect(() => {
                if (relevantpeople.length > 0) {
                        setActiveItem(relevantpeople[0]);
                }
        }, [relevantpeople])
        if (user && students)
                return (
                        <div>
                                <Segment style={{ overflow: 'auto', maxHeight: 200 }}>
                                        <Menu pointing vertical>
                                                {relevantpeople.map(coachid =>
                                                        <Menu.Item
                                                                name={coachid}
                                                                active={activeItem === coachid}
                                                                onClick={() => setActiveItem(coachid)}
                                                        />
                                                )}
                                                <Menu.Item
                                                        name={'coachid'}
                                                        active={activeItem === 'coachid'}
                                                        onClick={() => setActiveItem('coachid')}
                                                />
                                                <Menu.Item
                                                        name={'coachid'}
                                                        active={activeItem === 'coachid'}
                                                        onClick={() => setActiveItem('coachid')}
                                                />
                                                <Menu.Item
                                                        name={'coachid'}
                                                        active={activeItem === 'coachid'}
                                                        onClick={() => setActiveItem('coachid')}
                                                />
                                                <Menu.Item
                                                        name={'coachid'}
                                                        active={activeItem === 'coachid'}
                                                        onClick={() => setActiveItem('coachid')}
                                                />
                                        </Menu>
                                </Segment>
                        </div>
                )
        else {
                return <div>Not loaded</div>
        }

}

export default ChatsHomepage;