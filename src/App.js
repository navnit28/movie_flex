import React from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screen/LoginScreen';
function App() {
  const user ='Navnit';
  return (
    <div className="app">
      <h1>
       
        <Router>
          {!user?(
            <LoginScreen/>
          ):(
        <Switch>
          <Route exact path="/">
          <HomeScreen/>
          </Route>
        </Switch>
        )}
    </Router>
      </h1>
    </div>
  );
}

export default App;
