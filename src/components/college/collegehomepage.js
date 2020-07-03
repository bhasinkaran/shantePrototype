import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image, Segment } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { InfoContext } from '../../App'
import Imagee from './Imagee'
const ReturnCollege = () => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const arrayColors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
        const number = Math.floor((Math.random() * 12));
        const { name } = useParams();
        if(colleges)
        return (
             
                <Grid>
                        <Grid.Column width={4}>
                                <Image size="huge" src={colleges[name].logopic}></Image>
                                <Image src={colleges[name].collegepic}></Image>
                        </Grid.Column>
                        <Grid.Column width={12}>
                                <Imagee srcc={colleges[name].collegepic}/>
                                <Grid.Row>
                                        <Grid.Column width={16}>
                                                <Segment animated color={arrayColors[number]} raised>
                                                        <Header color='teal' style={{ marginTop: "-5px" }} >{colleges[name].name}</Header>
                                                        <Header color='violet' style={{ marginTop: "-10px" }} >{colleges[name].targetlocations}</Header>
                                                        <Grid.Row>
                                                                <Grid.Column width={8}>
                                                                        <Header style={{ marginTop: "-5px" }} as="h4">Popular Areas of Study</Header>
                                                                        {colleges[name].targetmajors.slice(0, 3).map(major => <Header as={'h5'} style={{ marginTop: "-10px" }}>{major}</Header>)}
                                                                </Grid.Column>
                                                                <Grid.Column width={8}>
                                                                        <Header textAlign={"center"} style={{ marginTop: "-5px" }} as="h4">Tuition</Header>
                                                                        <Header textAlign={"center"} style={{ marginTop: "-10px" }} as="h5">{"$" + colleges[name].tuition} {colleges[name].aid ? " offering " : " with no "}  {"need-based aid"}</Header>

                                                                </Grid.Column>
                                                        </Grid.Row>
                                                </Segment>
                                        </Grid.Column>
                                </Grid.Row>
                        </Grid.Column>
                </Grid>
        );
        else{
                return "Loading"
        }
}
export default ReturnCollege;