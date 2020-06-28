import firebase from 'firebase/app';
import 'firebase/database';
import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomepageLayout from './components/LandingPage';
import PageHeader from './components/PageHeader'
import {dbMessages, dbCollegeCounselors, dbColleges, dbStudents, dbHSCounselors} from './firebase/firebase';


export const InfoContext = React.createContext();

function App() {
  const [students, setStudents]=useState("")
  const [hscounselors, setHSCounselors]=useState("")
  const [collegecounselors, setCollegeCounselors]=useState("")
  const [colleges, setColleges]=useState("")
  const [messages, setMessages]=useState("")
  const [user, setUser]=useState("");

  
  function withMenu(page){
  return (<div>
          <PageHeader />
          {page}
          </div>)}
  return (
    <BrowserRouter>

      {withMenu(<HomepageLayout />)}
    </BrowserRouter>
  );
}


export default App;
