import firebase from 'firebase/app';
import 'firebase/database';
import React, {useState, useContext, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomepageLayout from './components/LandingPage';
import PageHeader from './components/PageHeader'
import {dbMessages, dbCoaches, dbCollegeCounselors, dbColleges, dbStudents, dbHSCounselors, dbChats} from './firebase/firebase';
import StudentHomePage from './components/student/StudentHomepage'
import SignUpStudent from './components/signup/signupstudent';
import StudentLogin from './components/student/studentlogin';
import PioneerForm from './components/signup/pioneerform';
import RegisterCollege from './components/register/registercollege'
import CollegeHomepage  from './components/college/collegehomepage'
import RegisterCoach from './components/register/registercoach'


export const InfoContext = React.createContext();

function App() {
  const [students, setStudents]=useState("")
  const [hscounselors, setHSCounselors]=useState("")
  const [collegecounselors, setCollegeCounselors]=useState("")
  const [colleges, setColleges]=useState("")
  const [messages, setMessages]=useState("")
  const [coaches, setCoaches]=useState("");
  const [chats, setChats]=useState("");
  const [user, setUser]=useState("");
  // const [studentLogged, setStudentLogged] = useState(false);
  const [logged,setLogged]=useState("");


  React.useEffect(()=>{
    const data = localStorage.getItem('user');
    const data2=localStorage.getItem('logged');
    if(data){
      setUser(data);
      setLogged(data2);
    }
  }, []);
  React.useEffect(()=>{
    // if(user){
      localStorage.setItem('user',user);
      localStorage.setItem('logged', logged);
    // }
   
  }, [user, logged]);
  
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setCollegeCounselors(snap.val());
    }
    dbCollegeCounselors.on('value', handleData, error => alert(error));
    return () => { dbCollegeCounselors.off('value', handleData); };
  }, []);
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setColleges(snap.val());
    }
    dbColleges.on('value', handleData, error => alert(error));
    return () => { dbColleges.off('value', handleData); };
  }, []);
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setStudents(snap.val());
    }
    dbStudents.on('value', handleData, error => alert(error));
    return () => { dbStudents.off('value', handleData); };
  }, []);
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setMessages(snap.val());
    }
    dbMessages.on('value', handleData, error => alert(error));
    return () => { dbMessages.off('value', handleData); };
  }, []);
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setHSCounselors(snap.val());
    }
    dbHSCounselors.on('value', handleData, error => alert(error));
    return () => { dbHSCounselors.off('value', handleData); };
  }, []);
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setCoaches(snap.val());
    }
    dbCoaches.on('value', handleData, error => alert(error));
    return () => { dbCoaches.off('value', handleData); };
  }, []);
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setChats(snap.val());
    }
    dbChats.on('value', handleData, error => alert(error));
    return () => { dbChats.off('value', handleData); };
  }, []);
  // console.log(students);
  function withMenu(page){
  return (<div>
          <PageHeader />
          {page}
          </div>)}
  return (
    <BrowserRouter>
      <InfoContext.Provider value={{user, setUser, logged, setLogged, students, hscounselors, collegecounselors, colleges, messages, coaches, chats}} >
      <Route exact path="/" render={()=> <HomepageLayout />}/>

      {/* Register */}
      <Route exact path="/register/college" render={()=> <RegisterCollege />}/>
      <Route exact path="/register/coach" render={()=> <RegisterCoach />}/>

      
      {/* Student Pages */}
      <Route exact path="/student/login" render={()=> <StudentLogin />}/>
      <Route exact path="/student" render={()=> withMenu(<StudentHomePage />)}/>
      <Route exact path="/signup/student" render={()=> withMenu(<SignUpStudent />)}/>
      <Route exact path="/signup/student/pioneerform" render={()=> withMenu(<PioneerForm />)}/>
      <Route exact path="/college/:name" render={()=> withMenu(<CollegeHomepage />)}/>


       {/* Coach Pages */}


        {/* HS Counselor Pages */}
      

        {/* College Counselor Pages */}

      </InfoContext.Provider>
    </BrowserRouter>
  );
}


export default App;
