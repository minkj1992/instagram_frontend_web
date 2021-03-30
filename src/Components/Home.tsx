import React from 'react';
import { useHistory } from 'react-router';
import { clearStorage } from '../apollo';
import routes from '../routes';

const Home: React.FC = () => {
    const history = useHistory();

    const logout = () => {
        clearStorage();
        history.replace(routes.home);
    };

    return (
        <>
            <h1>Welcome Login</h1>
            <button onClick={() => logout()}>Log out</button>
        </>
    );
};

export default Home;
