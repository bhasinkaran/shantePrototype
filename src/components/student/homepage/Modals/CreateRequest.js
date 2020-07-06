import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Form, Header, Divider, Grid, Loader, Button, Image, Modal, Icon, Input } from 'semantic-ui-react'
import { Router, useParams } from 'react-router-dom';
import { InfoContext } from '../../../../App'
import { dbStudents, dbRequests, dbCoaches } from '../../../../firebase/firebase'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const ModalRequest = ({ open, setOpen }) => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [subject, setSubject] = useState("");
        const [coach, setCoach] = useState("");
        const [priority, setPriority] = useState("");
        const [body, setBody] = useState("");
        const [coachesList,setCoachesList]=useState([]);
        const [date, setDate] = useState(new Date());
        useEffect(()=>{
                if(students&& students[user] &&students[user]['coaches'] && coaches){
                        var temp=[];
                        var index=0;
                        Object.values(students[user]['coaches']).map(name=>temp.push({key: temp.length, value:name, text:coaches[name]['firstName'] }));
                        console.log(temp);
                        setCoachesList(temp);
                }
        }, [user, coaches]);
        const priorities = [
                {
                        key: 0,
                        value: "High",
                        text: "High"
                },
                {
                        key: 1,
                        value: "Medium",
                        text: "Medium"
                },
                {
                        key: 2,
                        value: "Low",
                        text: "Low"
                },
        ];

        function writeFirebase() {
                const key = dbRequests.push({
                        user: user,
                        coach: coach,
                        subject: subject,
                        priority: priority,
                        date: date.getDate(),
                        day: date.getDay(),
                        year: date.getFullYear(),
                        month: date.getMonth(), // returns month based on 0
                        time: date.getTime(),
                        body: body
                })
                const  specialKey = key.getKey();
                dbStudents.child(user).child('requests').push(specialKey);
                dbCoaches.child(coach).child('requests').push(specialKey);

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
        var index=0;
        var temp=[];
        return (
                <Modal open={open}>
                        <Header icon='archive' content='Create Request' />
                        <Modal.Content>
                                <Form>
                                        <Form.Group inline widths='equal'>
                                                
                                                <Form.Select 
                                                fluid
                                                label='To'
                                                options={coachesList}
                                                required={true}
                                                placeholder='Choose Coach'
                                                onChange={(e, { value }) => {
                                                  setCoach(value)
                                                  console.log(value);
                                                }}

                                                // fluid label='To' required placeholder='Enter Coach.' 
                                                
                                                
                                                />

<Form.Select 
                                                fluid
                                                label='Priority'
                                                options={priorities}
                                                required={true}
                                                placeholder='Choose Priority'
                                                onChange={(e, { value }) => {
                                                  setPriority(value)

                                                }}
                                                // fluid label='To' required placeholder='Enter Coach.' 
                                                
                                                
                                                />
                                                
                                                
                                        </Form.Group>
                                        <Header as='h5' style={{marginBottom: "2px"}} >Due Date</Header>
                                               <TestDate />
                                </Form>
                                <Divider></Divider>
                                <Form>
                                        
                                                <Form.Input label="Subject" required={true} value={subject} onChange={(e, { value }) => setSubject(value)} placeholder='Enter Subject...'>
                                                </Form.Input>
                                               
                                                
                                        
                                </Form>
                                <br />
                                <Form>
                                        
                                        <Form.TextArea rows={3} label="Body" required={true}  value={body} onChange={(e, { value }) => setBody(value)} placeholder='Enter Body...'>
                                                </Form.TextArea>

                                               
                                               
                                        
                                </Form>

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
export default ModalRequest;