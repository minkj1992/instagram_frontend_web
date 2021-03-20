import React from 'react';
import { isLoggedInVar } from '../apollo';

const Login: React.FC = () => {
    return (
        <>
            <h1>Login</h1>
            <button onClick={() => isLoggedInVar(true)}>Log in</button>
        </>
    );
};

export default Login;
