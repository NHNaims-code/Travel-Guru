import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import fakeData from './fakeData/fakeData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
export const bookingContext = createContext();

function App() {
  const data = fakeData;
  const [currentResort, setCurrentResort] = useState(data[0]);
  console.log(data[0]);
  return (
    <div className="App">
      <bookingContext.Provider value={[currentResort, setCurrentResort]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      </bookingContext.Provider>
    </div>
  );
}

export default App;
