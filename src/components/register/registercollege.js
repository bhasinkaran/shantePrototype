import React, { useState, useContext, createRef, useEffect } from 'react';
import { Header, Checkbox, Card, Container, Segment, Sticky, Grid, Input, GridRow, Divider, GridColumn } from 'semantic-ui-react';
import { Button, Form, Icon, Image, List, Label, Transition, Modal, Dropdown } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';
import { dbStudents, dbCoaches, dbColleges } from '../../firebase/firebase';
import { InfoContext } from '../../App'
import storage from '../../firebase/firebase'

const PioneerForm = () => {
        const { user, setUser, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const contextRef = createRef();
        const [name, setName] = useState("");
        const [acceptrate, setAcceptanceRate] = useState("");
        const [actlow, setACTLow] = useState("");
        const [acthigh, setACThigh] = useState("");
        const [satlow, setSATLow] = useState("");
        const [sathigh, setSATHigh] = useState("");
        const [about, setAbout] = useState("");
        const [hsgpabool, setHSgpabool] = useState(null);
        const [targetmajors, setTargetMajors] = useState([]);
        const [targettuition, setTargetTuition] = useState(null);
        const [targetlocations, setTargetLocations] = useState("");
        const [typeSchool, setTypeSchool] = useState("");
        const [aid, setAid] = useState(null);
        const [redirect, setRedirect] = useState(false);
        const [avgfinancialaid, setavgfinancialaid] = useState("");
        const [lat, setLat]=useState("");
        const [long, setLong]=useState("");
        const [linktologo, setlinktologo]=useState("");
        const[linkcollegepic, setlinkcollegepic]=useState("");
        const [proportionofstudentsonaid, setProportion] = useState("");
        const Tuitionrange = [
                {
                        key: 0,
                        text: "0-10,000",
                        value: "10,000"
                },
                {
                        key: 1,
                        text: "10,000-15,000",
                        value: "15,000"
                },
                {
                        key: 2,
                        text: "15,000-20,000",
                        value: "20,000"
                },
                {
                        key: 3,
                        text: "20,000-25,000",
                        value: "25,000"

                },
                {
                        key: 4,
                        text: "25,000-30,000",
                        value: "30,000"
                },
                {
                        key: 5,
                        text: "30,000-35,000",
                        value: "35,000"
                },
                {
                        key: 6,
                        text: "35,000-40,000",
                        value: "40,000"
                },
                {
                        key: 7,
                        text: "40,000-45,000",
                        value: "45,000"
                },
                {
                        key: 8,
                        text: "45,000-50,000",
                        value: "50,000"
                },
                {
                        key: 9,
                        text: "50,000-55,000",
                        value: "55,000"
                },
                {
                        key: 10,
                        value: "55,000-60,000",
                        text: "60,000"
                },
                {
                        key: 11,
                        value: "65,000",
                        text: "60,000+"
                }
        ]
        const Locations = [
                {
                        key: 0,
                        text: "Illinois",
                        value: "Illinois"
                },
                {
                        key: 1,
                        text: "Indiana",
                        value: "Indiana"
                },
                {
                        key: 2,
                        text: "Iowa",
                        value: "Iowa"
                },
                {
                        key: 3,
                        text: "Kansas",
                        value: "Kansas"

                },
                {
                        key: 4,
                        text: "Michigan",
                        value: "Michigan"
                },
                {
                        key: 5,
                        text: "Minnesota",
                        value: "Minnesota"
                },
                {
                        key: 6,
                        text: "Missouri",
                        value: "Missouri"
                },
                {
                        key: 7,
                        text: "Nebraska",
                        value: "Nebraska"
                },
                {
                        key: 8,
                        text: "North Dakota",
                        value: "North Dakota"
                },
                {
                        key: 9,
                        text: "Ohio",
                        value: "Ohio"
                },
                {
                        key: 10,
                        value: "South Dakota",
                        text: "South Dakota"
                },
                {
                        key: 11,
                        value: "Wisconsin",
                        text: "Wisconsin"
                },
                {
                        key: 12,
                        value: "North Carolina",
                        text: "North Carolina"
                },
                {
                        key: 13,
                        value: "Georgia",
                        text: "Georgia"
                },
                

        ]
        const Majors = [
                {
                        key: 0,
                        text: "Business",
                        value: "Business"
                },
                {
                        key: 1,
                        text: "Nursing",
                        value: "Nursing"
                },
                {
                        key: 2,
                        text: "Pyschology",
                        value: "Pyschology"
                },
                {
                        key: 3,
                        text: "Biology",
                        value: "Biology"

                },
                {
                        key: 4,
                        text: "Engineering",
                        value: "Engineering"
                },
                {
                        key: 5,
                        text: "Education",
                        value: "Education"
                },
                {
                        key: 6,
                        text: "Communications",
                        value: "Communications"
                },
                {
                        key: 7,
                        text: "Finance and Accounting",
                        value: "Finance and Accounting"
                },
                {
                        key: 8,
                        text: "Criminal Justice",
                        value: "Criminal Justice"
                },
                {
                        key: 9,
                        text: "Anthropology",
                        value: "Anthropology"
                },
                {
                        key: 10,
                        value: "Sociology",
                        text: "Sociology"
                },
                {
                        key: 11,
                        value: "Computer Engineering",
                        text: "Computer Engineering"
                },
                {
                        key: 12,
                        value: "Computer Science",
                        text: "Computer Science"
                },
                {
                        key: 13,
                        value: "English",
                        text: "English"
                },
                {
                        key: 14,
                        value: "Economics",
                        text: "Economics"
                },
                {
                        key: 15,
                        value: "Political Science",
                        text: "Political Science"
                },
                {
                        key: 16,
                        value: "History",
                        text: "History"
                },
                {
                        key: 17,
                        value: "Kinesiology and Physical Therapy",
                        text: "Kinesiology and Physical Therapy"
                },
                {
                        key: 18,
                        value: "Health Professions",
                        text: "Health Professions"
                },
                {
                        key: 19,
                        value: "Environmental Science",
                        text: "Environmental Science"
                },
                {
                        key: 20,
                        value: "Math",
                        text: "Math"
                },
                {
                        key: 21,
                        value: "Foreign languages",
                        text: "Foreign languages"
                },
                {
                        key: 22,
                        value: "Design",
                        text: "Design"
                },
                {
                        key: 23,
                        value: "International Relations",
                        text: "International Relations"
                },
                {
                        key: 24,
                        value: "Food and Nutrition",
                        text: "Food and Nutrition"
                },
                {
                        key: 25,
                        value: "Religious Studies",
                        text: "Religious Studies"
                },
                {
                        key: 26,
                        value: "Music",
                        text: "Music"
                },
                {
                        key: 27,
                        value: "Physics",
                        text: "Physics"
                },
                {
                        key: 28,
                        value: "Legal Studies",
                        text: "Legal Studies"
                },
                {
                        key: 29,
                        value: "Dental Studies",
                        text: "Dental Studies"
                },
                {
                        key: 30,
                        value: "Architecture",
                        text: "Architecture"
                },
        ]
        const types = [
                {
                        key: 0,
                        text: "Community College",
                        value: "Community College"
                },
                {
                        key: 1,
                        text: "4-Year College/University",
                        value: "4-Year College/University"
                },
                {
                        key: 2,
                        text: "Apprenticeship Program",
                        value: "Apprenticeship Program"
                },
                {
                        key: 3,
                        text: "Trade School",
                        value: "Trade School"
                }
        ]


        function WriteFirebase() {
                console.log(isValid())
                console.log(name)
                console.log(!colleges[name])

                if (isValid() && name && !colleges[name]) {
                        const data = {
                                "targetmajors": targetmajors,
                                "targetlocations": targetlocations,
                                "pioneerform": true,
                                "tuition": targettuition,
                                "aid": aid,
                                "name": name,
                                "type": typeSchool,
                                "acceptrate": acceptrate,
                                "acthigh": acthigh,
                                "actlow": actlow,
                                "sathigh": sathigh,
                                "satlow": satlow,
                                "about": about,
                                "hsgpabool": hsgpabool,
                                "avgfinancialaid": avgfinancialaid,
                                "proportiononaid": proportionofstudentsonaid,
                                "lat": lat,
                                "long": long,
                                "logopic": linktologo,
                                "collegepic": linkcollegepic

                        }
                        dbColleges.update({
                                [name]: data
                        });
                        ;

                        console.log("Wrote Name and phone onto firebase!");
                        setRedirect(true);
                }
                else {
                        alert("Please select at least one option from the lists below.")
                }

        }
        function isValid() {
                var x = (targetlocations && targetmajors.length > 0 && targettuition && typeSchool)
                console.log(targetlocations);
                console.log(targetmajors.length)
                console.log(targettuition)
                console.log(typeSchool)
                return (x)

        }
        if (!redirect) {
                return (
                        <div ref={contextRef}>
                                <Sticky context={contextRef} >
                                        <Divider hidden />
                                        <Divider hidden />
                                        <Divider hidden />
                                        <Grid padded textAlign="center">
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                        <Form.Input  label='Name of school/college' required={true}
                                                                                onChange={(e) => { setName(e.target.value) }} placeholder='Enter official name here' />
                                                                
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                <Form.Input label='About' required={true}
                                                                                onChange={(e) => { setAbout(e.target.value) }} placeholder='Enter about information here' />
                                                                
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                <Form.Input label='Lattitude of college location' required={true}
                                                                                onChange={(e) => { setLat(e.target.value) }} placeholder='Enter as a number.' />
                                                                 <Form.Input label='Longitude of college location' required={true}
                                                                                onChange={(e) => { setLong(e.target.value) }} placeholder='Enter as a number.' />
                                                                
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal' inline>
                                                                <Form.Input label='Link to college logo picture' required={true}
                                                                                onChange={(e) => { setlinktologo(e.target.value) }} placeholder='put link to image directly.' />
                                                                 <Form.Input label='Link to college picture' required={true}
                                                                                onChange={(e) => { setlinkcollegepic(e.target.value) }} placeholder='put link to image directly' />
                                                                
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        <Form.Input fluid label='Acceptance Rate - enter as number i.e. enter 21 for 21%' required={true}
                                                                                onChange={(e) => { setAcceptanceRate(e.target.value) }} placeholder='Enter' />
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        <Form.Input fluid label='ACTHigh' required={false}
                                                                                onChange={(e) => { setACThigh(e.target.value) }} placeholder='Enter' />
                                                                        <Form.Input fluid label='ACTLow' required={false}
                                                                                onChange={(e) => { setACTLow(e.target.value) }} placeholder='Enter' />
                                                                        <Form.Input fluid label='SATHigh' required={false}
                                                                                onChange={(e) => { setSATHigh(e.target.value) }} placeholder='Enter' />
                                                                        <Form.Input fluid label='SATLow' required={false}
                                                                                onChange={(e) => { setSATLow(e.target.value) }} placeholder='Enter' />
                                                                </Form.Group>


                                                        </Form>
                                                </Grid.Row>
                                                {/* <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Majors offered in college/program:" />
          </Grid.Row> */}
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        
                                                                        <Form.Select pointing="bottom"
                                                                                options={Majors}
                                                                                selection
                                                                                label="Majors offered in college/program:"
                                                                                scrolling
                                                                                multiple
                                                                                placeholder='Select'
                                                                                onChange={(e, { value }) =>
                                                                                        setTargetMajors(value)}
                                                                                upward={false}>
                                                                        </Form.Select>
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                {/* <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Tuition of college/program:" />
          </Grid.Row> */}
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                <Form.Input fluid label='Annual tuition in USD - Enter as Number (no $ symbol).' required={false}
                                                                                onChange={(e) => { setTargetTuition(e.target.value) }} placeholder='' />
                                                                 <Form.Input fluid label='AVG Financial Aid - Enter as Number (no $ symbol)' required={false}
                                                                                onChange={(e) => { setavgfinancialaid(e.target.value) }} placeholder='Enter as Number (no $ symbol).' />
                                                                  <Form.Input fluid label='Proportion of students on aid (enter as numbers - enter 15 for 15% for example.' required={false}
                                                                                onChange={(e) => { setProportion(e.target.value) }} placeholder='Enter as Number (no $ symbol).' />
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">

                                                                <Form.Group inline required={true}>
                                                                        <label>Does this college/program offer need-based financial aid?</label>
                                                                        <Form.Radio
                                                                                label='Yes'
                                                                                value='Yes'
                                                                                checked={aid === true}
                                                                                onChange={() => setAid(true)}

                                                                        />
                                                                        <Form.Radio
                                                                                label='No'
                                                                                value='No'
                                                                                checked={aid === false}
                                                                                onChange={() => setAid(false)}
                                                                        />

                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>

                                                {/* <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Location of college:" />
          </Grid.Row> */}
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        <Form.Select pointing="bottom"
                                                                                options={Locations}
                                                                                selection
                                                                                scrolling
                                                                                label="Location of college:"
                                                                                placeholder='Select'
                                                                                onChange={(e, { value }) =>
                                                                                        setTargetLocations(value)}
                                                                                upward={false}>
                                                                        </Form.Select>
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                {/* <Grid.Row style={{ marginTop: "-15px", marginLeft: "-120px" }}>
            <Header as="h4" content="Type of college/school:" />
          </Grid.Row> */}
                                                <Grid.Row style={{ marginTop: "-23px" }}>
                                                        <Form size="large">
                                                                <Form.Group widths='equal'>
                                                                        <Form.Select pointing="bottom"
                                                                                options={types}
                                                                                selection
                                                                                label="Type of college/school:"
                                                                                scrolling
                                                                                placeholder='Select'
                                                                                onChange={(e, { value }) =>
                                                                                        setTypeSchool(value)}
                                                                                upward={false}>
                                                                        </Form.Select>
                                                                </Form.Group>
                                                        </Form>
                                                </Grid.Row>
                                                <Grid.Row>
                                                        <Grid.Column width={6}>
                                                                <Button circular
                                                                        compact
                                                                        fluid
                                                                        as={Button}
                                                                        color='blue'
                                                                        icon
                                                                        onClick={() => WriteFirebase()}
                                                                >
                                                                        <Button.Content>
                                                                                <Icon name="long arrow alternate right" size="large"></Icon>
                                                                        </Button.Content>
                                                                </Button>
                                                        </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                        <Grid.Column width={6}>
                                                                <Header as="h3">
                                                                        This information will help us find appropriate colleges for you.
              </Header>
                                                        </Grid.Column>
                                                </Grid.Row>
                                        </Grid>
                                </Sticky>
                        </div>


                );


        }
        else {
                return (<Redirect to="/register/college" push={true} />);

        }

}

export default PioneerForm;