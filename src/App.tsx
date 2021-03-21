import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';

import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Theme';
import { isDarkModeVar, isLoggedInVar } from './apollo';
import routes from './routes';

const App: React.FC = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const isDarkMode = useReactiveVar(isDarkModeVar);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyles />
            <>
                <Router>
                    <Switch>
                        <Route path={routes.home} exact>
                            {isLoggedIn ? <Home /> : <Login />}
                        </Route>
                        {!isLoggedIn ? (
                            <Route path={routes.signUp}>
                                <SignUp />
                            </Route>
                        ) : null}
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </>
        </ThemeProvider>
    );
};

export default App;
