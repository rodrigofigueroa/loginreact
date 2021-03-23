import React, { useState }  from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Dashboard            from './components/Dashboard/Dashboard.jsx'
import Preferences          from './components/Preferences/Preferences'
import Login                from './components/Login/Login'
import './App.css'

function setToken( userToken ){
  sessionStorage.setItem( 'token', JSON.stringify( userToken ) )
}

function getToken(){
  const tokenString = sessionStorage.getItem( 'token' )
  const parseToken  = JSON.parse( tokenString )
  return parseToken?.token
}

function App() {
  const token = getToken()

  if( !token ) return <Login setToken={ data => setToken( data ) } />

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
