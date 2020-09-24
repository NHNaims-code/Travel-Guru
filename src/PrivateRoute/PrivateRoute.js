import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { bookingContext } from '../App';

function PrivateRoute({ children, ...rest }) {
    const [currentResort, setCurrentResort, signedInUser, setSignedInUser] = useContext(bookingContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        signedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;