import React, { useState, useContext, useEffect } from 'react'
import { Header, Segment, Label, Button, Divider, Icon, Loader, Image, Grid } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { InfoContext } from '../../../App';
const CoachProfile = () => {
        const [coach, setCoach] = useState('');
        const { coachid } = useParams();
        const { user, students, hscounselors, collegecounselors, visible, setVisible, colleges, messages, coaches, chats } = React.useContext(InfoContext);

        useEffect(() => {
                setCoach(coaches[coachid]);
                console.log(coaches[coachid]);
                console.log(coachid);

                console.log(coaches);

        }, [coachid, coaches]);
        if (coach) {
                return (
                        <Segment compact>
                                <Grid compact centered>
                                        <Grid.Column width="5">
                                                <Grid.Row style={{marginTop:"25px"}} >
                                                        <Image verticalAlign='center' size='massive' src={coach.url} />
                                                </Grid.Row>
                                                <Divider />
                                                <Grid.Row>
                                                        <Header as='h1' textAlign='center' color="teal">"{coach.quote}"</Header>
                                                </Grid.Row>
                                        </Grid.Column>
                                        <Grid.Column width="11">
                                                <Grid centered padded>
                                                        <Grid.Row>

                                                                <Segment inverted color='teal' >
                                                                        <Header color='black' as="h1" floated='left'>
                                                                                Name:
                                                                </Header>
                                                                        <Header as="h1" floated='left'>
                                                                                {coach.firstName}  {coach.lastName} |
                                                                </Header>
                                                                        <Header as="h1" color='black' floated='left'>
                                                                                {coach.location} |
                                                                        </Header>
                                                                        <Header as="h1" floated='right'>
                                                                                 {coach.pronouns}
                                                                        </Header>

                                                                </Segment>
                                                        </Grid.Row>
                                                        <Segment color='orange' >
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                
                                                                <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2'>
                                                                               Why I Coach? 
                                                                        </Header>
                                                                        <Header as='h3'>
                                                                        {coach.about}
                                                                        </Header>
                                                                        <Divider />
                                                                </div>
                                                        </Grid.Row>
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2' >
                                                                               Favorite Part About College Applications
                                                                        </Header>
                                                                        <Header as='h3'>
                                                                        {coach.favoritepart}
                                                                        </Header>
                                                                        <Divider />
                                                                </div>
                                                        </Grid.Row>
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2'>
                                                                        {coach.firstName} Enjoys
                                                                        </Header>
                                                                        <Label.Group color='teal' alignItems="center" textAlign="center">
                                                                                {coach.enjoys.map(strength => <Label size='large' >
                                                                                        {strength}
                                                                                </Label>)}
                                                                        </Label.Group>
                                                                        <Divider />
                                                                </div>
                                                        </Grid.Row>
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2' >
                                                                        {coach.firstName}'s Strengths
                                                                        </Header>
                                                                        <Label.Group color='teal' alignItems="center" textAlign="center">
                                                                                {coach.strengths.map(strength => <Label size='large'>
                                                                                        {strength}
                                                                                </Label>)}
                                                                        </Label.Group>
                                                                        <Divider />
                                                                </div>
                                                        </Grid.Row>
                                                        </Segment>
                                                </Grid>
                                        </Grid.Column>
                                </Grid>
                        </Segment >);
        }
        else {
                return (<div>Go ahead</div>)
        }
}

export default CoachProfile