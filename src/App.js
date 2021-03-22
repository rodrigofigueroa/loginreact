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

function App() {
  const [ token, setToken ] = useState( null )

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
