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
import Hotel from './components/Hotel/Hotel';
import PrivateRoute from './PrivateRoute/PrivateRoute';
export const bookingContext = createContext();

function App() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date();
  const month = date.getMonth() + 1;
  const currentMonthName = monthNames[month]
  const currentDay = date.getDate()+1;
  const data = fakeData;
  const [currentResort, setCurrentResort] = useState(data[0]);
  const [signedInUser, setSignedInUser] = useState({})
  const [travelDate, setTravelDate] = useState({
    to:currentDay,
    from: currentDay,
    month: currentMonthName
  });
  return (
    <div className="App">
      <bookingContext.Provider value={[currentResort, setCurrentResort,signedInUser, setSignedInUser, travelDate, setTravelDate]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="/hotel">
            <PrivateRoute>
              <Hotel/>
            </PrivateRoute>
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
