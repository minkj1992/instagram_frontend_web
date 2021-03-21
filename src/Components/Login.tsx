import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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

const FacebookLogin = styled.div`
    color: #385285;
    span {
        margin-left: 10px;
        font-weight: 600;
    }
`;

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm<LoginForm>();

    const onSubmitValid = (data: any) => {
        console.log(data);
    };
    const onSubmitInvalid = (data: any) => {
        console.log(data);
    };

    return (
        <AuthContainer>
            <PageTitle title="Login" />
            <FormBox>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </div>
                <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
                    <Input
                        ref={register({
                            required: 'Username is required',
                            minLength: 5,
                            validate: async (username) => {
                                // api check
                                const userId = await 'minkj1992';
                                return username === userId;
                            },
                        })}
                        name="username"
                        type="text"
                        placeholder="Username"
                    />
                    <Input
                        ref={register({ required: 'Password is required' })}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
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
