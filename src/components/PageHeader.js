import {Header, Segment, } from 'semantic-ui-react';
import React from 'react';
import { Link} from 'react-router-dom';

const PageHeader = () => {
    return (
      <Segment
      basic
      style={{ backgroundColor: "#80ffff", textAlign: "center", marginBottom: "0px"}} 
//       marginBottom: "10px" }
      fluid="true">
          <Header
            as={Link}
            to={`/`}
            content="Tassel Turn" 
            size="large" 
            color='black'
            style={{cursor: "default"}}
          />
    </Segment>
    );
  };

  export default PageHeader;