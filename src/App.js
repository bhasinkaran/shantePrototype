import firebase from 'firebase/app';
import 'firebase/database';
import React, {useState, useContext, useEffect} from 'react';
import {Router } from  'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomepageLayout from './components/HomePageLayout';

function App() {
  return (
    <div className="App">
      <HomepageLayout />
    </div>
  );
}
// <header className="App-header">
{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}

export default App;
