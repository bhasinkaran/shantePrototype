import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { InfoContext } from '../../../App'
import ReturnChat from './ReturnChat'


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
                                <Grid>
                                        <Grid.Column width={3}>
                                                <Segment compact>
                                                        <Segment raised style={{ "overflow-y": 'auto', maxHeight: 500 }}>
                                                                <Menu pointing vertical>
                                                                        {relevantpeople.map(coachid =>
                                                                                <Menu.Item
                                                                                        name={coachid}
                                                                                        active={activeItem === coachid}
                                                                                        onClick={() => setActiveItem(coachid)}
                                                                                />
                                                                        )}
                                                                </Menu>
                                                        </Segment>
                                                </Segment>
                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                                <Segment compact>
                                                        <ReturnChat contact={activeItem} />
                                                        
                                                </Segment>

                                        </Grid.Column>
                                </Grid>
                        </div>
                )
        else {
                return <div>Not loaded</div>
        }

}

export default ChatsHomepage;