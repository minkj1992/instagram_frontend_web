import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import Home from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import { isLoggedInVar } from './apollo';

const App: React.FC = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar); // listening this variable

    return (
        <ThemeProvider theme={Theme}>
            <>
                <GlobalStyles />
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
            </>
        </ThemeProvider>
    );
};

export default App;
