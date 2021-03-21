import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import styled from 'styled-components';
import routes from '../routes';

import AuthContainer from './Auth/AuthContainer';
import BottomBox from './Auth/BottomBox';
import FormBox from './Auth/FormBox';
import Input from './Auth/Input';
import Separator from './Auth/Separator';
import Button from './Auth/Button';

const FacebookLogin = styled.div`
    color: #385285;
    span {
        margin-left: 10px;
        font-weight: 600;
    }
`;

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: username } = e.target;
        setUsername(username);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === '') {
            setUsernameErr('Username is empty now');
        }

        if (username.length < 10) {
            setUsernameErr('Username is too short');
        }
        // onSubmit(form);
        setUsername(''); // 초기화
    };

    return (
        <AuthContainer>
            <FormBox>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </div>
                <form onSubmit={handleSubmit}>
                    <Input onChange={onUsernameChange} value={username} type="text" placeholder="Username" />
                    {usernameErr}
                    <Input name="password" type="password" placeholder="Password" />
                    <Button type="submit" value="Log in" disabled={username === '' || username.length < 10} />
                </form>
                <Separator value="OR" />
                <FacebookLogin>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <span>Log in with Facebook</span>
                </FacebookLogin>
            </FormBox>
            <BottomBox cta="Don't have an account?" link={routes.signUp} linkText="Sign up" />
        </AuthContainer>
    );
};

export default Login;
