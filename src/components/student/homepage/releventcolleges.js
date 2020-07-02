import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button } from 'semantic-ui-react'
import { Router, useParams } from 'react-router-dom';
import { InfoContext } from '../../../App'
import ReturnCollege from './ReturnCollege'

const ReleventColleges = () => {
        const { user, students, hscounselors, collegecounselors, colleges, messages, coaches, chats } = React.useContext(InfoContext);
        const [matchedColleges, setMatched] = useState([]);
        const [hashmap, setHashMap] = useState([]);
        function isMatch(college) {
                var tuitionMatch = students[user].targettuition >= college.tuition;
                var locationMatch = students[user].targetlocations.includes(college.targetlocations)
                var majorMatch = false;
                var temp = hashmap;
                var tempmajors = [];
                for (let i = 0; i < students[user].targetmajors.length; i++) {
                        if (college.targetmajors.includes(students[user].targetmajors[i])) {
                                majorMatch = true;
                                tempmajors.push(students[user].targetmajors[i]);
                        }
                }
                temp.push([college.name, tempmajors]);
                setHashMap(temp);
                console.log(college.name)
                console.log(college.tuition);
                console.log(students[user].targettuition)

                //        console.log(tuitionMatch);
                //        console.log(locationMatch);
                //        console.log(majorMatch);


                return tuitionMatch && locationMatch && majorMatch;
        }
        useEffect(() => {
                setMatched(Object.values(colleges).filter(college => isMatch(college)));
        }, [user, colleges])
        return (
                <div>
                        <Header textAlign="center" as="h1" >Your Prospective Colleges</Header>
                        <Grid celled="internally">
                                {matchedColleges.map(college => <ReturnCollege college={college} hashmap={hashmap} />)}
                        </Grid>

                </div>
        );
}
export default ReleventColleges;