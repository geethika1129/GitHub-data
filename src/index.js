import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/card';
import reportWebVitals from './reportWebVitals';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <br/>
  <h1><center>List of Github Users</center></h1>
  <br/>
  <br/>
  <br/>
  <br/>
  <div className="container">
    <div className="row">
   
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    
    </div>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
