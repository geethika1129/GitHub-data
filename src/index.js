import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/card';
import reportWebVitals from './reportWebVitals';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className="container">
    <div className="row">
    <Card 
       name="Geethika"
       text="hello"
       a="sing"
    />
    <Card 
       name="John"
       text="hey hey"
       a="dance"
    />
    <Card 
       name="Peter"
       text="hi dude"
       a="coolest"
    />
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
