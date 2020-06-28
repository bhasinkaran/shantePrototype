import {Header, Segment, } from 'semantic-ui-react';
import React from 'react';
import { Link} from 'react-router-dom';

const PageHeader = () => {
    return (
      <Segment
      basic
      style={{ backgroundColor: "#1DB954", textAlign: "center", marginBottom: "0px"}} 
//       marginBottom: "10px" }
      fluid="true">
          <Header
            as={Link}
            to={`/`}
            inverted 
            content="PUT COMPANY NAME HERE" 
            size="large" 
            color="black"
            style={{cursor: "default"}}
          />
    </Segment>
    );
  };

  export default PageHeader;