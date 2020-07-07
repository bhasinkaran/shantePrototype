import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Menu, Header, Divider, Grid, Loader, Label, Button, Image, Segment } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { InfoContext } from '../../../App'
import Imagee from './Imagee'
import Location from './location'
const ReturnCollege = () => {
        const [content, setContent] = useState('General Info')

        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const arrayColors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
        const number = Math.floor((Math.random() * 12));
        const { name } = useParams();
        if (colleges)
                return (
                        <Grid celled="internally">
                                <Grid.Column width={4}>
                                        <Image size='medium' src={colleges[name].logopic}></Image>
                                        <Grid.Row>
                                                <Header textAlign="center" color='teal' style={{ marginTop: "-5px" }} as="h2">{colleges[name].name}</Header>
                                                <Header textAlign="center" color='violet' style={{ marginTop: "-10px" }} as="h2" >{colleges[name].targetlocations}</Header>
                                                <Divider>
                                                </Divider>
                                                <Header textAlign="center" style={{ marginTop: "-5px" }} as="h3">Founded: {colleges[name].founded}</Header>
                                                <Header textAlign="center" color='violet' style={{ marginTop: "-10px" }} as="h3" >Type: {colleges[name].schooltype} University</Header>
                                                <Header textAlign="center" color='violet' style={{ marginTop: "-10px" }} as="h3" >Total Size: {colleges[name].size} Students </Header>
                                                <Divider>
                                                </Divider>
                                                <Header textAlign="center" style={{ marginTop: "-5px" }} as="h3">FAFSA Code: {colleges[name].fafsacode}</Header>
                                                <Header textAlign="center" color='violet' style={{ marginTop: "-10px" }} as="h3" >Type: {colleges[name].majorcount}+ Majors</Header>
                                                <Header textAlign="center" color='violet' style={{ marginTop: "-15px" }} as="h3" >Graduate Programs and Certifications</Header>

                                        </Grid.Row>
                                        {/* <Image src={colleges[name].collegepic}></Image> */}
                                </Grid.Column>
                                <Grid.Column width={12}>
                                        {/* <Imagee srcc={colleges[name].collegepic} /> */}
                                        <Grid.Row>
                                                <Grid.Column width={16}>
                                                        <Segment animated color={arrayColors[number]}>
                                                                <MenuContent setContent={setContent} content={content} />
                                                                <GeneralInfo active={content == 'General Info'} name={name} />
                                                                <Financials active={content == 'Financials'} name={name} />
                                                                <StudentLife active={content == 'Student Life'} name={name} />
                                                                <Housing active={content == 'Housing'} name={name} />

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
const MenuContent = ({ content, setContent }) => {


        return (
                <div>
                        <Menu fluid widths={4} pointing>
                                <Menu.Item
                                        name='General Info'
                                        active={content === 'General Info'}
                                        onClick={() => setContent('General Info')}
                                />
                                <Menu.Item
                                        name='Financials'
                                        active={content === 'Financials'}
                                        onClick={() => setContent('Financials')}
                                />
                                <Menu.Item
                                        name='Student Life'
                                        active={content === 'Student Life'}
                                        onClick={() => setContent('Student Life')}
                                />
                                <Menu.Item
                                        name='Housing '
                                        active={content === 'Housing'}
                                        onClick={() => setContent('Housing')}
                                />

                        </Menu>
                </div>
        )

}
const GeneralInfo = ({ active, name }) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);


        if (active) {
                return (
                        <Grid centered celled="internally">
                                <Grid.Row>
                                        <Divider></Divider>
                                </Grid.Row>
                                <Grid.Row>
                                        <Grid.Column width={16}>
                                                <Header textAlign={"center"} color='violet' style={{ marginTop: "-5px" }} as="h3">About</Header>
                                                <Header textAlign={"center"} style={{ marginTop: "-5px" }} as="h3">{colleges[name].about}</Header>

                                        </Grid.Column>

                                </Grid.Row>
                                {/* <Grid.Row>
                                <Grid.Column width={16}>
                                        <Header textAlign={"center"} color='violet' style={{ marginTop: "-5px" }} as="h3">Location</Header>
                                        <Location lat={colleges[name].lat} long={colleges[name].long} />
                                </Grid.Column>
                        </Grid.Row> */}
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
                                                        <Grid.Row centered style={{ marginTop: "-10px" }}  >
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
                                                                                <Header textAlign="center" style={{ marginTop: "-5px" }} as="h3"> SAT </Header>
                                                                        </Grid.Row>
                                                                        <Grid.Row>
                                                                                <Header textAlign="center" style={{ marginTop: "5px" }} as="h5"> {colleges[name]['satlow']} - {colleges[name]['sathigh']} </Header>
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
                                        <Divider></Divider>
                                </Grid.Row>
                                <Image size='huge' circular src={colleges[name].collegepic} />

                        </Grid>

                )
        }
        else {
                return null;
        }
}
const Financials = ({ active, name }) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);


        if (active) {
                return (
                        <Grid centered>
                                <Grid.Row>
                                        <Divider></Divider>
                                </Grid.Row>
                                {colleges[name]['financials'].map(item =>

                                        <Grid.Row>
                                                <Segment fluid color={'blue'}>

                                                        <Header style={{ marginTop: "5px" }} as="h3">{item}</Header>
                                                        <Divider></Divider>

                                                </Segment>
                                        </Grid.Row>



                                )}
                        </Grid>

                )
        }
        else {
                return null;
        }
}
const StudentLife = ({ active, name }) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        if (active) {
                return (
                        <Grid centered>
                        <Grid.Row>
                                <Divider></Divider>
                        </Grid.Row>
                        {colleges[name]['studentlife'].map(item =>

                                <Grid.Row>
                                        <Segment fluid color={'orange'}>

                                                <Header style={{ marginTop: "5px" }} as="h1">{item}</Header>
                                                <Divider></Divider>

                                        </Segment>
                                </Grid.Row>



                        )}
                </Grid>
                )
        }
        else {
                return null;
        }
}
const Housing = ({ active, name }) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        if (active) {
                return (
                        <Grid centered>
                        <Grid.Row>
                                <Divider></Divider>
                        </Grid.Row>
                        {colleges[name]['housing'].map(item =>

                                <Grid.Row>
                                        <Segment fluid color={'violet'}>

                                                <Header style={{ marginTop: "5px" }} as="h3">{item}</Header>
                                                <Divider></Divider>

                                        </Segment>
                                </Grid.Row>



                        )}
                </Grid>

                )
        }
        else {
                return null;
        }
}
export default ReturnCollege;