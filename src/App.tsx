import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import { useState } from 'react';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from './apollo';

const App: React.FC = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar); // listening this variable

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {isLoggedIn ? <Home /> : <Login />}
                    </Route>
                    <Route>
                        {/* <Redirect to="/"> */}
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
