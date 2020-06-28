import {Redirect} from 'react-router-dom'
import _ from 'lodash'
import React, {useState, useEffect, useContext} from 'react';
import {Container, Search, Grid} from 'semantic-ui-react'
import {Router , useParams} from  'react-router-dom';

import PageHeader from './pageheader'
import {InfoContext} from '../App'