import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useReactiveVar, ApolloProvider } from '@apollo/client';

import { ThemeProvider } from 'styled-components';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';

import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Theme';
import { client, isLoggedInVar, isDarkModeVar } from './apollo';
import routes from './routes';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);
    const darkMode = useReactiveVar(isDarkModeVar);

    return (
        <ApolloProvider client={client}>
            <HelmetProvider>
                <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
            </HelmetProvider>
        </ApolloProvider>
    );
};

export default App;
