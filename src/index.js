import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

import * as serviceWorker from './serviceWorker';
const firebase =require("firebase");
  require("firebase/firestore")
  firebase.initializeApp({
    apiKey: "AIzaSyAi1Ii5dxzM1m_3lNAJpyW7nHcQhsIdDh8",
    authDomain: "falcon-df066.firebaseapp.com",
    databaseURL: "https://falcon-df066.firebaseio.com",
    projectId: "falcon-df066",
    storageBucket: "falcon-df066.appspot.com",
    messagingSenderId: "33031199892",
    appId: "1:33031199892:web:ce2738640454afeeeae881",
    measurementId: "G-F325RQ1W4N"
  });

  const routing = (
      <Router>
          <div id='routing-container'>
              <Route path='/login'component={LoginComponent}></Route>
              <Route path='/signup'component={SignupComponent}></Route>
              <Route path='/dashboard'component={DashboardComponent}></Route>
          </div>
      </Router>

  );

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
