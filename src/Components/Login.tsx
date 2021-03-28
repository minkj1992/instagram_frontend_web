import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { gql, useMutation } from '@apollo/client';

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
import { login, loginVariables } from '../__generated__/login';
import { logUserIn } from '../apollo';

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
    loginResult: boolean;
}

const Login: React.FC = () => {
    const { register, handleSubmit, errors, getValues, formState, setError, clearErrors } = useForm<LoginForm>({
        mode: 'onChange',
    });

    const onSubmitValid = (data) => {
        if (loading) return;
        const { username, password } = getValues();
        loginMutation({
            variables: { username, password },
        });
    };

    const onCompleted = (data) => {
        const {
            login: { ok, error, token },
        } = data;

        if (!ok) {
            return setError('loginResult', { message: error });
        }

        if (token) {
            logUserIn(token);
        }
    };

    const [loginMutation, { loading }] = useMutation<login, loginVariables>(LOGIN_MUTATION, {
        onCompleted,
    });

    const clearLoginError = () => {
        clearErrors('loginResult');
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
                            // validate: async (username) => {
                            //     // TODO: api check
                            //     const userId = await 'minkj1992';
                            //     return username === userId;
                            // },
                        })}
                        onChange={clearLoginError}
                        name="username"
                        type="text"
                        placeholder="Username"
                        hasError={Boolean(errors?.username?.message)}
                    />
                    <FormError message={errors?.username?.message} />

                    <Input
                        ref={register({ required: 'Password is required' })}
                        onChange={clearLoginError}
                        name="password"
                        type="password"
                        placeholder="Password"
                        hasError={Boolean(errors?.password?.message)}
                    />
                    <FormError message={errors?.password?.message} />
                    <Button
                        type="submit"
                        value={loading ? 'Loading...' : 'Log in'}
                        disabled={!formState.isValid || loading}
                    />
                    <FormError message={errors?.loginResult?.message} />
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
