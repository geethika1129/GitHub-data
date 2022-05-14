import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import card from './components/card';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className="container">
   <div className="row">
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    <card />
    </div></div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
