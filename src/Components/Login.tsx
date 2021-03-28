import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { gql } from '@apollo/client';

import styled from 'styled-components';
import routes from '../routes';
import PageTitle from './_common/PageTitle';

import AuthContainer from './Auth/AuthContainer';
import BottomBox from './Auth/BottomBox';
import FormBox from './Auth/FormBox';
import Input from './Auth/Input';
import Separator from './Auth/Separator';
import Button from './Auth/Button';
import { useForm } from 'react-hook-form';
import FormError from './_common/FormError';

const FacebookLogin = styled.div`
    color: #385285;
    span {
        margin-left: 10px;
        font-weight: 600;
    }
`;

export const LOGIN_MUTATION = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ok
            token
            error
        }
    }
`;

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, handleSubmit, errors, setError, formState } = useForm<LoginForm>({
        mode: 'onChange',
    });

    const onSubmitValid = (data: any) => {
        console.log(data);
    };

    return (
        <AuthContainer>
            <PageTitle title="Login" />
            <FormBox>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </div>
                <form onSubmit={handleSubmit(onSubmitValid)}>
                    <Input
                        ref={register({
                            required: 'Username is required',
                            minLength: {
                                value: 5,
                                message: 'Username should be longer than 5 chars',
                            },
                            validate: async (username) => {
                                // TODO: api check
                                const userId = await 'minkj1992';
                                return username === userId;
                            },
                        })}
                        name="username"
                        type="text"
                        placeholder="Username"
                        hasError={Boolean(errors?.username?.message)}
                    />
                    <FormError message={errors?.username?.message} />

                    <Input
                        ref={register({ required: 'Password is required' })}
                        name="password"
                        type="password"
                        placeholder="Password"
                        hasError={Boolean(errors?.password?.message)}
                    />
                    <FormError message={errors?.password?.message} />
                    <Button type="submit" value="Log in" disabled={!formState.isValid} />
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
