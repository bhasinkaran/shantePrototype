import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image, Segment } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { InfoContext } from '../../../App'

const ReturnCollege = ({ college, hashmap }) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const arrayColors = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black'];
        const number = Math.floor((Math.random() * 12) );
        // const [commonmajors, setCommon] = useState([]);
        // useEffect(() => {
        //         var temp = [];
        //         hashmap.map(item => {
        //                 if (item[0] == college.name) {
        //                         item[1].map(major => {
        //                                 temp.push(major);
        //                         })
        //                 }
        //         })
        //         setCommon(temp);
        // }, [hashmap])
        return (
                <Grid.Row>
                        <Grid.Column width={16}>
                                <Link to={`/student/college/${college.name}`}>
                                <Segment animated color={arrayColors[number]} raised>
                                <Header color='teal' style={{ marginTop: "-5px" }} >{college.name}</Header>
                                <Header color='violet' style={{ marginTop: "-10px" }} >{college.targetlocations}</Header>
                                <Grid.Row>
                                        <Grid>
                                                <Grid.Column width={8}>
                                                        <Header style={{ marginTop: "-5px" }} as="h4">Popular Areas of Study</Header>
                                                        {college.targetmajors.slice(0,3).map(major => <Header as={'h5'} style={{ marginTop: "-10px" }}>{major}</Header>)}
                                                </Grid.Column>
                                                <Grid.Column width={8}>
                                                        <Header textAlign={"center"} style={{ marginTop: "-5px" }} as="h4">Tuition</Header>
                                                        <Header textAlign={"center"} style={{ marginTop: "-10px" }} as="h5">{"$" + college.tuition} {college.aid ? " offering " : " with no "}  {"need-based aid"}</Header>

                                                </Grid.Column>
                                        </Grid>
                                </Grid.Row>
                                </Segment>
                                </Link>

                        </Grid.Column>
                </Grid.Row>


        );
}
export default ReturnCollege;