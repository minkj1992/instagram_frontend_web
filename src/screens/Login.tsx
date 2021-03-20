import React from 'react';

export type Props = {
    setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const Login: React.FC<Props> = ({ setIsLoggedIn }) => {
    return (
        <>
            <h1>Login</h1>
            <button onClick={() => setIsLoggedIn(true)}>Log in</button>
        </>
    );
};

export default Login;
