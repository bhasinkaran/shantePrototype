import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image, Modal, Icon, Input, Form } from 'semantic-ui-react'
import { Router, useParams } from 'react-router-dom';
import { InfoContext } from '../../../../App'
import { dbStudents } from '../../../../firebase/firebase'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const ModalGoal = ({ open, setOpen }) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [birthday, setBirthday] = useState(null);
        const [difficulty, setDifficulty] = useState(null);
        const difficulties = [
                {
                        key: 0,
                        text: "1",
                        value: "1"
                },
                {
                        key: 1,
                        text: "2",
                        value: "2"
                },
                {
                        key: 2,
                        text: "3",
                        value: "3"
                },
                {
                        key: 3,
                        text: "4",
                        value: "4"
                },
                {
                        key: 4,
                        text: "5",
                        value: "5"
                },
        ];

        const [date, setDate] = useState(new Date());
        const [name, setName] = useState("");
        function writeFirebase() {
                dbStudents.child(user).child('goals').push({
                        name: name,
                        difficulty: difficulty,
                        date: date.getDate(),
                        day: date.getDay(),
                        year: date.getFullYear(),
                        month: date.getMonth(), // returns month based on 0
                        time: date.getTime()
                })
        }
        const TestDate = () => {
                const onChange = (e, data) => {
                        setDate(data.value)
                        console.log(data.value);
                        console.log(data);
                };
                return <SemanticDatepicker
                        onChange={onChange}
                        clearable={true}
                        keepOpenOnClear={true}
                        locale="en-US"
                        value={date}
                />;
        };

        return (
                <Modal open={open}>
                        <Header icon='archive' content='Create Goal' />
                        <Modal.Content>
                                <Header color="teal">
                                        Your coaches will be notified to approve this deadline!
                                </Header>
                                <Input value={name} onChange={(e, { value }) => setName(value)} placeholder='Enter Goal Name...' />
                                <Divider></Divider>
                                <Header color="brown">
                                        Enter Goal Completion Date:
                                </Header>
                                <TestDate />
                                <Header color="brown">
                                        How difficult is this goal?
                                </Header>
                                <Form.Field>
                                        <Form.Select

                                                fluid
                                                // label=''
                                                options={difficulties}
                                                required={true}
                                                placeholder='1'
                                                onChange={(e, { value }) => {
                                                        setDifficulty(value)
                                                        console.log(value);
                                                }}

                                        >

                                        </Form.Select>
                                </Form.Field>
                        </Modal.Content>
                        <Modal.Actions>
                                <Button basic color='red' onClick={() => setOpen(false)}>
                                        <Icon name='remove' /> Go Back
                                </Button>
                                <Button color='green' inverted onClick={() => {
                                        writeFirebase();
                                        setOpen(false);
                                }}>
                                        <Icon name='checkmark' /> Finalize
                                </Button>
                        </Modal.Actions>
                </Modal>
        );
}
export default ModalGoal;