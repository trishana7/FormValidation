import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from "./Profile";
// import Edit from './Edit';
import {render} from 'react-dom';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />    
    </Routes>
  </BrowserRouter>,
  rootElement
);



