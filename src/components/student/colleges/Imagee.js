import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import React, { useState, useEffect, useContext } from 'react';
import { Container, Header, Divider, Grid, Loader, Button, Image, Segment } from 'semantic-ui-react'
import { Router, useParams, Link } from 'react-router-dom';
import { InfoContext } from '../../../App'

const Imagee = ({srcc})=> {

        return(
                <div>
                    
                <Grid.Row>
                                        
                                        
                                                 <img width="1200px" height='600px' src={srcc}/>
                                                

                                        {/* <Image src={colleges[name].collegepic}></Image> */}
                                </Grid.Row>
                                <Grid.Row>
                                       Test
                                </Grid.Row>
                                <Grid.Row>
                                       Test
                                </Grid.Row>
                                <Grid.Row>
                                       Test
                                </Grid.Row>
                                <Grid.Row>
                                       Test
                                </Grid.Row> 
                                <Grid.Row>
                                       Test
                                </Grid.Row> 
                                <Grid.Row>
                                       Test
                                </Grid.Row> 
                                <Grid.Row>
                                       Test
                                </Grid.Row>
                                <Grid.Row>
                                       Test
                                </Grid.Row>
                                <Grid.Row>
                                       Test
                                </Grid.Row>
                                <Grid.Row>
                                       Test
                                </Grid.Row>
                                <Grid.Row>
                                       
                                </Grid.Row>
                              
                                </div>
        );
}
export default Imagee;