import React from 'react';
import styled from 'styled-components';
import { isLoggedInVar } from '../apollo';

const Title = styled.h1``;

const Container = styled.div``;

const Login: React.FC = () => {
    return (
        <Container>
            <Title>Login</Title>
            <button
                onClick={() => {
                    isLoggedInVar(true);
                }}
            >
                Log in
            </button>
        </Container>
    );
};

export default Login;
