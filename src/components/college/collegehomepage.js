import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Label, Button, Image, Segment } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { InfoContext } from '../../App'
import Imagee from './Imagee'
const ReturnCollege = () => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const arrayColors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
        const number = Math.floor((Math.random() * 12));
        const { name } = useParams();
        if (colleges)
                return (

                        <Grid celled="internally">
                                <Grid.Column width={4}>
                                        <Image size="huge" src={colleges[name].logopic}></Image>
                                        <Image src={colleges[name].collegepic}></Image>
                                </Grid.Column>
                                <Grid.Column width={12}>
                                        <Imagee srcc={colleges[name].collegepic} />
                                        <Grid.Row>
                                                <Grid.Column width={16}>
                                                        <Segment animated color={arrayColors[number]}>
                                                                <Header textAlign="center" color='teal' style={{ marginTop: "-5px" }} as="h1">{colleges[name].name}</Header>
                                                                <Header textAlign="center" color='violet' style={{ marginTop: "-10px" }} as="h2" >{colleges[name].targetlocations}</Header>

                                                                <Grid centered celled="internally" >
                                                                        <Grid.Row>
                                                                                <Grid.Column width={5}>
                                                                                        <Header style={{ marginTop: "-5px" }} as="h3">Popular Areas of Study</Header>
                                                                                        <Label.Group textAlign="center" color='violet'>
                                                                                                {colleges[name].targetmajors.map(major => <Label as='a' style={{ marginTop: "-10px" }}>{major}</Label>)}
                                                                                        </Label.Group>
                                                                                </Grid.Column>
                                                                                <Grid.Column width={5}>
                                                                                        
                                                                                        <Grid celled="internally" >
                                                                                                <Grid.Row>
                                                                                                        <Grid.Column>
                                                                                                                <Header textAlign="center" style={{ marginTop: "-5px" }} as="h3"> Typical Scores </Header>
                                                                                                        </Grid.Column>
                                                                                                </Grid.Row>
                                                                                        <Grid.Row centered  style={{ marginTop: "-10px" }}  >
                                                                                        <Grid.Column width={8} centered>
                                                                                                <Grid.Row>
                                                                                                        <Header textAlign="center" style={{ marginTop: "-5px" }} as="h3"> ACT </Header>
                                                                                                </Grid.Row>
                                                                                                <Grid.Row>
                                                                                                        <Header textAlign="center" style={{ marginTop: "5px" }} as="h5"> {colleges[name]['actlow']} - {colleges[name]['acthigh']} </Header>
                                                                                                </Grid.Row>
                                                                                        </Grid.Column>
                                                                                        <Grid.Column width={8} centered >
                                                                                                <Grid.Row>
                                                                                                        <Header  textAlign="center" style={{ marginTop: "-5px" }} as="h3"> SAT </Header>
                                                                                                </Grid.Row>
                                                                                                <Grid.Row>
                                                                                                        <Header  textAlign="center" style={{ marginTop: "5px" }} as="h5"> {colleges[name]['satlow']} - {colleges[name]['sathigh']} </Header>
                                                                                                </Grid.Row>
                                                                                        </Grid.Column>
                                                                                        </Grid.Row>
                                                                                        </Grid>
                                                                                </Grid.Column>
                                                                                <Grid.Column width={5}>
                                                                                        <Header textAlign={"center"} style={{ marginTop: "-5px" }} as="h3">Tuition</Header>
                                                                                        <Header textAlign={"center"} style={{ marginTop: "-10px" }} as="h4">{"$" + colleges[name].tuition} {colleges[name].aid ? " offering " : " with no "}  {"need-based aid"}</Header>
                                                                                        <Header textAlign={"center"} style={{ marginTop: "-5px" }} as="h3">Average Financial Aid</Header>
                                                                                        {colleges[name].aid ? <Header textAlign={"center"} style={{ marginTop: "-10px" }} as="h4">${colleges[name].avgfinancialaid} with  {`${colleges[name].proportionaid}`}% of students on aid </Header> : ""}
                                                                                </Grid.Column>
                                                                        </Grid.Row>
                                                                        <Grid.Row>
                                                                                <Grid.Column width={16}>
                                                                                        <Header textAlign={"center"} color='violet' style={{ marginTop: "-5px" }} as="h3">About</Header>
                                                                                        <Header textAlign={"center"} style={{ marginTop: "-5px" }} as="h4">{colleges[name].about}</Header>

                                                                                </Grid.Column>

                                                                        </Grid.Row>
                                                                </Grid>

                                                        </Segment>
                                                </Grid.Column>
                                        </Grid.Row>
                                </Grid.Column>
                        </Grid>
                );
        else {
                return "Loading"
        }
}
export default ReturnCollege;