import React, { useState, useContext, createRef, useEffect } from 'react'
import { Button, Divider, Form, Grid, Header, Image, Message, Segment, Sticky, Icon, Modal } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import {InfoContext}from '../../App'

const StudentLogin = () => {
  const [error, setError] = useState(false);
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const {user, setUser, studentLogged, setStudentLogged, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);


  const contextRef = createRef();
  function CheckPass(pass, username) {
    console.log(username)
    console.log(pass)
    if (students[username]) {
      if (students[username]["password"] === pass) {
        setStudentLogged(true);
        setUser(username);
      }
    }
    else if (pass && username) {
        console.log("YES")
        setError(true)
    }
  }

  function redirect() {
     if (studentLogged == true) {
      return  <Redirect to={`/student`} push={true} />
    }
  }
  return (<div ref={contextRef}>
    <Sticky context={contextRef} >
      <div>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />

      </div>
      <Grid textAlign='center' style={{ height: '100vh' }} padded>

        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo192.png' /> Log-in to your account
    </Header>
          <Form size='large' warning={error}>
            <Segment stacked>
              <Form.Input fluid value={username} icon='user' required iconPosition='left' onChange={(e) => { setUsername( e.target.value) }} placeholder='Username' />
              <Form.Input
                onChange={(e) => { setPass(e.target.value) }}
                fluid
                required
                icon='lock'
                value={pass}
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Form.Button color='teal' fluid size='large' onClick={() => CheckPass(pass, username)}>
                Login
                </Form.Button>
            </Segment>
            <div style={{ maxWidth: 450 }}>
              <Message
                warning
                floating
                content="Your username or password dones't match our records; please try again!"
                size="large"
              />
            </div>
          </Form>
          <Message>
            New to us? <a href='/signup/student'>Sign Up</a>
          </Message> 
        </Grid.Column>
      </Grid>
      {/* <Modal
        open={error}
        onClose={()=>{
                setUsername("");
                setPass("")
        }}
        basic
        size='small'
      >
        <Header icon='browser' content='Unsuccesful Login' />
        <Modal.Content>
          <h3>Sorry - Your details didn't match our records.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={()=>setError(false)} inverted>
            <Icon name='checkmark' /> Try Again
          </Button>
        </Modal.Actions>
      </Modal> */}
      {username ? redirect() : ""}
      {/* {error? "Erorr": "No error"} */}
    </Sticky>
  </div>
  )
}

export default StudentLogin