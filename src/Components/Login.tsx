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
import SubmitButton from './Auth/SubmitButton';

interface IForm {
    name: string;
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
        const { name, password } = getValues();
        console.log(name, password);
        setValue('name', name);
        setValue('password', password);
    };
    return (
        <AuthContainer>
            <FormBox>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </div>
                <form onSubmit={handleSubmit(onValid)}>
                    <Input name="name" type="text" placeholder="Username" />
                    <Input name="password" type="password" placeholder="Password" />
                    <SubmitButton type="submit" value="Log in" />
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
