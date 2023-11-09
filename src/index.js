import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sg from './sg';
import Lg from './lg'
import Ad from './ad'
import Crud from './crud'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path="/" element={<App/>}></Route>
      <Route exact path="/" element={<Sg/>}></Route>
        <Route exact path="/" element={<Lg/>}></Route>
        <Route exact path="/" element={<Ad/>}></Route>
        <Route exact path="/" element={<crud/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();