import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image , Modal, Icon, Input} from 'semantic-ui-react'
import { Router, useParams } from 'react-router-dom';
import { InfoContext } from '../../../../App'
import {dbStudents} from '../../../../firebase/firebase'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const ModalGoal = ({ open, setOpen}) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const[birthday, setBirthday]=useState(null);
        const[difficulty, setDifficulty]=useState(null);

        const [date, setDate] = useState(new Date());
        const[name,setName]=useState("");
        function writeFirebase(){
                dbStudents.child(user).child('goals').push({
                        name:name,
                        difficulty: difficulty,
                        date:date.getDate(),
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
                                <Input value={name} onChange={(e, {value})=>setName(value)} placeholder='Enter Goal Name...' />
                               <Divider></Divider>
                                <Header color="brown">
                                       Enter Goal Completion Date:
                                </Header>
                                <TestDate />
                               
                        </Modal.Content>
                        <Modal.Actions>
                                <Button basic color='red' onClick={()=>setOpen(false)}>
                                        <Icon name='remove' /> Go Back
                                </Button>
                                <Button color='green' inverted onClick={()=>writeFirebase()}>
                                        <Icon name='checkmark' /> Finalize
                                </Button>
                        </Modal.Actions>
                </Modal>
        );
}
export default ModalGoal;