import React from 'react';
import { logUserOut } from '../apollo';

const Home: React.FC = () => {
    return (
        <>
            <h1>Welcome Login</h1>
            <button onClick={() => logUserOut()}>Log out</button>
        </>
    );
};

export default Home;
