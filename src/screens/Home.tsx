import React from 'react';
import { isLoggedInVar } from '../apollo';

const Home: React.FC = () => {
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => isLoggedInVar(false)}>Log out</button>
        </>
    );
};

export default Home;
