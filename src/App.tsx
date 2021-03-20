import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import { useState } from 'react';
import Login from './screens/Login';
import NotFound from './screens/NotFound';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
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
