import {Header, Segment, Grid,Button } from 'semantic-ui-react';
import React , {useState} from 'react';
import { Link, Redirect} from 'react-router-dom';
import {InfoContext} from '../App'

const PageHeader = () => {
  const {user, setUser,logged, setLogged, setVisible, visible, sidebool, setSideBool, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);

  const [redirectLogout, setRedirectLogout]=useState(false);
  const [redirectSettings, setRedirectSettings]=useState(false);
  const [logout, setLogout]=useState(false);
  const [home, setRedirectHome]=useState(false);
    return (
      <Segment
      basic
      style={{ backgroundColor: "#80ffff", textAlign: "center", marginBottom: "0px"}} 
//       marginBottom: "10px" }
      fluid="true">
        <Grid centered >
          <Grid.Row>
            <Grid.Column width={"3"}>
            <Header
            as={Link}
            to={`/`}
            content="Tassel Turn" 
            size="large" 
            color='black'
            style={{cursor: "default"}}
          />
            </Grid.Column>
          <Grid.Column width={1}>
            <Button.Group>
            <Button onClick={()=>setRedirectHome(true)} inverted icon='home' color ='purple' >
            </Button>
            <Button onClick={()=>setRedirectSettings(true)} inverted icon='settings' color ='purple' >
            </Button>
            <Button inverted onClick={()=>{
              setRedirectLogout(true);
              setUser("");
              setLogged("");
            }} icon='arrow left' color ='purple' >
              Logout
            </Button>
            <Button inverted onClick={()=>{
              setVisible(true);
            }} color ='purple' >
              Menu
            </Button>
            </Button.Group>
            {/* <Button inverted icon='arrow left' color ='black' >
              Logout
            </Button> */}
          </Grid.Column>
          </Grid.Row>
        </Grid>
          
          {redirectLogout ? <Redirect to={`/`} push={true} /> : ""}
          {redirectSettings ? <Redirect to={`/student/settings`} push={true} /> : ""}
          {home ? <Redirect to={`/student`} push={true} /> : ""}

    </Segment>
    );
  };

  export default PageHeader;