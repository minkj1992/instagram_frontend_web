import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import routes from '../routes';

import AuthContainer from './Auth/AuthContainer';
import BottomBox from './Auth/BottomBox';
import FormBox from './Auth/FormBox';
import Input from './Auth/Input';
import Separator from './Auth/Separator';
import Button from './Auth/Button';

interface IForm {
    username: string;
    password: string;
}

const FacebookLogin = styled.div`
    color: #385285;
    span {
        margin-left: 10px;
        font-weight: 600;
    }
`;

const Login: React.FC = () => {
    const { handleSubmit, getValues, setValue } = useForm<IForm>();

    const onValid = () => {
        const { username, password } = getValues();
        console.log(username, password);
        setValue('username', username);
        setValue('password', password);
    };
    return (
        <AuthContainer>
            <FormBox>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </div>
                <form onSubmit={handleSubmit(onValid)}>
                    <Input name="username" type="text" placeholder="Username" />
                    <Input name="password" type="password" placeholder="Password" />
                    <Button type="submit" value="Log in" />
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
