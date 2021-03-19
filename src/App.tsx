import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <h1>home</h1>
                    </Route>
                    <Route path="/hello">
                        <h1>hello world</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
