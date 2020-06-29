import React from 'react'
import { List, Segment } from 'semantic-ui-react'
import {InfoContext}from '../../App'

const UpcomingDeadlines = ()=>{
        const {user, students,hscounselors, collegecounselors, colleges, messages, coaches, chats} = React.useContext(InfoContext);

        return(
                <Segment inverted>
                <List divided inverted relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header>Snickerdoodle</List.Header>
                      An excellent companion
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header>Poodle</List.Header>A poodle, its pretty basic
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header>Paulo</List.Header>
                      He's also a dog
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
        )
}
export default UpcomingDeadlines;