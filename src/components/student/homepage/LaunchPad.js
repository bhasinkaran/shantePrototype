import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Icon, Header, Divider, Grid, Loader, Image, Button } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { dbStudents } from '../../../firebase/firebase'
import { InfoContext } from '../../../App';

const LaunchPad = () => {
        return (
                <Grid>
                        <Grid.Row>
                                <Grid.Column>
                                        <Header as='h1' image='https://react.semantic-ui.com/images/icons/school.png' content='What is next for you?' dividing />
                                </Grid.Column>

                        </Grid.Row>
                        <Grid.Row>
                                <Grid.Column width={2}>

                                </Grid.Column>
                                <Grid.Column width={12}>
                                        {/* vertical */}
                                        {/* <Button.Group   labeled icon style={{ textAlign: "center" }} size='huge'> */}
                                        <Button fluid={true} style={{ textAlign: "center" }} as={Link} to={'/student/coaches'} fluid > <Icon name='address card' />Coaches</Button>
                                        {/* </Button.Group> */}
                                        <Divider />
                                        {/* as={Link} to={'/student/goals'} */}
                                        <Button fluid style={{ textAlign: "center" }}  fluid >  <Icon name='bolt' /> Goals</Button>
                                        <Divider />
                                        {/* as={Link} to={'/student/profile'} */}
                                        <Button fluid style={{ textAlign: "center" }}  fluid > <Icon name='street view'></Icon>Profile</Button>
                                        <Divider />
                                        {/* to={'/student/requests'} */}
                                        <Button fluid style={{ textAlign: "center" }} as={Link}  fluid > <Icon name='question' />Requests</Button>
                                        <Divider />
                                        <Button fluid style={{ textAlign: "center" }} as={Link} to={'/student/colleges'} fluid > <Icon name='map signs' />Colleges</Button>

                                </Grid.Column>
                                <Grid.Column width={2}>
                                </Grid.Column>

                        </Grid.Row>
                </Grid>
        );
}
export default LaunchPad;