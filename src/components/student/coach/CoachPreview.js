import React from 'react'
import { Header, Segment, Label, Button, Divider, Icon, Image, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const CoachPreview = ({ coach }) => (
        <Segment compact as={Link} to={`/student/coach/${coach.username}`}>
                <Grid compact >
                        <Grid.Column width="3">
                                <Image size='big' circular src={coach.url} />
                        </Grid.Column>
                        <Grid.Column width="11">
                                <Grid.Row>
                                        <Header textAlign='center' as="h1">
                                                {coach.firstName}  {coach.lastName}, {coach.pronouns}
                                        </Header>
                                </Grid.Row>
                                <Grid.Row style={{ marginTop: "10px" }}>
                                        <Header textAlign='center' as='h2' color="teal">
                                                "{coach.quote}"
                                        </Header>
                                </Grid.Row>
                                <Grid.Row style={{ marginTop: "5px" }}>
                                        <Header textAlign='center' as='h3' color="violet">
                                                {coach.location}
                                        </Header>
                                </Grid.Row>
                                <Grid.Row style={{ marginTop: "5px" }}>
                                        <div style={{ alignItems: "center" }}>
                                                <Label.Group color='teal' alignItems="center" textAlign="center">
                                                        {coach.strengths.map(strength => <Label>
                                                                {strength}
                                                        </Label>)}
                                                </Label.Group>
                                        </div>
                                </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width="2">
                                <Button fluid>
                                        See Profile
                                </Button>
                                <Divider></Divider>
                                <Button fluid>
                                        Message
                                </Button>
                                <Divider></Divider>
                                <Button fluid>
                                        See Mutual Fit
                                </Button>
                        </Grid.Column>

                </Grid>
        </Segment >
)

export default CoachPreview