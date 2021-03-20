import React from 'react';

export type Props = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const Home: React.FC<Props> = ({ setIsLoggedIn }) => {
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => setIsLoggedIn(false)}>Log out</button>
        </>
    );
};

export default Home;
