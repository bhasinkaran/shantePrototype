import React from 'react'
import { List, Segment, Button } from 'semantic-ui-react'
import { InfoContext } from '../../../App'

const UpcomingDeadlines = () => {
  const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
  const list = Object.values(students[user]['deadlines']);
  console.log(list);
  function helper(item){
    var month = item['month']+1
     return(
        <List.Item>
                    <List.Content>
                      <List.Header>{item['name']}</List.Header>
                      {"Due on "+ item['day']+"/"+month+"/"+item['year']}
                    </List.Content>
        </List.Item>);
  }
  return (
    <Segment inverted color='teal'>
      <List divided inverted relaxed>
          {list.map(item=>helper(item))}
      </List>
    </Segment>
  )
}
export default UpcomingDeadlines;