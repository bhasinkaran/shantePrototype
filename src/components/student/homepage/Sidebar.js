import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleSidebar = () => {
  const [visible, setVisible] = useSta(true)

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Profile
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Goals
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Coaches
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SidebarExampleSidebar
